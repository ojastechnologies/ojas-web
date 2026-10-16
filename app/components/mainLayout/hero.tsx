"use client";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowRight, HiDocumentText, HiSparkles } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";
import { CountUp, Magnetic, SplitText, Tilt } from "@/app/components/motion";

const QUESTION = "Can we refund an annual plan cancelled after 30 days?";

const SOURCES = [
  { id: 1, name: "billing-policy-2025.pdf", loc: "p. 4", score: "0.91" },
  { id: 2, name: "support-kb/refunds.md", loc: "§ 2", score: "0.87" },
  { id: 3, name: "enterprise-msa.docx", loc: "§ 7.2", score: "0.82" },
];

const ANSWER: { text: string; cite?: number }[] = [
  { text: "Yes. Annual plans cancelled after 30 days get a prorated refund for unused months, minus a 10% processing fee" },
  { text: "", cite: 1 },
  { text: ". Enterprise customers follow the terms in their signed agreement instead" },
  { text: "", cite: 3 },
  { text: "." },
];

const ANSWER_LEN = ANSWER.reduce((n, p) => n + p.text.length, 0);

/** Animated demo of a grounded RAG answer: query → retrieval → cited answer. */
function RagDemo() {
  const reduce = useReducedMotion();
  // stage 0: typing question, 1: retrieving, 2: streaming answer, 3: done
  const [stage, setStage] = useState(reduce ? 3 : 0);
  const [typed, setTyped] = useState(reduce ? QUESTION.length : 0);
  const [streamed, setStreamed] = useState(reduce ? ANSWER_LEN : 0);

  useEffect(() => {
    if (reduce) return;
    let t: ReturnType<typeof setTimeout>;
    if (stage === 0) {
      if (typed < QUESTION.length) t = setTimeout(() => setTyped(typed + 1), 32);
      else t = setTimeout(() => setStage(1), 350);
    } else if (stage === 1) {
      t = setTimeout(() => setStage(2), 1500);
    } else if (stage === 2) {
      if (streamed < ANSWER_LEN) t = setTimeout(() => setStreamed(Math.min(ANSWER_LEN, streamed + 3)), 28);
      else t = setTimeout(() => setStage(3), 200);
    } else {
      t = setTimeout(() => { setTyped(0); setStreamed(0); setStage(0); }, 6000);
    }
    return () => clearTimeout(t);
  }, [stage, typed, streamed, reduce]);

  // Render the answer up to `chars` characters, inserting citations once reached.
  const renderAnswer = (chars: number, done: boolean) => {
    let remaining = chars;
    return ANSWER.map((part, i) => {
      if (part.cite) {
        return remaining > 0 || done ? (
          <sup key={i} className="mx-0.5 inline-flex items-center justify-center w-4 h-4 rounded bg-cyan-400/15 text-[9px] font-semibold text-cyan-200 align-top">
            {part.cite}
          </sup>
        ) : null;
      }
      const shown = part.text.slice(0, Math.max(0, remaining));
      remaining -= part.text.length;
      return <span key={i}>{shown}</span>;
    });
  };

  // One body renderer, used twice: an invisible copy of the finished state
  // reserves the card's final height, so the looping animation never shifts
  // the page below it (which would throw off #anchor jumps).
  const body = (st: number, ty: number, chars: number, ghost: boolean) => (
    <div className="p-5 space-y-4 [grid-area:1/1]" aria-hidden={ghost || undefined} style={ghost ? { visibility: "hidden" } : undefined}>
      {/* Question */}
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white/[0.08] px-4 py-2.5 text-sm text-white/90">
          {QUESTION.slice(0, ty)}
          {st === 0 && <span className="inline-block w-[2px] h-4 -mb-0.5 ml-0.5 bg-cyan-300 animate-pulse" />}
        </div>
      </div>

      {/* Retrieval */}
      {st >= 1 && (
        <motion.div initial={ghost ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
            {st === 1 ? "Searching 12,480 chunks…" : "Retrieved · reranked"}
          </div>
          <div className="grid gap-1.5">
            {SOURCES.map((src, i) => (
              <motion.div
                key={src.id}
                initial={ghost ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduce || ghost ? 0 : i * 0.25 }}
                className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5"
              >
                <span className="font-mono text-[10px] text-cyan-300/80">[{src.id}]</span>
                <HiDocumentText className="w-3.5 h-3.5 text-white/50" />
                <span className="font-mono text-[11px] text-white/70 truncate">{src.name}</span>
                <span className="font-mono text-[10px] text-white/50">{src.loc}</span>
                <span className="ml-auto font-mono text-[10px] text-emerald-300/70">{src.score}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Answer */}
      {st >= 2 && (
        <motion.div initial={ghost ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
          <div className="w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
            <HiSparkles className="w-3.5 h-3.5 text-paper" />
          </div>
          <p className="text-sm leading-relaxed text-white/80">{renderAnswer(chars, st === 3)}</p>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-violet-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="theme-dark relative glass !bg-ink-900 ring-gradient overflow-hidden shadow-2xl shadow-[rgba(11,16,32,0.35)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] text-white/50">knowledge-assistant · example</span>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-300/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> live
          </span>
        </div>

        <div className="grid">
          {body(3, QUESTION.length, ANSWER_LEN, true)}
          {body(stage, typed, streamed, false)}
        </div>

        {/* Footer metrics */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3 border-t border-white/[0.06] font-mono text-[10px] text-white/50">
          <span>grounded in 2 of 3 sources</span>
          <span>·</span>
          <span>access-controlled</span>
          <span>·</span>
          <span>PII redacted</span>
        </div>
      </div>
    </div>
  );
}

export const Hero = () => {
  // Soft light that trails the cursor across the hero
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, rgba(56,189,248,0.10), transparent 60%)`;

  return (
    <section
      className="relative w-full overflow-hidden bg-ink-950"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {/* Backgrounds */}
      <div className="orb orb-a w-[520px] h-[520px] -top-40 -left-32 bg-cyan-500/25" />
      <div className="orb orb-b w-[560px] h-[560px] -top-20 right-[-10%] bg-violet-600/25" />
      <div className="orb orb-a w-[420px] h-[420px] bottom-[-20%] left-[35%] bg-sky-500/10" style={{ animationDelay: "-7s" }} />
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: glow }} />
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-12 items-center">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              className="dark-badge !mb-0"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              AI Engineering · RAG · Agents
            </motion.span>

            <SplitText
              as="h1"
              inView={false}
              delay={0.15}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.02] text-white"
              segments={[
                { text: "We build AI that", br: true },
                { text: "works on" },
                { text: "your data.", className: "text-gradient-animated" },
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Production RAG pipelines, LLM integrations, and AI agents — shipped by
              senior .NET, React, and Azure engineers from Kathmandu who already build
              HIPAA-grade software for US companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="flex gap-3 flex-wrap"
            >
              <Magnetic>
                <Link href="/contact" className="group btn-glow">
                  Book an AI consultation
                  <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/#rag" className="btn-line">
                  See how our RAG works
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] max-w-lg"
            >
              {[
                { n: COMPANY_STATS.projectsDelivered, l: "Projects delivered" },
                { n: COMPANY_STATS.yearsExperience, l: "Years in production" },
                { n: "HIPAA", l: "Compliant builds shipped" },
              ].map((s) => (
                <div key={s.l}>
                  <CountUp value={s.n} className="block font-display text-2xl md:text-3xl font-semibold text-white" />
                  <div className="text-xs md:text-sm text-white/55 mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
          >
            <Tilt max={5}>
              <RagDemo />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
