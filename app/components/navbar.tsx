"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/app/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-white/50 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/img/logo.jpg"
                alt="Ojas Technologies Nepal"
                width={45}
                height={45}
                className="w-auto h-12"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[22px] font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent [text-shadow:_0_1px_1px_rgb(0_0_0_/_10%)]">
                  Ojas Technologies
                </span>
              </h2>
              <span className="text-[13px] font-medium text-gray-600 tracking-wide">Your Digital Solutions Partner</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Right Section: Social + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ Icon, href, color, name }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all shadow-md hover:shadow-blue-500/30"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenuLine className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.name}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="grid grid-cols-5 gap-2 px-4 py-4">
                {SOCIAL_LINKS.map(({ Icon, href, color, name }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      aria-label={name}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
