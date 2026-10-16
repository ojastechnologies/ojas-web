import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { COMPANY_STATS } from "../constants";
import { CountUp, Magnetic, Reveal, SplitText, Stagger, StaggerItem } from "@/app/components/motion";

export const metadata: Metadata = {
    title: "Software Development & IT Outsourcing Nepal | Ojas Technologies",
    description:
        "Looking for software companies in Nepal? Ojas Technologies offers expert IT outsourcing and IT outstaffing services from Kathmandu. The best software company Nepal has to offer — serving clients across South Asia.",
    alternates: {
        canonical: "https://ojastech.io/software-development-nepal",
    },
    keywords: [
        "software companies in Nepal",
        "IT outsourcing Nepal",
        "IT outstaffing Nepal",
        "best software company Nepal",
        "software development Kathmandu",
        "South Asia",
        "offshore software development Nepal",
        "hire developers Nepal",
        ".NET development Nepal",
        "React developers Nepal",
    ],
    openGraph: {
        title: "Software Development & IT Outsourcing in Nepal | Ojas Technologies",
        description:
            "Expert software development and IT outstaffing services from Kathmandu, Nepal. Timezone-aligned, cost-effective, English-proficient teams serving clients worldwide.",
        url: "https://ojastech.io/software-development-nepal",
        siteName: "Ojas Technologies",
        type: "website",
        images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies - Software Development Nepal" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development & IT Outsourcing Nepal | Ojas Technologies",
        description:
            "Expert software development and IT outstaffing services from Kathmandu, Nepal. Timezone-aligned, cost-effective, English-proficient teams.",
        images: ["/img/full logo.jpeg"],
    },
};

const ARROW_PATH = "M17 8l4 4m0 0l-4 4m4-4H3";

const reasons = [
    {
        title: "Timezone Advantage",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        body: "Nepal Standard Time (UTC+5:45) offers 5+ hours of overlap with US East Coast business hours and full overlap with Europe. Your team works during your day — no overnight shifts required.",
    },
    {
        title: "Cost Efficiency",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        body: "Senior developers in Nepal cost $3,000–$6,000 per month — a fraction of US or European rates — without compromising on quality. You get enterprise-grade talent at offshore rates.",
    },
    {
        title: "English Proficiency",
        icon: "M3 5a12 12 0 0118 0M3 5v14a12 12 0 0118 0V5M3 5h18",
        body: "English is the primary language of instruction in Nepali universities. Developers communicate fluently in written and spoken English — no language barriers during standups, code reviews, or client meetings.",
    },
];

const services = [
    {
        title: "Custom Web Development",
        body: "Full-stack web applications built with .NET Core, React, Next.js, and Blazor. Scalable, secure, and designed for performance.",
        href: "/portfolio",
        cta: "View Portfolio",
    },
    {
        title: "Mobile App Development",
        body: "Cross-platform mobile apps using .NET MAUI, React Native, and Flutter. Native-like experiences for iOS and Android.",
        href: "/portfolio",
        cta: "View Portfolio",
    },
    {
        title: "IT Outstaffing & Dedicated Teams",
        body: "Scale your engineering team instantly with dedicated .NET, React, and cloud engineers from Nepal who integrate into your workflow.",
        href: "/hire-developers",
        cta: "Hire Developers",
    },
    {
        title: "AI Automation",
        body: "Custom AI agents, chatbots, document processing, and LLM-powered solutions to automate your business workflows.",
        href: "/portfolio",
        cta: "View Portfolio",
    },
    {
        title: "Cloud & DevOps",
        body: "Azure cloud architecture, Kubernetes, CI/CD pipelines, and hybrid cloud deployments managed by experienced cloud engineers.",
        href: "/portfolio",
        cta: "View Portfolio",
    },
    {
        title: "Legacy Modernization",
        body: "Modernize legacy systems to modern architectures — migrate from monolithic to microservices, upgrade frameworks, and improve performance.",
        href: "/portfolio",
        cta: "View Portfolio",
    },
];

function Arrow({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ARROW_PATH} />
        </svg>
    );
}

