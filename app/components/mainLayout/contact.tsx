"use client";
import { motion } from "framer-motion";
import { SplitText } from "@/app/components/motion";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { CONTACT_INFO, SOCIAL_LINKS, COMPANY_EMAIL } from "@/app/constants";

const LIGHT = {
  section: "section-alt overflow-hidden",
  card: "card",
  label: "text-gray-700",
  muted: "text-gray-400",
  strong: "text-gray-900 hover:text-blue-600",
  input: "input",
  icon: "icon-box-dark",
  button: "btn-primary",
  map: "border-indigo-200",
};

const DARK = {
  section: "dark-section overflow-hidden",
  card: "glass",
  label: "text-white/70",
  muted: "text-white/55",
  strong: "text-white hover:text-cyan-200",
  input: "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-white/50 focus:outline-none focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10 transition-all duration-200",
  icon: "p-2.5 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-paper shrink-0",
  button: "btn-glow !rounded-xl",
  map: "border-white/10",
};

export function Contact({ simple, dark }: { simple?: boolean; dark?: boolean }) {
  const t = dark ? DARK : LIGHT;
  const [state, setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [d, setD] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: d.name, email: d.email, _subject: d.subject || "New inquiry", message: d.message }),
      });
      if (r.ok) {
        setState("success");
        setD({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setState("idle"), 4000);
      } else {
        setState("error");
        setTimeout(() => setState("idle"), 4000);
      }
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className={`${t.section} scroll-mt-20`}>
      <div className={`absolute inset-0 pointer-events-none ${dark ? "bg-aurora opacity-40" : "bg-mesh"}`} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!simple && (
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="section-head"
        >
          {dark ? (
            <>
              <div className="dark-badge">Get in Touch</div>
              <SplitText className="dark-title mb-5" segments={[{ text: "Bring us your" }, { text: "hardest data problem.", className: "text-gradient-ai" }]} />
              <p className="dark-sub mx-auto">Tell us what you want AI to do — we&apos;ll reply within 24 hours with how we&apos;d approach it.</p>
            </>
          ) : (
            <>
              <div className="section-badge">Get in Touch</div>
              <h2 className="section-title">Ready to Build? Let&apos;s Talk</h2>
              <p className="section-sub">Tell us about your project — we&apos;ll get back to you within 24 hours</p>
            </>
          )}
        </motion.div>
        )}

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {CONTACT_INFO.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${t.card} p-5`}
              >
                <div className="flex items-center gap-4">
                  <div className={t.icon}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs mb-0.5 ${t.muted}`}>{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className={`text-sm font-semibold transition-colors ${t.strong}`}>{info.content}</a>
                    ) : (
                      <p className={`text-sm font-semibold ${t.strong}`}>{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className={`${t.card} p-5`}>
              <p className={`text-xs mb-3 ${t.muted}`}>Follow Us</p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map(({ Icon, href, color, name }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`btn-ghost !p-2.5 ${dark ? "text-white/70 hover:bg-white/[0.06]" : ""}`} aria-label={name}>
                    <Icon className="w-4 h-4" style={dark ? undefined : { color }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={submit} className={`${t.card} p-6 space-y-5`}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${t.label}`}>Full Name *</label>
                  <input type="text" required value={d.name} onChange={e => setD({...d, name: e.target.value})} className={t.input} placeholder="John Doe" />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${t.label}`}>Email *</label>
                  <input type="email" required value={d.email} onChange={e => setD({...d, email: e.target.value})} className={t.input} placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${t.label}`}>Subject</label>
                <input type="text" value={d.subject} onChange={e => setD({...d, subject: e.target.value})} className={t.input} placeholder="Project Inquiry" />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${t.label}`}>Message *</label>
                <textarea required rows={5} value={d.message} onChange={e => setD({...d, message: e.target.value})} className={`${t.input} resize-none`} placeholder="Tell us about your project..." />
              </div>
              <button type="submit" disabled={state === "sending"} className={`${t.button} w-full justify-center ${state === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}>
                {state === "sending" ? (
                  <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Sending...</>
                ) : "Send Message"}
              </button>
              {state === "success" && <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm text-center font-medium">✓ Message sent! We&apos;ll be in touch soon.</div>}
              {state === "error" && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center font-medium">Something went wrong. Please email us directly.</div>}
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className={`mt-8 rounded-xl overflow-hidden border ${t.map}`}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1000!2d85.3339263!3d27.7664155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x0!5e0!3m2!1sen!2snp" width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ojas Technologies - Tokha, Kathmandu" />
        </motion.div>
      </div>
    </section>
  );
}
