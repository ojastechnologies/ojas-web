"use client";
import { motion } from "framer-motion";
import { SplitText } from "@/app/components/motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { HiServer, HiCode, HiCloud } from "react-icons/hi";

const pillars = [
  {
    icon: HiServer,
    title: "Dedicated engineering teams",
    description: "Embed .NET, Blazor, MAUI, and React engineers as your remote squad. Every engineer works with AI tooling daily for faster, consistent delivery.",
    href: "/hire-developers",
    cta: "Hire Developers",
  },
  {
    icon: HiCode,
    title: "SaaS & platform development",
    description: "Full-stack product engineering for healthcare, legal-tech, and enterprise. HIPAA-compliant, Azure-native, with AI features built in.",
    href: "/portfolio",
    cta: "See Our Work",
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps",
    description: "Azure App Services, AKS, Docker, and CI/CD. Hybrid cloud across Azure and DigitalOcean with a 99.9% uptime track record.",
    href: "/contact",
    cta: "Start a Project",
  },
];

export function Pillars() {
  return (
    <section className="dark-section overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 lg:items-end mb-14"
        >
          <div>
            <div className="dark-badge">Beyond AI</div>
            <SplitText className="dark-title" segments={[{ text: "AI needs" }, { text: "solid software", className: "text-gradient-ai" }, { text: "around it." }]} />
          </div>
          <p className="dark-sub lg:justify-self-end">
            Most of an AI product is ordinary engineering: APIs, apps, auth, and cloud.
            That&apos;s what we&apos;ve shipped for US companies for over five years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-hover p-7 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-200 mb-6">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">{p.description}</p>
              <Link href={p.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white transition-colors">
                {p.cta}
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
