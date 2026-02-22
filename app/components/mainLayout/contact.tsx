"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { CONTACT_INFO, SOCIAL_LINKS, COMPANY_EMAIL } from "@/app/constants";

export function Contact() {
    const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _subject: formData.subject || "New inquiry from website",
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setFormState("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setFormState("idle"), 5000);
            } else {
                setFormState("error");
                setTimeout(() => setFormState("idle"), 5000);
            }
        } catch {
            setFormState("error");
            setTimeout(() => setFormState("idle"), 5000);
        }
    };

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
                        Ready to start your next project? Send us a message and we&apos;ll get back to you within 24 hours.
                    </p>
                </motion.div>

                {/* Two-column: Contact Info + Form */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Info + Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {CONTACT_INFO.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
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

                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-lg space-y-6"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white/50 text-gray-900 placeholder-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white/50 text-gray-900 placeholder-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white/50 text-gray-900 placeholder-gray-400"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white/50 resize-none text-gray-900 placeholder-gray-400"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={formState === "sending"}
                                whileHover={{ scale: formState === "sending" ? 1 : 1.02 }}
                                whileTap={{ scale: formState === "sending" ? 1 : 0.98 }}
                                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${formState === "sending"
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 hover:shadow-blue-500/30"
                                    }`}
                            >
                                {formState === "sending" ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>

                            {formState === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-center font-medium"
                                >
                                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                                </motion.div>
                            )}
                            {formState === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-center font-medium"
                                >
                                    Something went wrong. Please try again or email us directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Full-width Google Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-blue-100"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1000!2d85.3339263!3d27.7664155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x0!5e0!3m2!1sen!2snp"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ojas Technologies office location - Tokha, Kathmandu"
                    />
                </motion.div>
            </div>
        </section>
    );
}
