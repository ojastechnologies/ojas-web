"use client";
import { motion } from "framer-motion";
import { HiLightBulb, HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
    {
        icon: HiLocationMarker,
        title: "Our Office Location",
        content: "Basantanagar 16, Kathmandu",
        delay: 0.1
    },
    {
        icon: HiPhone,
        title: "Call Us",
        content: "+977 9841185541",
        link: "tel:+9779841185541",
        delay: 0.2
    },
    {
        icon: HiMail,
        title: "Mail Us",
        content: "contact@ojastech.io",
        link: "mailto:contact@ojastech.io",
        delay: 0.3
    }
];

const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100084169682453", color: "#1877F2" },
    { icon: FaTwitter, href: "https://twitter.com/ojastechnepal", color: "#1DA1F2" },
    { icon: FaYoutube, href: "https://www.youtube.com/channel/UCcja0lVIumrcgvtXYSSvNZw", color: "#FF0000" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/ojastech/", color: "#0A66C2" }
];

export function Contact() {
    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 mb-6"
                    >
                        <HiLightBulb className="w-5 h-5 text-blue-600 animate-pulse" />
                        <span className="text-blue-700 font-medium">Get in Touch</span>
                    </motion.div>

                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Contact Us
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to collaborate? Have feedback or questions? We'd love to hear from you. {/* eslint-disable-line react/no-unescaped-entities */}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: info.delay }}
                                className="group"
                            >
                                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
                                            <info.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-gray-500 mb-1">{info.title}</h3>
                                            {info.link ? (
                                                <a href={info.link} className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-semibold text-gray-900">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100">
                            <h3 className="text-sm text-gray-500 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                    >
                                        <social.icon className="w-5 h-5" style={{ color: social.color }} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.41531714000524!2d85.30881983087787!3d27.738196049931144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1931736dce2d%3A0xeb001e1f31d42268!2sOjas%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1673256483179!5m2!1sen!2snp"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
