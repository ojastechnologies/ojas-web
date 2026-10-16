"use client";
import { motion } from "framer-motion";
import { SplitText } from "@/app/components/motion";
import { Fragment } from "react";
import { IconType } from "react-icons";
import {
  HiAdjustments,
  HiChartBar,
  HiChatAlt,
  HiCollection,
  HiDatabase,
  HiDocumentDuplicate,
  HiEye,
  HiFilter,
  HiKey,
  HiLockClosed,
  HiRefresh,
  HiScissors,
  HiSearch,
  HiServer,
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi";

interface Step {
  icon: IconType;
  title: string;
  detail: string;
}

const ingest: Step[] = [
  { icon: HiDocumentDuplicate, title: "Your sources", detail: "PDFs, SharePoint, Confluence, SQL, tickets" },
  { icon: HiScissors, title: "Parse & chunk", detail: "Layout-aware, keeps tables and headings" },
  { icon: HiSparkles, title: "Embed", detail: "Model chosen and tested for your domain" },
  { icon: HiDatabase, title: "Index", detail: "Azure AI Search, pgvector, or your store" },
];

const query: Step[] = [
  { icon: HiChatAlt, title: "Question", detail: "From your app, Teams, or API" },
  { icon: HiSearch, title: "Hybrid retrieval", detail: "Vector + keyword, filtered by permissions" },
  { icon: HiFilter, title: "Rerank", detail: "Keep only the passages that answer it" },
  { icon: HiShieldCheck, title: "Generate + guard", detail: "Grounded prompt, citations, safety checks" },
];

const productionChecks = [
  { icon: HiChartBar, title: "Evaluated before launch", desc: "A test set built from real questions, scored for accuracy and faithfulness on every change." },
  { icon: HiLockClosed, title: "Your data stays yours", desc: "Deployed in your Azure tenant or VPC. No training on your data." },
  { icon: HiKey, title: "Permission-aware", desc: "Users only retrieve what they're allowed to see in the source system." },
  { icon: HiEye, title: "Observable", desc: "Traces, cost per answer, latency, and feedback in one dashboard." },
  { icon: HiRefresh, title: "Always current", desc: "Incremental re-indexing when documents change, not a one-off import." },
  { icon: HiAdjustments, title: "Model-agnostic", desc: "Swap between Azure OpenAI, Claude, or open models without a rewrite." },
];

function Connector({ vertical = false, delay = 0 }: { vertical?: boolean; delay?: number }) {
  // A glowing "packet" travels along each link to show data moving through the pipeline.
  const style = { animationDelay: `${delay}s` };
  return vertical ? (
    <div aria-hidden className="relative mx-auto w-px h-8 bg-gradient-to-b from-cyan-400/40 to-violet-400/40">
      <span className="packet packet-y" style={style} />
    </div>
  ) : (
    <div aria-hidden className="relative hidden lg:block flex-1 min-w-6 h-px self-center bg-gradient-to-r from-cyan-400/20 via-cyan-300/50 to-violet-400/20">
      <span className="packet packet-x" style={style} />
    </div>
  );
}

function Lane({ label, steps, accent }: { label: string; steps: Step[]; accent: string }) {
  return (
    <div className="glass p-5 md:p-6">
      <div className="flex items-center gap-2 mb-5">
        <span className={`w-1.5 h-1.5 rounded-full ${accent}`} />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">{label}</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {steps.map((s, i) => (
          <Fragment key={s.title}>
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12 }}
              className="group spotlight lg:w-48 xl:w-56 shrink-0 rounded-xl border border-white/[0.08] bg-ink-900/70 p-4 transition-[border-color,transform] duration-500 hover:border-cyan-300/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-200 transition-colors duration-500 group-hover:bg-cyan-400/15 group-hover:border-cyan-300/30">
                  <s.icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-white/30">0{i + 1}</span>
              </div>
              <div className="text-sm font-semibold text-white">{s.title}</div>
              <div className="text-xs text-white/45 mt-1 leading-relaxed">{s.detail}</div>
            </motion.div>
            {i < steps.length - 1 && (
              <>
                <Connector delay={i * 0.8} />
                <div className="lg:hidden"><Connector vertical delay={i * 0.8} /></div>
              </>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function RagPipeline() {
  return (
    <section id="rag" className="dark-section overflow-hidden scroll-mt-20 !bg-ink-900">
      <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <div className="dark-badge">RAG Pipelines</div>
          <SplitText className="dark-title mb-5" segments={[{ text: "Answers you can" }, { text: "trace to the source.", className: "text-gradient-ai" }]} />
          <p className="dark-sub mx-auto">
            Retrieval-augmented generation connects a language model to your own knowledge.
            We engineer both halves: how your data gets in, and how every answer gets out.
          </p>
        </motion.div>

        <div className="space-y-4">
          <Lane label="Ingestion · runs on every document change" steps={ingest} accent="bg-violet-400" />
          <div className="flex justify-center" aria-hidden>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-ink-950 font-mono text-[10px] text-white/45">
              <HiCollection className="w-3 h-3 text-cyan-300" /> shared vector + keyword index
            </div>
          </div>
          <Lane label="Query · runs on every question" steps={query} accent="bg-cyan-400" />
        </div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="border-beam mt-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-500/[0.08] to-violet-500/[0.08] px-6 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <HiServer className="w-4 h-4 text-cyan-300" /> Output
          </div>
          <p className="text-sm text-white/60">
            A streamed answer with numbered citations, a confidence signal, and a clear
            &ldquo;I don&apos;t know&rdquo; when the sources don&apos;t cover the question.
          </p>
        </motion.div>

        {/* Production checklist */}
        <div className="mt-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
            What makes it production-grade
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productionChecks.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-hover p-5 flex gap-4"
              >
                <c.icon className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{c.title}</div>
                  <div className="text-sm text-white/50 leading-relaxed">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
