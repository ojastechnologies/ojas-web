"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { CONTACT_INFO, SOCIAL_LINKS, SERVICES_LIST } from "@/app/constants";

export function Footer() {
    return (
        <footer className="relative pt-24 pb-8 overflow-hidden bg-slate-950 text-slate-300">
            {/* Dark premium background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <Link href="/" className="inline-flex items-center gap-4 group mb-6">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300">
                                <Image
                                    src="/img/logo.jpg"
                                    alt="Ojas Technologies"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Ojas Technologies
                                </h2>
                            </div>
                        </Link>

                        <p className="text-slate-400 leading-relaxed mb-8">
                            A premier offshore IT outsourcing and custom software development company. We deliver scalable web, mobile, and cloud solutions for startups and enterprises worldwide.
                        </p>

                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-3 lg:col-start-6"
                    >
                        <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">
                            Our Expertise
                        </h3>
                        <ul className="space-y-3">
                            {SERVICES_LIST.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href="/#services"
                                        className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                                    >
                                        <HiArrowRight className="w-4 h-4 text-blue-500/0 group-hover:text-blue-400 -ml-6 group-hover:ml-0 transition-all duration-300" />
                                        <span>{service}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            {CONTACT_INFO.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link || info.href}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 group"
                                >
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shrink-0">
                                        <info.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 mt-1.5 leading-snug">
                                        {info.content}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Ojas Technologies Pvt. Ltd. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
