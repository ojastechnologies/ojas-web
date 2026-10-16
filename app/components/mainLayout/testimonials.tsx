"use client";
import { motion } from "framer-motion";
import { SplitText } from "@/app/components/motion";
import { TbQuote } from "react-icons/tb";

// Placeholder wording until the clients' own quotes are collected.
const testimonials = [
  { q: "Ojas built our patient app and provider portal from the ground up, and they still look after our Azure setup today. They take HIPAA seriously without slowing everything down, and they feel like part of our own engineering team.", n: "Rafael Morel", t: "CTO", c: "SearchMed Inc.", l: "Fort Lauderdale, Florida" },
  { q: "Their engineers fit into our team with almost no hand-holding. They picked up the legal-billing side of things quickly and were shipping production code from the first sprint.", n: "Fred Willerup", t: "CTO", c: "LeanLaw", l: "Boise, Idaho" },
  { q: "We wanted a fast, good-looking site our team could actually manage. Ojas delivered it quickly, kept us in the loop the whole way, and were easy to work with.", n: "Scott Hofman", t: "CEO", c: "AeroTechLabs", l: "Fort Lauderdale, Florida" },
];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2);
}

export function Testimonials() {
  return (
    <section className="dark-section overflow-hidden !bg-ink-900">
      <div className="absolute inset-0 bg-grid-fade opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="dark-badge">Client Testimonials</div>
          <SplitText className="dark-title" segments={[{ text: "Long-term partners," }, { text: "not vendors.", className: "text-gradient-ai" }]} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-hover p-7 flex flex-col"
            >
              <TbQuote className="w-8 h-8 text-cyan-300/40 mb-5" />
              <blockquote className="text-white/75 leading-relaxed flex-1 mb-8">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  {initials(t.n)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.n}</div>
                  <div className="text-xs text-white/55">{t.t}, {t.c} · {t.l}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
