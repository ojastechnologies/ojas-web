"use client";
import { motion } from "framer-motion";
import { Magnetic, SplitText } from "@/app/components/motion";
import Link from "next/link";
import { HiArrowRight, HiCheck } from "react-icons/hi";

const offers = [
  {
    step: "01",
    name: "AI Discovery",
    length: "2 weeks · fixed scope",
    desc: "We map your data, pick the use case with the clearest return, and test it on a sample of real questions.",
    gets: ["Use-case shortlist & ROI estimate", "Data readiness review", "Working proof of concept", "Architecture & cost plan"],
  },
  {
    step: "02",
    name: "Pilot to Production",
    length: "Scoped per use case",
    desc: "We build the pipeline end to end, measure it against your test set, and ship it to real users.",
    gets: ["Production RAG or agent", "Evaluation suite & dashboards", "Security & access review", "Handover docs"],
    highlight: true,
  },
  {
    step: "03",
    name: "Dedicated AI Pod",
    length: "Monthly",
    desc: "A standing team that keeps improving quality, adds new sources, and ships the next AI features.",
    gets: ["AI + full-stack engineers", "Joins your standups & tools", "Continuous evals", "Scale up or down"],
  },
];

export function Engagement() {
  return (
    <section className="dark-section overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <div className="dark-badge">How we engage</div>
          <SplitText className="dark-title mb-5" segments={[{ text: "Start small.", br: true }, { text: "Prove it. Scale it.", className: "text-gradient-ai" }]} />
          <p className="dark-sub">
            No year-long AI strategy decks. You see a working result on your own data in
            the first two weeks, then decide how far to take it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {offers.map((o, i) => (
            <motion.div
              key={o.name}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-hover p-7 flex flex-col ${
                o.highlight ? "border-beam bg-gradient-to-b from-cyan-500/[0.07] to-transparent" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-5xl font-semibold text-white/[0.07] leading-none">{o.step}</span>
                <span className="chip-dark">{o.length}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-3">{o.name}</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-6">{o.desc}</p>
              <ul className="space-y-2.5 mt-auto">
                {o.gets.map((g) => (
                  <li key={g} className="flex items-start gap-2.5 text-sm text-white/75">
                    <HiCheck className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                    {g}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic>
            <Link href="/contact" className="group btn-glow">
              Book a 30-min AI call <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/hire-developers" className="btn-line">
              Hire a dedicated team
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
