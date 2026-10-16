"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/app/constants";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-950/75 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/20">
              <Image src="/img/logo.jpg" alt="Ojas Technologies logo - AI integration and software engineering company" width={36} height={36} className="object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-base font-semibold text-white">Ojas Technologies</span>
              <span className="block text-[10px] font-medium tracking-wide text-white/50">AI & Software Engineering</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.name} href={item.href} className="btn-ghost text-xs text-white/75 hover:text-white hover:bg-white/[0.06]">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2">
            {SOCIAL_LINKS.slice(0, 2).map(({ Icon, href, name }) => (
              <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !p-2 text-white/70 hover:text-white hover:bg-white/[0.06]" aria-label={name}>
                <Icon className="w-4 h-4" />
              </Link>
            ))}
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-white text-ink-950 hover:bg-cyan-50 transition-all duration-200 ml-2">
              Book an AI call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden btn-ghost !p-2 text-white hover:bg-white/10" aria-label="Menu" aria-expanded={open}>
            {open ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
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
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-lg border-t border-white/[0.06]"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link key={item.name} href={item.href} className="block btn-ghost !justify-start text-white/80 hover:bg-white/[0.06]" onClick={() => setOpen(false)}>
                  {item.name}
                </Link>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
