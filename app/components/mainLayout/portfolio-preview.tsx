"use client";
import { motion } from "framer-motion";
import { SplitText, Tilt } from "@/app/components/motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCalendar, HiChatAlt2, HiHeart, HiLockClosed, HiSparkles } from "react-icons/hi";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { PhoneMockup } from "@/app/components/phone-mockup";
import { SEARCHMED_PATIENT_APP_URL } from "@/app/constants";

const PATIENT_APP_FEATURES = [
  { Icon: HiSparkles, label: "AI health assistant" },
  { Icon: HiCalendar, label: "Book appointments" },
  { Icon: HiHeart, label: "Medications & vitals" },
  { Icon: HiLockClosed, label: "Encrypted messaging" },
];

const projects = [
  {
    title: "SearchMed Platform",
    client: "SearchMed Inc. · Fort Lauderdale, FL",
    desc: "HIPAA-compliant healthcare platform with AI-powered provider matching (DoctorFind.ai), a Blazor provider portal, and Azure infrastructure.",
    img: "/img/portfolio/searchmed-web.png",
    tags: ["AI matching", "Blazor", "Azure", "HIPAA"],
  },
  {
    title: "LeanLaw Billing Platform",
    client: "LeanLaw · Boise, ID",
    desc: "Legal billing microservices platform processing $2B+ in invoices annually, with React Native apps and Kubernetes on Azure + DigitalOcean.",
    img: "/img/portfolio/leanlaw-web.png",
    tags: [".NET Core", "Microservices", "Kubernetes", "React Native"],
  },
];

export function PortfolioPreview() {
  return (
    <section className="dark-section overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="dark-badge">Selected Work</div>
            <SplitText className="dark-title" segments={[{ text: "Shipped, live," }, { text: "and in use.", className: "text-gradient-ai" }]} />
          </div>
          <Link href="/portfolio" className="btn-line self-start md:self-auto">
            All case studies <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Featured: SearchMed Patient Portal */}
        <motion.article
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="glass border-beam overflow-hidden grid lg:grid-cols-[1.2fr_1fr] mb-4"
        >
          <div className="p-7 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5">
                <Image src="/img/clients/searchmed.png" alt="SearchMed" width={34} height={34} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300/80">Mobile · AI · Healthcare</div>
                <div className="text-sm text-white/50">SearchMed Inc. · Fort Lauderdale, FL</div>
              </div>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">SearchMed Patient Portal</h3>
            <p className="text-white/60 leading-relaxed mb-6 max-w-xl">
              A HIPAA-compliant patient app with an AI chat assistant that helps patients
              understand symptoms and find the right provider, plus appointment booking,
              medication and vitals tracking, and end-to-end encrypted messaging. Built
              once with .NET MAUI and shipped to iOS and Android.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {["AI assistant", ".NET MAUI", "Azure", "HIPAA", "E2E encryption"].map((t) => (
                <span key={t} className="chip-dark">{t}</span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3">
              <a href={SEARCHMED_PATIENT_APP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow !px-5 !py-3">
                <SiApple className="w-4 h-4" /> View on the App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.searchmed.portal" target="_blank" rel="noopener noreferrer" className="btn-line !px-5 !py-3">
                <SiGoogleplay className="w-3.5 h-3.5" /> Google Play
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-10 bg-gradient-to-br from-cyan-500/[0.06] to-violet-500/[0.08] border-t lg:border-t-0 lg:border-l border-white/[0.06]">
            <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" />
            <Tilt max={12}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneMockup
                  icon="/img/clients/searchmed.png"
                  name="SearchMed Patient Portal"
                  subtitle="iOS · Android"
                  features={PATIENT_APP_FEATURES}
                />
              </motion.div>
            </Tilt>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="hidden md:flex absolute right-6 bottom-8 items-center gap-2 glass px-3 py-2 text-xs text-white/80"
            >
              <HiChatAlt2 className="w-4 h-4 text-cyan-300" /> AI-powered triage
            </motion.div>
          </div>
        </motion.article>

        <div className="grid lg:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-hover overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06]">
                <Image
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-white/45 mb-1">{p.client}</div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => <span key={t} className="chip-dark">{t}</span>)}
                </div>
                <Link href="/portfolio" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white transition-colors">
                  Read case study <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
