"use client";
import {
  MotionConfig,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

/* ══════════════════════════════════════════════════
   Shared motion primitives. Everything here honours
   prefers-reduced-motion via MotionProvider and the
   checks below.
   ══════════════════════════════════════════════════ */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Root provider: one easing curve site-wide, and reduced motion when the OS asks. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: EASE_OUT }}>
      <SpotlightTracker />
      {children}
    </MotionConfig>
  );
}

/** Fade + rise + un-blur when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const staggerChild = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE_OUT } },
};

/** Container that reveals its <StaggerItem> children one after another. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

export interface TextSegment {
  text: string;
  className?: string;
  /** Line break after this segment */
  br?: boolean;
}

/**
 * Heading whose words slide up from behind a mask, one after another.
 * Segments let part of the heading carry its own style (e.g. a gradient).
 */
export function SplitText({
  segments,
  className,
  delay = 0,
  as = "h2",
  inView = true,
}: {
  segments: TextSegment[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
  /** false = play on mount (above-the-fold headings) */
  inView?: boolean;
}) {
  const Tag = motion[as];
  let index = 0;
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-40px" } }
    : { animate: "show" };
  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      aria-label={segments.map((s) => s.text).join(" ")}
    >
      {segments.map((seg, si) => (
        <span key={si} aria-hidden>
          {seg.text.split(" ").filter(Boolean).map((word) => {
            index += 1;
            return (
              <span key={`${si}-${index}`} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className={`inline-block ${seg.className ?? ""}`}
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
                  }}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            );
          })}
          {seg.br && <br />}
        </span>
      ))}
    </Tag>
  );
}

/** Counts up to the number inside a value like "30+", "$2B+", "99.9%". Non-numeric values render as-is. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : NaN;
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const [display, setDisplay] = useState(match && !reduce ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || isNaN(target) || !inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE_OUT,
      onUpdate: (v) => {
        const n = match[2].includes(",")
          ? Math.round(v).toLocaleString("en-US")
          : v.toFixed(decimals);
        setDisplay(`${match[1]}${n}${match[3]}`);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/** Pulls its child a few pixels toward the cursor. */
export function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 250, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 250, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-flex"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** 3D tilt that follows the cursor. */
export function Tilt({ children, className, max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 150, damping: 15 });

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={(e) => {
          if (!ref.current || e.pointerType !== "mouse") return;
          const r = ref.current.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width);
          py.set((e.clientY - r.top) / r.height);
        }}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Thin gradient bar at the top of the viewport showing page scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400"
    />
  );
}

/**
 * One document-level listener feeds --mx/--my to whichever `.spotlight`
 * or `.glass-hover` element is under the cursor; CSS draws the glow (see globals.css).
 */
function SpotlightTracker() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(".spotlight, .glass-hover") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
