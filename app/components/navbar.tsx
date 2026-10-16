"use client";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/app/constants";
import { ScrollProgress } from "@/app/components/motion";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Solid background once scrolled; slide away while scrolling down, return on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > prev && y > 160 && !open);
  });

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled ? "bg-ink-950/70 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/20 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
                <Image src="/img/logo.jpg" alt="Ojas Technologies logo - AI integration and software engineering company" width={36} height={36} className="object-cover" priority />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-base font-semibold text-white">Ojas Technologies</span>
                <span className="block text-[10px] font-medium tracking-wide text-white/50">AI & Software Engineering</span>
              </div>
            </Link>

            {/* Desktop nav: a pill slides under the hovered (or active) link */}
            <div className="hidden md:flex items-center gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.02] p-1" onMouseLeave={() => setHovered(null)}>
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                const showPill = hovered ? hovered === item.name : active;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHovered(item.name)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 ${
                      active || hovered === item.name ? "text-white" : "text-white/65"
                    }`}
                  >
                    {showPill && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center gap-2">
              {SOCIAL_LINKS.slice(0, 2).map(({ Icon, href, name }) => (
                <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !p-2 text-white/70 hover:text-white hover:bg-white/[0.06]" aria-label={name}>
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-white text-ink-950 overflow-hidden ml-2">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
                <span className="relative">Book an AI call</span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(!open)} className="md:hidden btn-ghost !p-2 text-white hover:bg-white/10" aria-label="Menu" aria-expanded={open}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {open ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-lg border-t border-white/[0.06]"
            >
              <motion.div
                className="px-4 py-3 space-y-1"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
              >
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.name} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                    <Link
                      href={item.href}
                      className={`block btn-ghost !justify-start hover:bg-white/[0.06] ${isActive(pathname, item.href) ? "text-white bg-white/[0.04]" : "text-white/75"}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-white/[0.08] pt-3 mt-3">
                  <div className="flex gap-2 mb-3">
                    {SOCIAL_LINKS.map(({ Icon, href, name }) => (
                      <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !p-2 text-white/70 hover:bg-white/[0.06]" aria-label={name}>
                        <Icon className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-ink-950 text-xs font-semibold rounded-full w-full text-center" onClick={() => setOpen(false)}>
                    Book an AI call
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
