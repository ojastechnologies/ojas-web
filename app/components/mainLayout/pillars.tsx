"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiUserGroup, HiCode, HiCloud } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

const pillars = [
  {
    icon: HiUserGroup,
    title: "IT Outstaffing & Dedicated Teams",
    description:
      "Embed .NET, Blazor, MAUI, and React engineers as your remote team. AI-adept workflows deliver consistent quality faster than traditional outsourcing.",
    href: "/hire-developers",
    cta: "Hire Developers",
  },
  {
    icon: HiCode,
    title: "Custom SaaS & Platform Development",
    description:
      "Full-stack product engineering for healthcare, legal-tech, and enterprise. HIPAA-compliant, Azure-native, with AI-powered features where it matters.",
    href: "/portfolio",
    cta: "See Our Work",
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps",
    description:
      "Azure App Services, AKS, Docker, CI/CD pipelines. Hybrid cloud experience across Azure and Digital Ocean with 99.9% uptime track record.",
    href: "/contact",
    cta: "Start a Project",
  },
];

export function Pillars() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.10),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Microsoft-ecosystem engineering, delivered from Kathmandu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 w-fit mb-6">
                <pillar.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
              >
                {pillar.cta}
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
