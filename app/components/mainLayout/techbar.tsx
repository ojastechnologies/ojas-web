"use client";
import { motion } from "framer-motion";
import { SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker, SiKubernetes, SiSupabase, SiVercel, SiNetlify } from "react-icons/si";
import { TbBrandAzure, TbBrandReactNative } from "react-icons/tb";
import { HiChartBar } from "react-icons/hi";

const techs = [
  { name: ".NET Core", Icon: SiDotnet },
  { name: "Blazor",   Icon: SiBlazor },
  { name: ".NET MAUI", Icon: SiDotnet },
  { name: "React",    Icon: SiReact },
  { name: "React Native", Icon: TbBrandReactNative },
  { name: "Azure",    Icon: TbBrandAzure },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Vercel",   Icon: SiVercel },
  { name: "Netlify",  Icon: SiNetlify },
  { name: "SEO",      Icon: HiChartBar },
  { name: "Docker",   Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "TypeScript", Icon: SiTypescript },
];

export function TechBar() {
  return (
    <section className="py-14 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold text-white/50 uppercase tracking-[0.2em] mb-8">
          Technology Expertise
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-2"
            >
              <t.Icon className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-white/70">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
