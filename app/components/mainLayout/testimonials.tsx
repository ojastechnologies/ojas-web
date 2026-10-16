"use client";
import { motion } from "framer-motion";
import { TbQuote } from "react-icons/tb";

const testimonials = [
  { q: "Ojas Technologies delivered our HIPAA-compliant healthcare platform on time and within budget. Their .NET and Azure expertise is outstanding. They've become our long-term engineering partner.", n: "Rafael Morel", t: "CTO", c: "SearchMed Inc.", l: "Fort Lauderdale, Florida" },
  { q: "The Ojas team integrated seamlessly with our in-house developers. Their React and .NET engineers understood our legal-tech domain quickly and shipped production-quality code from sprint one.", n: "Fred Willerup", t: "CTO", c: "LeanLaw", l: "Boise, Idaho" },
  { q: "We needed a dedicated full-stack team to scale our platform. Ojas provided top-tier Nepal-based engineers who operate in our timezone. 98% satisfaction is real — highly recommended.", n: "Scott Hofman", t: "CEO", c: "AeroTechLabs", l: "Fort Lauderdale, Florida" },
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="dark-badge">Client Testimonials</div>
          <h2 className="dark-title">
            Long-term partners, <span className="text-gradient-ai">not vendors.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  <div className="text-xs text-white/45">{t.t}, {t.c} · {t.l}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
