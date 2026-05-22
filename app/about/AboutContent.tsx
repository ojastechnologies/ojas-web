"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCode, HiUserGroup, HiLightningBolt } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";

export function AboutContent() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Microsoft Ecosystem Specialists in Kathmandu
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Founded in 2020, we&apos;ve delivered 150+ projects across 10+ countries — specializing in .NET, Blazor, MAUI, React, and Azure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-1">
              <Image
                src="/img/full logo.jpeg"
                alt="Ojas Technologies Kathmandu"
                width={600}
                height={600}
                className="rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Ojas Technologies (Pvt) Ltd started in 2020 in Kathmandu, Nepal with a simple idea:
                world-class Microsoft-ecosystem engineering doesn&apos;t require a Silicon Valley address.
                We built a team of .NET, Blazor, MAUI, and React engineers who deliver enterprise-grade
                software for startups, agencies, and enterprises worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Projects", value: COMPANY_STATS.projectsDelivered },
                { label: "Clients", value: COMPANY_STATS.clients },
                { label: "Experience", value: COMPANY_STATS.yearsExperience },
                { label: "Team Size", value: COMPANY_STATS.teamSize },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: HiCode,
                  title: "Microsoft Ecosystem DNA",
                  desc: ".NET Core, Blazor, MAUI, C#, Azure — these aren&apos;t just tools we use, they&apos;re what we specialize in. Every engineer on our team is deep in the Microsoft technology stack.",
                },
                {
                  icon: HiLightningBolt,
                  title: "AI-Adept Workflow",
                  desc: "Every developer at Ojas leverages AI agents for code generation, review, and testing — ensuring consistent quality, coding standards, and faster delivery without cutting corners.",
                },
                {
                  icon: HiUserGroup,
                  title: "Nepal Advantage",
                  desc: "Operating from Kathmandu gives our clients significant cost efficiency while maintaining Western-quality engineering. Timezone overlap with both EST and PST means real-time collaboration.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 border border-blue-100">
                  <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hire-developers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-blue-500/30 group"
            >
              Hire Developers
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
