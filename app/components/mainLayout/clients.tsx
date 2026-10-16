"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { SiAppstore } from "react-icons/si";
import { SEARCHMED_PATIENT_APP_URL } from "@/app/constants";

// Logos come in mixed formats (dark-on-transparent, white-on-transparent,
// white background), so each one picks the tile that keeps it legible.
const clients = [
  { name: "SearchMed", logo: "/img/clients/searchmed.png", w: 36, h: 36, tile: "light", label: true },
  { name: "LeanLaw", logo: "/img/clients/leanlaw.png", w: 110, h: 31, tile: "light", label: false },
  { name: "AeroTechLabs", logo: "/img/clients/aerotechlabs.png", w: 130, h: 29, tile: "dark", label: false },
  { name: "Vision Sign Advertising", logo: "/img/clients/visionsign.png", w: 70, h: 37, tile: "light", label: false },
] as const;

// Clients without a logo file yet are shown as a monogram + name.
const textClients = [{ name: "Tarangini Foundation", monogram: "T" }];

export function Clients() {
  return (
    <section className="relative bg-ink-950 border-y border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 lg:max-w-[10rem]">
            Trusted by teams in the US &amp; Nepal
          </p>

          <div className="flex flex-wrap items-center gap-3 flex-1">
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`h-14 px-5 rounded-xl flex items-center gap-2.5 ${
                  c.tile === "light" ? "bg-paper border border-white/[0.08] shadow-sm" : "bg-gray-900"
                }`}
              >
                <Image src={c.logo} alt={c.name} width={c.w} height={c.h} className="object-contain" />
                {c.label && <span className="text-sm font-semibold text-gray-800">{c.name}</span>}
              </motion.div>
            ))}
            {textClients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (clients.length + i) * 0.06 }}
                className="h-14 px-5 rounded-xl flex items-center gap-2.5 bg-paper border border-white/[0.08] shadow-sm"
              >
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-violet-600 text-paper font-display font-semibold flex items-center justify-center">
                  {c.monogram}
                </span>
                <span className="text-sm font-semibold text-gray-800">{c.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Latest launch */}
          <motion.a
            href={SEARCHMED_PATIENT_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="group glass-hover flex items-center gap-3 px-4 py-3 shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-paper ring-1 ring-black/5 flex items-center justify-center p-1">
              <Image src="/img/clients/searchmed.png" alt="SearchMed Patient Portal app icon" width={32} height={32} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300/80">
                <SiAppstore className="w-3 h-3" /> Now on the App Store
              </div>
              <div className="text-sm font-semibold text-white">SearchMed Patient Portal</div>
            </div>
            <HiArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
