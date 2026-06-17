"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const projects = [
  { title: "SearchMed", client: "SearchMed Inc.", loc: "Fort Lauderdale, Florida", desc: "HIPAA-compliant healthcare platform with AI-powered provider matching, built with Blazor, .NET MAUI, and Azure.", logo: "/img/clients/searchmed.png", color: "#1a4f7a", tags: ["Blazor",".NET MAUI","Azure","AI/ML"] },
  { title: "LeanLaw Billing Platform", client: "LeanLaw", loc: "Boise, Idaho", desc: "Cloud-based legal billing microservices platform processing $2B+ annually. React Native mobile apps, Kubernetes on Azure + DO.", logo: "/img/clients/leanlaw.png", color: "#1e3a5f", tags: [".NET Core","React","Kubernetes","Microservices"] },
];

export function PortfolioPreview() {
  return (
    <section className="section-alt overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <div className="section-badge">Our Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Complex platforms we&apos;ve built and continue to support</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card overflow-hidden"
            >
              <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: p.color }}>
                <div className="w-9 h-9 rounded-lg bg-white/20 p-1.5 flex items-center justify-center shrink-0">
                  <Image src={p.logo} alt={p.title} width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{p.title}</h3>
                  <p className="text-[11px] text-white/60">{p.client} &middot; {p.loc}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-body text-xs mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
                </div>
                <Link href="/portfolio" className="btn-ghost -ml-2 text-xs">
                  View Case Study <HiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mt-10 text-center"
        >
          <Link href="/portfolio" className="btn-ghost text-sm">
            View all projects <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
