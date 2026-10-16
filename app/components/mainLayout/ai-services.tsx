"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  HiArrowRight,
  HiChatAlt2,
  HiCube,
  HiDocumentSearch,
  HiLightningBolt,
  HiPuzzle,
  HiShieldCheck,
  HiUserGroup,
} from "react-icons/hi";

interface Service {
  icon: IconType;
  title: string;
  desc: string;
  points: string[];
  span: string;
  feature?: boolean;
}

const services: Service[] = [
  {
    icon: HiDocumentSearch,
    title: "RAG & knowledge assistants",
    desc: "Assistants that answer from your documents, tickets, and databases — with citations your team can verify, and access rules that match who is asking.",
    points: ["Hybrid search + reranking", "Cited, grounded answers", "Per-user permissions"],
    span: "md:col-span-2 md:row-span-2",
    feature: true,
  },
  {
    icon: HiPuzzle,
    title: "LLM integration",
    desc: "Add AI features to the product you already run — .NET, React, or mobile — without rewriting it.",
    points: ["Azure OpenAI, Claude, open models", "Streaming UX", "Cost & latency budgets"],
    span: "",
  },
  {
    icon: HiLightningBolt,
    title: "AI agents & automation",
    desc: "Agents that call your APIs and finish multi-step work, with a human approving what matters.",
    points: ["Tool calling", "Human-in-the-loop", "Audit trail"],
    span: "",
  },
  {
    icon: HiChatAlt2,
    title: "Conversational assistants",
    desc: "In-app chat for customers or staff, like the AI health assistant we built for SearchMed's patient app.",
    points: ["Web, iOS, Android", "Escalation to humans"],
    span: "",
  },
  {
    icon: HiCube,
    title: "Document intelligence",
    desc: "Turn PDFs, forms, and contracts into structured data your systems can use.",
    points: ["Extraction & classification", "Validation rules"],
    span: "",
  },
  {
    icon: HiShieldCheck,
    title: "Evaluation & guardrails",
    desc: "Test sets, regression evals, and safety checks so quality is measured, not assumed.",
    points: ["Faithfulness scoring", "PII redaction", "Prompt-injection defenses"],
    span: "md:col-span-2",
  },
  {
    icon: HiUserGroup,
    title: "Dedicated AI engineering pods",
    desc: "A small team of AI and full-stack engineers who join your standups and own an AI roadmap with you.",
    points: ["AI + .NET / React engineers", "Scale up or down monthly"],
    span: "md:col-span-2",
  },
];

export function AiServices() {
  return (
    <section id="ai" className="dark-section overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="dark-badge">AI Integration</div>
          <h2 className="dark-title mb-5">
            From prototype to <span className="text-gradient-ai">production AI.</span>
          </h2>
          <p className="dark-sub">
            Most AI demos never ship. We build the parts that make AI dependable in a real
            product: retrieval, permissions, evaluation, monitoring, and the software around it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className={`group glass-hover p-6 md:p-7 flex flex-col ${s.span} ${
                s.feature ? "ring-gradient bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-violet-500/[0.08]" : ""
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                  s.feature
                    ? "bg-gradient-to-br from-cyan-400 to-violet-500 text-white"
                    : "bg-white/[0.06] text-cyan-200 border border-white/10"
                }`}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className={`font-display font-semibold text-white mb-2 ${s.feature ? "text-2xl md:text-3xl" : "text-lg"}`}>
                {s.title}
              </h3>
              <p className={`text-white/55 leading-relaxed ${s.feature ? "text-base max-w-md" : "text-sm"}`}>{s.desc}</p>

              {s.feature && (
                <div className="mt-8 mb-2 rounded-xl border border-white/[0.06] bg-ink-900/60 p-4 font-mono text-[11px] leading-relaxed text-white/50">
                  <div><span className="text-violet-300">const</span> answer = <span className="text-cyan-300">await</span> rag.ask(question, {"{"}</div>
                  <div className="pl-4">user: <span className="text-emerald-300">session.user</span>,</div>
                  <div className="pl-4">topK: <span className="text-amber-200">8</span>, rerank: <span className="text-amber-200">true</span>,</div>
                  <div className="pl-4">requireCitations: <span className="text-amber-200">true</span></div>
                  <div>{"});"}</div>
                </div>
              )}

              {s.feature && (
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-white/50">
                  {["documents", "chunks", "embeddings", "retrieve", "rerank", "cited answer"].map((step, i, all) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-md border ${i === all.length - 1 ? "border-cyan-300/40 text-cyan-200 bg-cyan-400/10" : "border-white/10 bg-white/[0.03]"}`}>{step}</span>
                      {i < all.length - 1 && <span className="text-white/25">→</span>}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                {s.points.map((p) => (
                  <span key={p} className="chip-dark">{p}</span>
                ))}
              </div>

              {s.feature && (
                <Link href="/#rag" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white transition-colors">
                  How our RAG pipeline works <HiArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
