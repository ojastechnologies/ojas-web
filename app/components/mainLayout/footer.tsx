"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker, HiPhone, HiMail, HiArrowRight } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const services = [
    "Web Development",
    "Mobile Application",
    "Desktop Application",
    "Graphics Design",
    "Digital Marketing",
    "SEO Optimization"
];

const contactInfo = [
    { icon: HiLocationMarker, text: "Basantanagar, 16, Kathmandu", href: "https://goo.gl/maps/xyz" },
    { icon: HiPhone, text: "+977 9841185541", href: "tel:+9779841185541" },
    { icon: HiMail, text: "contact@ojastech.io", href: "mailto:contact@ojastech.io" }
];

const socialLinks = [
    { Icon: FaFacebook, href: "https://facebook.com/ojastech", color: "#1877F2", label: "Facebook" },
    { Icon: FaTwitter, href: "https://twitter.com/ojastechnepal", color: "#1DA1F2", label: "Twitter" },
    { Icon: FaYoutube, href: "https://youtube.com/ojastech", color: "#FF0000", label: "YouTube" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com/company/ojastech", color: "#0A66C2", label: "LinkedIn" }
];

export function Footer() {
    return (
        <footer className="relative pt-24 pb-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-2 group-hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src="/img/logo.jpg"
                                    alt="Ojas Technologies"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                    Ojas Technologies
                                </h2>
                                <p className="text-sm text-gray-600">Digital Solutions Partner</p>
                            </div>
                        </Link>
                        
                        <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-lg">
                            <p className="text-gray-600 leading-relaxed">
                                At Ojas Technologies, we are committed to becoming a leading organization that provides measurable business value through effective use of technology and resources. Our team of highly professional and trained individuals takes pride in delivering exceptional solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Our Services
                        </h3>
                        <ul className="space-y-4">
                            {services.map((service, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="group flex items-center gap-2"
                                >
                                    <HiArrowRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Link 
                                        href={`#${service.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-4 space-y-8"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                Get In Touch
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.href}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-600">{info.text}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map(({ Icon, href, color, label }, index) => (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className="p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
                                        aria-label={label}
                                    >
                                        <Icon className="w-5 h-5" style={{ color }} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-blue-100"
                >
                    <p className="text-center text-gray-600">
                        © {new Date().getFullYear()} Ojas Technologies Pvt. Ltd. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
