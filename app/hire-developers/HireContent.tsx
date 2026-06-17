"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker, SiKubernetes } from "react-icons/si";
import { TbBrandAzure, TbBrandReactNative } from "react-icons/tb";

const techs = [
  { name: ".NET Core / C#", level: "Primary", Icon: SiDotnet },
  { name: "Blazor", level: "Specialized", Icon: SiBlazor },
  { name: ".NET MAUI", level: "Specialized", Icon: SiDotnet },
  { name: "React / Next.js", level: "Primary", Icon: SiReact },
  { name: "React Native", level: "Strong", Icon: TbBrandReactNative },
  { name: "Azure Cloud", level: "Primary", Icon: TbBrandAzure },
  { name: "Docker & K8s", level: "Strong", Icon: SiDocker },
  { name: "TypeScript", level: "Primary", Icon: SiTypescript },
  { name: "MSSQL / Azure SQL", level: "Strong", Icon: SiDotnet },
];

const steps = [
  { step: "01", title: "Share Requirements", desc: "Tell us your stack, team size, and timeline. We'll propose the right team composition." },
  { step: "02", title: "Team Matching", desc: "We handpick engineers matching your stack. Interview them before committing." },
  { step: "03", title: "Onboarding", desc: "Your team integrates into your workflow — Slack, Jira, GitHub, daily standups." },
  { step: "04", title: "Ongoing Delivery", desc: "Two-week sprints, AI-assisted code reviews. Scale up or down as needed." },
];

const teams = [
  { title: "SaaS Development Team", members: "2x .NET Backend + 2x React Frontend + 1x Azure DevOps", best: "Building or scaling a SaaS platform" },
  { title: "Blazor Full-Stack Team", members: "2x Blazor/.NET + 1x MAUI Mobile + 1x Azure Cloud", best: "Microsoft-ecosystem web + mobile products" },
  { title: "API & Microservices Team", members: "3x .NET Core + 1x Docker/K8s + 1x QA Automation", best: "Backend platform engineering at scale" },
];

export function HireContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider mb-5">IT Outstaffing</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">Hire .NET, Blazor & React Developers <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">from Nepal</span></h1>
            <p className="text-blue-200/70 text-lg max-w-2xl mb-7">Scale your engineering capacity with AI-adept Microsoft-ecosystem developers. We handle recruiting, retention, and operations — you get a high-performing remote team that ships.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200">Start a Conversation <HiArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head">
            <div className="section-badge">Process</div>
            <h2 className="section-title">How It Works</h2>
            <p className="section-sub">From first conversation to daily delivery</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-3">{s.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-body text-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Expertise */}
      <section className="section overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head">
            <div className="section-badge">Expertise</div>
            <h2 className="section-title">Technology Expertise</h2>
            <p className="section-sub">Microsoft ecosystem is our home turf</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {techs.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-3 flex items-center gap-3">
                <div className="icon-box"><t.Icon className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">{t.name}</div>
                  <div className="text-[11px] text-gray-400">{t.level}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Adept */}
      <section className="section-alt overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <div className="section-badge">How We Work</div>
            <h2 className="section-title">AI-Adept Engineering</h2>
            <p className="text-body text-sm mb-8">Every developer at Ojas leverages AI agents in their daily workflow — from code generation and automated testing to PR reviews and documentation. The result: consistent quality, fewer bugs, faster delivery.</p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[{title:"Code Quality",desc:"AI-assisted reviews catch edge cases before they reach production"},{title:"Faster Delivery",desc:"Boilerplate eliminated. Engineers focus on business logic"},{title:"Knowledge Capture",desc:"Auto-generated docs and specs that stay current"}].map((item) => (
                <motion.div key={item.title} className="card p-5">
                  <HiCheckCircle className="w-5 h-5 text-emerald-500 mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Examples */}
      <section className="section overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-head">
            <div className="section-badge">Team Configurations</div>
            <h2 className="section-title">Example Team Compositions</h2>
            <p className="section-sub">Mix and match based on your needs</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {teams.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6\">
                <h3 className="text-base font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-xs text-gray-700 font-medium mb-2">{t.members}</p>
                <p className="text-xs text-gray-500">{t.best}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 card p-5 text-center">
            <p className="text-sm text-gray-600"><span className="font-semibold">Timezone aligned:</span> Nepal Time (NPT) overlaps with EST morning and PST afternoon — enabling real-time standups and pair programming.</p>
            <p className="text-xs text-gray-400 mt-1">Custom team compositions available. Tell us what you need.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white border-t border-indigo-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Scale Your Team?</h2>
          <p className="text-body text-sm mb-6">We&apos;ll propose the right team within 24 hours.</p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">Get Started <HiArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
