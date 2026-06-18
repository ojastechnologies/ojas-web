"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";
import { SiDotnet, SiReact, SiBlazor, SiDocker, SiKubernetes, SiTypescript, SiSupabase, SiVercel, SiNetlify, SiPostgresql, SiMongodb, SiExpress, SiNodedotjs, SiVuedotjs, SiFlutter, SiTailwindcss, SiStripe, SiGithubactions, SiRedis } from "react-icons/si";
import { TbBrandAzure, TbBrandReactNative } from "react-icons/tb";
import { HiChartBar } from "react-icons/hi";

const techFloats = [
  { Icon: SiDotnet,   label: ".NET",       x: "70%", y: "12%", delay: 0 },
  { Icon: SiBlazor,   label: "Blazor",     x: "82%", y: "22%", delay: 0.08 },
  { Icon: TbBrandReactNative, label: "React Native", x: "65%", y: "28%", delay: 0.16 },
  { Icon: SiReact,    label: "React",      x: "88%", y: "38%", delay: 0.24 },
  { Icon: SiNodedotjs, label: "Node.js",   x: "72%", y: "48%", delay: 0.32 },
  { Icon: SiVuedotjs, label: "Vue.js",     x: "62%", y: "55%", delay: 0.4 },
  { Icon: TbBrandAzure, label: "Azure",    x: "85%", y: "58%", delay: 0.08 },
  { Icon: SiPostgresql, label: "PostgreSQL", x: "68%", y: "68%", delay: 0.48 },
  { Icon: SiMongodb,  label: "MongoDB",    x: "80%", y: "78%", delay: 0.56 },
  { Icon: SiRedis,    label: "Redis",      x: "92%", y: "72%", delay: 0.64 },
  { Icon: SiSupabase, label: "Supabase",   x: "74%", y: "88%", delay: 0.72 },
  { Icon: SiFlutter,  label: "Flutter",    x: "88%", y: "88%", delay: 0.8 },
  { Icon: SiTailwindcss, label: "Tailwind", x: "62%", y: "78%", delay: 0.88 },
  { Icon: SiStripe,   label: "Stripe",     x: "66%", y: "40%", delay: 0.96 },
  { Icon: SiExpress,  label: "Express",    x: "76%", y: "62%", delay: 1.04 },
  { Icon: SiVercel,   label: "Vercel",     x: "90%", y: "48%", delay: 1.12 },
  { Icon: SiNetlify,  label: "Netlify",    x: "84%", y: "68%", delay: 1.2 },
  { Icon: SiGithubactions, label: "GitHub Actions", x: "64%", y: "18%", delay: 1.28 },
  { Icon: SiDocker,   label: "Docker",     x: "78%", y: "85%", delay: 0.4 },
  { Icon: SiKubernetes, label: "K8s",      x: "90%", y: "18%", delay: 0.6 },
  { Icon: SiDotnet,   label: ".NET MAUI",  x: "86%", y: "85%", delay: 0.5 },
  { Icon: SiTypescript, label: "TypeScript", x: "78%", y: "35%", delay: 0.7 },
  { Icon: HiChartBar, label: "SEO",        x: "88%", y: "62%", delay: 0.9 },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.08] pointer-events-none" />

      {/* Floating tech badges */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {techFloats.map((t, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
            style={{ left: t.x, top: t.y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + t.delay, duration: 0.4 }}
          >
            <t.Icon className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-[11px] font-semibold text-white/70 whitespace-nowrap">{t.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider">
                <span className="status-dot" />
                Microsoft Ecosystem Specialists
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="text-white">Dedicated .NET, Blazor & React</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Teams from Nepal
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg max-w-xl"
            >
              Leading offshore .NET development company in Kathmandu. Hire React developers
              and Azure-ready engineers who embed into your team — same tools,
              same timezone, better economics.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              <Link href="/hire-developers" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 text-base">
                Hire Developers
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base">
                See Our Work
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Mobile tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="md:hidden flex flex-wrap gap-2"
            >
              {[".NET Core","Blazor","React","React Native","Azure","PostgreSQL","MongoDB","Docker","K8s"].map((t) => (
                <span key={t} className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-white/70 border border-white/20">{t}</span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-10 pt-8 border-t border-indigo-700/50"
            >
              {[
                { n: COMPANY_STATS.projectsDelivered, l: "Projects Delivered" },
                { n: COMPANY_STATS.clientSatisfaction, l: "Client Satisfaction" },
                { n: COMPANY_STATS.yearsExperience, l: "Years Experience" },
              ].map((s, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-3xl font-bold text-white">
                    {s.n}
                  </div>
                  <div className="text-sm text-white/60">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
