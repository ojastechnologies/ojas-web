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
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-indigo-100/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-indigo-200">
              <Image src="/img/logo.jpg" alt="Ojas Technologies logo - Offshore .NET and React development company" width={36} height={36} className="object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <span className={`text-base font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>Ojas Technologies</span>
              <span className={`block text-[10px] font-medium tracking-wide ${scrolled ? "text-gray-400" : "text-white/60"}`}>Offshore .NET & React Development</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.name} href={item.href} className={`btn-ghost text-xs ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80 hover:bg-white/10"}`}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2">
            {SOCIAL_LINKS.slice(0, 2).map(({ Icon, href, color, name }) => (
              <Link key={href} href={href} target="_blank" className={`btn-ghost !p-2 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80 hover:bg-white/10"}`} aria-label={name}>
                <Icon className="w-4 h-4" style={{ color }} />
              </Link>
            ))}
            <Link href="/contact" className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 ml-2 ${
              scrolled
                ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600"
                : "border-2 border-white/30 text-white hover:bg-white/10"
            }`}>
              Start Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className={`md:hidden btn-ghost !p-2 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80 hover:bg-white/10"}`} aria-label="Menu">
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
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-indigo-100/50"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link key={item.name} href={item.href} className="block btn-ghost !justify-start" onClick={() => setOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-indigo-100 pt-3 mt-3">
                <div className="flex gap-2 mb-3">
                  {SOCIAL_LINKS.map(({ Icon, href, color, name }) => (
                    <Link key={href} href={href} target="_blank" className="btn-ghost !p-2" aria-label={name}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </Link>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-600 w-full text-center" onClick={() => setOpen(false)}>
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
