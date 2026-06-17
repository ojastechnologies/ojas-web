"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCode, HiUserGroup, HiLightningBolt } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";

export function AboutContent() {
  const values = [
    { icon: HiCode,          title: "Microsoft Ecosystem DNA",     desc: ".NET Core, Blazor, MAUI, C#, Azure — deep specialization, not just familiarity." },
    { icon: HiLightningBolt, title: "AI-Adept Workflow",           desc: "Every developer uses AI agents for code generation, review, and testing — consistent quality without cutting corners." },
    { icon: HiUserGroup,     title: "Nepal Advantage",             desc: "Western-quality engineering from Kathmandu at significant cost savings. Timezone overlap with EST and PST." },
  ];

  return (
    <section className="pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <div className="section-badge">About Us</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Microsoft Ecosystem Specialists in Kathmandu
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">Founded in 2020, delivering 150+ projects across 10+ countries in .NET, Blazor, MAUI, React, and Azure.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-1">
              <Image src="/img/full logo.jpeg" alt="Ojas Technologies" width={600} height={600} className="rounded-xl object-cover" loading="lazy" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Story</h2>
              <p className="text-body">Ojas Technologies started in 2020 in Kathmandu, Nepal with a simple idea: world-class Microsoft-ecosystem engineering doesn&apos;t require a Silicon Valley address.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[{l:"Projects",v:COMPANY_STATS.projectsDelivered},{l:"Clients",v:COMPANY_STATS.clients},{l:"Experience",v:COMPANY_STATS.yearsExperience},{l:"Team Size",v:COMPANY_STATS.teamSize}].map(s => (
                <div key={s.l} className="card p-3 text-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{s.v}</div>
                  <div className="text-xs text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <div className="icon-box-dark"><v.icon className="w-4 h-4" /></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{v.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center flex flex-wrap justify-center gap-3">
          <Link href="/hire-developers" className="btn-primary px-8 py-3.5">Hire Developers <HiArrowRight className="w-4 h-4" /></Link>
          <Link href="/portfolio" className="btn-outline px-8 py-3.5">See Our Work</Link>
        </motion.div>
      </div>
    </section>
  );
}
