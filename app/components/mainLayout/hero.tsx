"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";
import { SiDotnet, SiReact, SiBlazor, SiDocker, SiKubernetes } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const techFloats = [
  { Icon: SiDotnet,   label: ".NET",   x: "70%",  y: "35%",  delay: 0 },
  { Icon: SiBlazor,   label: "Blazor", x: "78%",  y: "12%",  delay: 0.2 },
  { Icon: SiReact,    label: "React",  x: "85%",  y: "58%",  delay: 0.4 },
  { Icon: TbBrandAzure, label: "Azure", x: "8%",  y: "65%",  delay: 0.1 },
  { Icon: SiDocker,   label: "Docker", x: "72%",  y: "78%",  delay: 0.3 },
  { Icon: SiKubernetes, label: "K8s",  x: "82%",  y: "80%",  delay: 0.5 },
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
            className="absolute flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
            style={{ left: t.x, top: t.y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + t.delay, duration: 0.4 }}
          >
            <t.Icon className="w-4 h-4 text-blue-300" />
            <span className="text-xs font-semibold text-white/70">{t.label}</span>
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
              {[".NET Core","Blazor",".NET MAUI","React","Azure","Docker / K8s"].map((t) => (
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
