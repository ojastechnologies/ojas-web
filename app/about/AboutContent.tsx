"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCode, HiUserGroup, HiLightningBolt } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";
import { CountUp, Magnetic, Reveal, SplitText, Stagger, StaggerItem, Tilt } from "@/app/components/motion";

export function AboutContent() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ojastech.io" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://ojastech.io/about" },
    ],
  };

  const values = [
    { icon: HiCode,          title: "Microsoft Ecosystem DNA",     desc: ".NET Core, Blazor, MAUI, C#, Azure — deep specialization, not just familiarity." },
    { icon: HiLightningBolt, title: "AI-Adept Workflow",           desc: "Every developer uses AI agents for code generation, review, and testing — consistent quality without cutting corners." },
    { icon: HiUserGroup,     title: "Nepal Advantage",             desc: "Western-quality engineering from Kathmandu at significant cost savings. Timezone overlap with EST and PST." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="orb orb-a w-[460px] h-[460px] -top-40 -left-32 bg-cyan-500/20" />
        <div className="orb orb-b w-[520px] h-[520px] -top-24 right-[-15%] bg-violet-600/20" />
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              className="dark-badge"
            >
              About Us
            </motion.div>
            <SplitText
              as="h1"
              inView={false}
              delay={0.1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
              segments={[
                { text: "Microsoft Ecosystem Specialists", className: "text-gradient-ai" },
                { text: "in Kathmandu" },
              ]}
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="dark-sub"
            >
              Founded in 2020, delivering 30+ projects across 10+ countries in .NET, Blazor, MAUI, React, and Azure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="dark-section overflow-hidden !pt-8 md:!pt-12">
        <div className="absolute inset-0 bg-aurora opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <Reveal>
              <Tilt max={4}>
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-violet-500/20 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative glass ring-gradient p-1.5 overflow-hidden">
                    <Image src="/img/full logo.jpeg" alt="Ojas Technologies company - IT outstaffing and software development Nepal" width={600} height={600} className="rounded-xl object-cover w-full h-auto" loading="lazy" />
                  </div>
                </div>
              </Tilt>
            </Reveal>

            <Reveal delay={0.1} className="space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Our <span className="text-gradient-ai">Story</span></h2>
                <p className="text-lg text-white/75 leading-relaxed">Ojas Technologies started in 2020 in Kathmandu, Nepal with a simple idea: world-class Microsoft-ecosystem engineering doesn&apos;t require a Silicon Valley address.</p>
              </div>

              <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[{l:"Projects",v:COMPANY_STATS.projectsDelivered},{l:"Clients",v:COMPANY_STATS.clients},{l:"Experience",v:COMPANY_STATS.yearsExperience},{l:"Team Size",v:COMPANY_STATS.teamSize}].map(s => (
                  <StaggerItem key={s.l}>
                    <div className="glass-hover p-4 text-center">
                      <CountUp value={s.v} className="block font-display text-2xl font-semibold text-gradient-ai" />
                      <div className="text-xs text-white/55 mt-1">{s.l}</div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Stagger className="space-y-3">
                {values.map((v) => (
                  <StaggerItem key={v.title}>
                    <div className="glass-hover p-5 flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-paper shrink-0"><v.icon className="w-4 h-4" /></div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-white">{v.title}</h3>
                        <p className="text-sm text-white/55 mt-1 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>

          <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic>
              <Link href="/hire-developers" className="group btn-glow">
                Hire Developers <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Link href="/portfolio" className="btn-line">See Our Work</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
