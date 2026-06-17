"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { HiServer, HiCode, HiCloud } from "react-icons/hi";

const pillars = [
  {
    icon: HiServer,
    title: "IT Outstaffing & Dedicated Teams",
    description: "Embed AI-adept .NET, Blazor, MAUI, and React engineers as your remote squad. Consistent quality, faster delivery than traditional outsourcing.",
    href: "/hire-developers",
    cta: "Hire Developers",
  },
  {
    icon: HiCode,
    title: "Custom SaaS & Platform Development",
    description: "Full-stack product engineering for healthcare, legal-tech, and enterprise. HIPAA-compliant, Azure-native, with AI-powered features built in.",
    href: "/portfolio",
    cta: "See Our Work",
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps",
    description: "Azure App Services, AKS, Docker, CI/CD pipelines. Hybrid cloud across Azure and Digital Ocean with a proven 99.9% uptime track record.",
    href: "/contact",
    cta: "Start a Project",
  },
];

export function Pillars() {
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
          <div className="section-badge">What We Do</div>
          <h2 className="section-title">How We Deliver Value</h2>
          <p className="section-sub">Microsoft-ecosystem engineering, delivered from Kathmandu</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-8 flex flex-col"
            >
              <div className="icon-box mb-5">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-body text-sm flex-1 mb-6">{p.description}</p>
              <Link href={p.href} className="btn-ghost self-start -ml-2">
                {p.cta}
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
