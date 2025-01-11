"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" }
  ];
  const socialLinks = [
    { Icon: FaFacebook, href: "https://facebook.com/ojastech", color: "#1877F2" },
    { Icon: FaXTwitter, href: "https://x.com/ojastech", color: "#000000" },
    { Icon: FaWhatsapp, href: "https://wa.me/+9779841185541", color: "#25D366" },
    { Icon: FaYoutube, href: "https://youtube.com/ojastech", color: "#FF0000" },
    { Icon: FaLinkedin, href: "https://linkedin.com/company/ojastech", color: "#0A66C2" }
  ];

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
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[22px] font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent [text-shadow:_0_1px_1px_rgb(0_0_0_/_10%)]">
                  Ojas Technologies
                </span>
              </h2>
              <span className="text-[13px] font-medium text-gray-600 tracking-wide">Digital Solutions Partner</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-[16px] font-semibold text-gray-800 hover:text-primary relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map(({ Icon, href, color }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            whileTap={{ scale: 0.95 }}
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
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="grid grid-cols-5 gap-2 px-4 py-4">
                {socialLinks.map(({ Icon, href, color }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
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