export default function SoftwareDevelopmentNepalPage() {
    const stats = [
        { value: COMPANY_STATS.yearsExperience, label: "Years of Experience" },
        { value: COMPANY_STATS.teamSize, label: "Skilled Developers" },
        { value: COMPANY_STATS.clients, label: "Happy Clients" },
        { value: COMPANY_STATS.countries, label: "Countries Served" },
    ];

    return (
        <>
            <main className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
                <Navbar />

                {/* ─── Dark Hero ─── */}
                <section className="relative overflow-hidden bg-ink-950">
                    <div className="orb orb-a w-[460px] h-[460px] -top-40 -left-32 bg-cyan-500/20" />
                    <div className="orb orb-b w-[500px] h-[500px] -top-24 right-[-15%] bg-violet-600/20" />
                    <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-24 text-center">
                        <Reveal y={10}>
                            <span className="dark-badge">
                                Software Development in Nepal
                            </span>
                        </Reveal>
                        <SplitText
                            as="h1"
                            inView={false}
                            delay={0.1}
                            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.05] max-w-5xl mx-auto"
                            segments={[
                                { text: "Software Development & IT Outsourcing" },
                                { text: "in Nepal", className: "text-gradient-animated" },
                            ]}
                        />
                        <Reveal delay={0.35} y={16}>
                            <p className="dark-sub max-w-3xl mx-auto">
                                Nepal has emerged as a premier destination for software development and IT outsourcing in South Asia.
                                With a 5+ hour timezone overlap with the US East Coast, strong English proficiency, and competitive rates,
                                Nepali software companies deliver world-class solutions for global clients.
                            </p>
                        </Reveal>
                        <Reveal delay={0.5} y={16} className="mt-10 flex justify-center">
                            <Magnetic>
                                <Link href="/contact" className="group btn-glow">
                                    Start Your Project
                                    <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Magnetic>
                        </Reveal>
                    </div>
                </section>

                {/* ─── Stats Section ─── */}
                <section className="relative py-12 md:py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Stagger className="glass grid grid-cols-2 md:grid-cols-4 divide-white/[0.06] md:divide-x text-center">
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label} className="px-4 py-7 md:py-9">
                                    <p className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                                        <CountUp value={stat.value} />
                                    </p>
                                    <p className="text-xs sm:text-sm text-white/55 mt-2">{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* ─── Why Nepal Section ─── */}
                <section className="dark-section overflow-hidden">
                    <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal className="text-center mb-12 md:mb-16">
                            <h2 className="dark-title !text-3xl md:!text-5xl mb-5">Why Choose Nepal for Software Development?</h2>
                            <p className="dark-sub mx-auto">
                                Nepal combines technical talent with business-friendly advantages that make it one of the best
                                destinations for IT outsourcing and IT outstaffing in South Asia.
                            </p>
                        </Reveal>
                        <Stagger className="grid md:grid-cols-3 gap-4 md:gap-5">
                            {reasons.map((r) => (
                                <StaggerItem key={r.title} className="h-full">
                                    <div className="group glass-hover h-full p-7 md:p-8">
                                        <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 text-cyan-200 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/10">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={r.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="font-display text-xl font-semibold text-white mb-3">{r.title}</h3>
                                        <p className="text-white/55 leading-relaxed">{r.body}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* ─── Our Services ─── */}
                <section className="dark-section border-t border-white/[0.06]">
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal className="text-center mb-12 md:mb-16">
                            <h2 className="dark-title !text-3xl md:!text-5xl mb-5">Our Software Development Services</h2>
                            <p className="dark-sub mx-auto">
                                As one of the leading software companies in Nepal, we offer a full range of development and
                                IT outsourcing services.
                            </p>
                        </Reveal>
                        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                            {services.map((svc, i) => (
                                <StaggerItem key={svc.title} className="h-full">
                                    <div className="group glass-hover h-full p-6 md:p-7 flex flex-col">
                                        <span className="font-mono text-[11px] text-cyan-300/70 mb-4" aria-hidden>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="font-display text-lg font-semibold text-white mb-2">{svc.title}</h3>
                                        <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{svc.body}</p>
                                        <Link
                                            href={svc.href}
                                            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white transition-colors"
                                        >
                                            {svc.cta}
                                            <Arrow className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* ─── CTA Section ─── */}
                <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
                    <div className="orb orb-a w-[380px] h-[380px] top-[-30%] left-[10%] bg-cyan-500/15" />
                    <div className="orb orb-b w-[380px] h-[380px] bottom-[-30%] right-[5%] bg-violet-600/20" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="relative glass border-beam p-8 sm:p-10 md:p-14 text-center">
                                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                                    Ready to Work with the Best Software Company in Nepal?
                                </h2>
                                <p className="text-base md:text-lg text-white/55 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Let&apos;s discuss your project. Whether you need IT outsourcing, IT outstaffing, or a complete
                                    custom software solution, our team in Kathmandu is ready to help.
                                </p>
                                <div className="flex justify-center">
                                    <Magnetic>
                                        <Link href="/contact" className="group btn-glow">
                                            Get in Touch
                                            <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Magnetic>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
