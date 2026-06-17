"use client";
import { motion } from "framer-motion";
import { TbQuote } from "react-icons/tb";

const testimonials = [
  { q: "Ojas Technologies delivered our HIPAA-compliant healthcare platform on time and within budget. Their .NET and Azure expertise is outstanding. They've become our long-term engineering partner.", n: "Rafael Morel", t: "CTO", c: "SearchMed Inc.", l: "Fort Lauderdale, Florida" },
  { q: "The Ojas team integrated seamlessly with our in-house developers. Their React and .NET engineers understood our legal-tech domain quickly and shipped production-quality code from sprint one.", n: "Fred Willerup", t: "CTO", c: "LeanLaw", l: "Boise, Idaho" },
  { q: "We needed a dedicated full-stack team to scale our platform. Ojas provided top-tier Nepal-based engineers who operate in our timezone. 98% satisfaction is real — highly recommended.", n: "Scott Hofman", t: "CEO", c: "AeroTechLabs", l: "Fort Lauderdale, Florida" },
];

export function Testimonials() {
  return (
    <section className="section overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <div className="section-badge">Client Testimonials</div>
          <h2 className="section-title">Trusted by Clients Worldwide</h2>
          <p className="section-sub">Real results from the companies we build with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 flex flex-col"
            >
              <TbQuote className="w-7 h-7 text-gray-200 mb-4" />
              <blockquote className="text-body text-sm flex-1 italic mb-6">&ldquo;{t.q}&rdquo;</blockquote>
              <div className="pt-4 border-t border-indigo-100">
                <div className="text-sm font-semibold text-gray-900">{t.n}</div>
                <div className="text-xs text-gray-500">{t.t}, {t.c}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{t.l}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
