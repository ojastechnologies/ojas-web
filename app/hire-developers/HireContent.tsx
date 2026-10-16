"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheckCircle, HiClock } from "react-icons/hi";
import { SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker } from "react-icons/si";
import { TbBrandAzure, TbBrandReactNative } from "react-icons/tb";
import { Magnetic, Reveal, SplitText, Stagger, StaggerItem } from "@/app/components/motion";

const techs = [
  { name: ".NET Core / C#", level: "Primary", Icon: SiDotnet },
  { name: "Blazor", level: "Specialized", Icon: SiBlazor },
  { name: ".NET MAUI", level: "Specialized", Icon: SiDotnet },
  { name: "React / Next.js", level: "Primary", Icon: SiReact },
  { name: "React Native", level: "Strong", Icon: TbBrandReactNative },
  { name: "Azure Cloud", level: "Primary", Icon: TbBrandAzure },
  { name: "Docker & K8s", level: "Strong", Icon: SiDocker },
  { name: "TypeScript", level: "Primary", Icon: SiTypescript },
  { name: "MSSQL / Azure SQL", level: "Strong", Icon: SiDotnet },
];

const steps = [
  { step: "01", title: "Share Requirements", desc: "Tell us your stack, team size, and timeline. We'll propose the right team composition." },
  { step: "02", title: "Team Matching", desc: "We handpick engineers matching your stack. Interview them before committing." },
  { step: "03", title: "Onboarding", desc: "Your team integrates into your workflow — Slack, Jira, GitHub, daily standups." },
  { step: "04", title: "Ongoing Delivery", desc: "Two-week sprints, AI-assisted code reviews. Scale up or down as needed." },
];

const teams = [
  { title: "SaaS Development Team", members: "2x .NET Backend + 2x React Frontend + 1x Azure DevOps", best: "Building or scaling a SaaS platform" },
  { title: "Blazor Full-Stack Team", members: "2x Blazor/.NET + 1x MAUI Mobile + 1x Azure Cloud", best: "Microsoft-ecosystem web + mobile products" },
  { title: "API & Microservices Team", members: "3x .NET Core + 1x Docker/K8s + 1x QA Automation", best: "Backend platform engineering at scale" },
];

const LEVEL_CHIP: Record<string, string> = {
  Primary: "!border-cyan-300/30 !bg-cyan-400/10 !text-cyan-200",
  Specialized: "!border-violet-300/30 !bg-violet-400/10 !text-violet-200",
  Strong: "",
};

export function HireContent() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ojastech.io" },
      { "@type": "ListItem", position: 2, name: "Hire Developers", item: "https://ojastech.io/hire-developers" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
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
              IT Outstaffing
            </motion.div>
            <SplitText
              as="h1"
              inView={false}
              delay={0.1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
              segments={[
                { text: "Hire .NET, Blazor & React Developers" },
                { text: "from Nepal", className: "text-gradient-ai" },
              ]}
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="dark-sub mb-8"
            >
              Scale your engineering capacity with AI-adept Microsoft-ecosystem developers. We handle recruiting, retention, and operations — you get a high-performing remote team that ships.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              <Magnetic>
                <Link href="/contact" className="group btn-glow">
                  Start a Conversation <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-14">
            <div className="dark-badge">Process</div>
            <h2 className="dark-title mb-5">
              How It <span className="text-gradient-ai">Works</span>
            </h2>
            <p className="dark-sub">From first conversation to daily delivery</p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <StaggerItem key={s.step} className="relative">
                <div className="glass-hover p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-cyan-300/90 px-2 py-1 rounded-md border border-cyan-300/20 bg-cyan-400/[0.06]">
                      {s.step}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <motion.div
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                    className="hidden lg:block absolute top-[2.35rem] left-full w-5 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-violet-400/70 overflow-visible"
                  >
                    <span className="packet packet-x" style={{ animationDelay: `${i * 0.6}s` }} />
                  </motion.div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tech Expertise */}
      <section className="dark-section overflow-hidden !pt-0">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="dark-badge">Expertise</div>
            <h2 className="dark-title mb-5">
              Technology <span className="text-gradient-ai">Expertise</span>
            </h2>
            <p className="dark-sub mx-auto">Microsoft ecosystem is our home turf</p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {techs.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-hover px-4 py-3.5 flex items-center gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-cyan-200">
                    <t.Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1 text-sm font-medium text-white truncate">{t.name}</div>
                  <span className={`chip-dark shrink-0 ${LEVEL_CHIP[t.level] ?? ""}`}>{t.level}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* AI-Adept */}
      <section className="dark-section overflow-hidden">
        <div className="orb orb-b w-[420px] h-[420px] top-10 left-[-10%] bg-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="dark-badge">How We Work</div>
            <h2 className="dark-title mb-5">
              <span className="text-gradient-ai">AI-Adept</span> Engineering
            </h2>
            <p className="dark-sub mx-auto">Every developer at Ojas leverages AI agents in their daily workflow — from code generation and automated testing to PR reviews and documentation. The result: consistent quality, fewer bugs, faster delivery.</p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[{title:"Code Quality",desc:"AI-assisted reviews catch edge cases before they reach production"},{title:"Faster Delivery",desc:"Boilerplate eliminated. Engineers focus on business logic"},{title:"Knowledge Capture",desc:"Auto-generated docs and specs that stay current"}].map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="glass-hover p-6 h-full">
                  <HiCheckCircle className="w-5 h-5 text-cyan-300 mb-4" />
                  <h3 className="font-display text-base font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team Examples */}
      <section className="dark-section overflow-hidden !pt-0">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-12">
            <div className="dark-badge">Team Configurations</div>
            <h2 className="dark-title mb-5">
              Example <span className="text-gradient-ai">Team Compositions</span>
            </h2>
            <p className="dark-sub">Mix and match based on your needs</p>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-4">
            {teams.map((t, i) => (
              <StaggerItem key={t.title} className="h-full">
                <div
                  className={`glass-hover p-7 h-full flex flex-col ${
                    i === 0 ? "border-beam bg-gradient-to-b from-cyan-500/[0.07] to-transparent" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-white/35 mb-5">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-semibold text-white mb-4">{t.title}</h3>
                  <p className="font-mono text-xs leading-relaxed text-cyan-100/80 mb-5">{t.members}</p>
                  <p className="mt-auto pt-4 border-t border-white/[0.06] text-sm text-white/55">{t.best}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-6">
            <div className="glass p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <HiClock className="w-5 h-5 text-paper" />
              </div>
              <div>
                <p className="text-sm text-white/75"><span className="font-semibold text-white">Timezone aligned:</span> Nepal Time (NPT) overlaps with EST morning and PST afternoon — enabling real-time standups and pair programming.</p>
                <p className="text-xs text-white/45 mt-1">Custom team compositions available. Tell us what you need.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SplitText
            as="h2"
            className="dark-title mb-4"
            segments={[
              { text: "Ready to" },
              { text: "Scale Your Team?", className: "text-gradient-ai" },
            ]}
          />
          <p className="dark-sub mx-auto mb-8">We&apos;ll propose the right team within 24 hours.</p>
          <Magnetic>
            <Link href="/contact" className="group btn-glow">
              Get Started <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </>
  );
}
