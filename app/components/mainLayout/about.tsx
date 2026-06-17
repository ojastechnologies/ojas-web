"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiCheckCircle, HiCode, HiUserGroup, HiLightningBolt } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";

const values = [
  { icon: HiCode,          title: "Microsoft Ecosystem DNA",     desc: ".NET Core, Blazor, MAUI, C#, Azure — these aren't tools we use, they're our core expertise." },
  { icon: HiLightningBolt, title: "AI-Adept Workflow",           desc: "Every developer uses AI agents for code gen, review, and testing — consistent quality, faster delivery." },
  { icon: HiUserGroup,     title: "Nepal Advantage",             desc: "Western-quality engineering at significant cost savings. Timezone overlap with EST and PST for real-time collaboration." },
];

export const About = () => {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-1">
              <Image src="/img/full logo.jpeg" alt="Ojas Technologies team - Custom software development company in Kathmandu, Nepal" width={600} height={600} className="rounded-xl object-cover" loading="lazy" />
            </div>
            {/* Floating stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-indigo-100/50"
            >
              <div className="grid grid-cols-4 gap-3">
                {[
                  { l: "Projects",  v: COMPANY_STATS.projectsDelivered },
                  { l: "Clients",   v: COMPANY_STATS.clients },
                  { l: "Exp.",      v: COMPANY_STATS.yearsExperience },
                  { l: "Team",      v: COMPANY_STATS.teamSize },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{s.v}</div>
                    <div className="text-xs text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 pt-8 lg:pt-0"
          >
            <div>
              <div className="section-badge">About Us</div>
              <h2 className="section-title">Custom Software Company in Kathmandu Since 2020</h2>
            </div>
            <p className="text-body">
              Ojas Technologies is a premier offshore IT outsourcing and custom software development company in Kathmandu, Nepal. Founded in 2020, we provide top-tier .NET, React, and Full-Stack engineering talent for startups and enterprises worldwide.
            </p>

            <div className="space-y-3">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card p-4 flex items-start gap-3"
                >
                  <div className="icon-box-dark">
                    <v.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{v.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="#services" className="btn-primary inline-flex mt-2">
              Explore Our Services
              <HiCheckCircle className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
