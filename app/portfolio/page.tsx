"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiExternalLink, HiGlobeAlt, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SiReact, SiDotnet, SiTypescript, SiNextdotjs, SiBlazor, SiFlutter, SiTailwindcss, SiGooglecloud, SiSupabase, SiSqlite, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { IconType } from "react-icons";
import { Navbar } from "../components/navbar";

/* ─── Types ──────────────────────────────────────── */
interface ProjectLink {
    label: string;
    url: string;
    icon: IconType;
}

interface Project {
    brandColor: string;
    title: string;
    client: string;
    location: string;
    description: string;
    services: string[];
    technologies: IconType[];
    techLabels?: string[];
    links: ProjectLink[];
    highlights: string[];
    apps: { name: string; platform: string }[];
    logo: string;
    screenshots: { src: string; label: string }[];
    featured: boolean;
}

/* ─── Data ───────────────────────────────────────── */
const projects: Project[] = [
    {
        title: "SearchMed",
        client: "SearchMed Inc.",
        location: "Fort Lauderdale, Florida",
        description: "A comprehensive, HIPAA-compliant healthcare platform connecting patients with every registered healthcare provider in the United States. Features an AI-powered health assistant (DoctorFind.ai) for personalized provider matching, real-time appointment scheduling, medication tracking, blood pressure & weight monitoring, and secure private health reports. The provider side includes profile management, scheduling tools, patient management dashboards, and an integrated advertising system.",
        services: ["Full-Stack Development", "Mobile App Development", "Desktop App Development", "Cloud Architecture", "Cloud Infrastructure Management", "AI Integration", "Security & Compliance"],
        technologies: [SiDotnet, TbBrandCSharp, SiBlazor, TbBrandAzure, SiSqlite, SiTypescript, SiFlutter],
        techLabels: [".NET Core / C#", "Blazor", ".NET MVC", "Azure Cloud Services", ".NET MAUI", "OpenIdDict Auth", "MSSQL & SQLite", "SignalR", "E2E Encryption", "GitHub Actions CI/CD"],
        links: [
            { label: "Website", url: "https://searchmed.com", icon: HiGlobeAlt },
            { label: "Provider Portal", url: "https://provider.searchmed.com", icon: HiExternalLink },
            { label: "Patient App (Android)", url: "https://play.google.com/store/apps/details?id=com.searchmed.portal&hl=en", icon: HiExternalLink },
            { label: "Patient App (iOS)", url: "#", icon: HiExternalLink },
            { label: "Provider Scheduler (Windows)", url: "ms-windows-store://pdp/?ProductId=9PFDTW1MMHZ6&cid=PCCongratsBnr", icon: HiExternalLink },
        ],
        highlights: [
            "AI-powered healthcare provider search & matching (DoctorFind.ai)",
            "AI chat assistant in patient portal — diagnoses symptoms, recommends providers based on conditions, and offers basic first aid guidance",
            "HIPAA-compliant patient portal with end-to-end encrypted messaging",
            "Real-time appointment scheduling with calendar management",
            "Integrated payment processing via Stripe",
            "Cross-platform patient app built with .NET MAUI (Android live; iOS releasing soon)",
            "Windows desktop Provider Scheduler app (.NET MAUI)",
            "Blazor-based provider portal with profile, scheduling & patient management",
            "Azure cloud infrastructure — App Services, Service Bus, Blob Storage, Notification Hubs, SignalR",
            "Custom OpenIdDict-based authentication server (auth.searchmed.net)",
            "MSSQL primary database with SQLite for offline-capable mobile storage",
        ],
        apps: [
            { name: "SearchMed Web App", platform: "Web" },
            { name: "Provider Portal", platform: "Web (Blazor)" },
            { name: "Patient Portal App", platform: "Android (.NET MAUI)" },
            { name: "Patient Portal App", platform: "iOS (.NET MAUI) — Releasing Soon" },
            { name: "Provider Scheduler", platform: "Windows Desktop (.NET MAUI)" },
            { name: "Auth Server", platform: "auth.searchmed.net (.NET MVC + OpenIdDict)" },
            { name: "SearchMed API", platform: ".NET Core Web API + MSSQL Database" },
        ],
        logo: "/img/clients/searchmed.png",
        brandColor: "#1a4f7a",
        screenshots: [
            { src: "/img/portfolio/searchmed-web.png", label: "SearchMed — Provider Search" },
        ],
        featured: true,
    },
    {
        title: "LeanLaw Billing Platform",
        client: "LeanLaw",
        location: "Boise, Idaho",
        description: "Cloud-based legal billing and practice management platform built on a microservices architecture. Helps law firms manage trust accounting, time tracking, invoice generation, and QuickBooks Online integration. Deployed across Azure and Digital Ocean with Kubernetes orchestration.",
        services: ["Full-Stack Development", "Mobile App Development", "Cloud Architecture", "Cloud Infrastructure Management", "API Development", "Microservices", "CI/CD"],
        technologies: [SiDotnet, TbBrandCSharp, SiReact, SiTypescript],
        techLabels: [".NET Core / C#", "Azure Cloud (AKS, Service Bus, Blob Storage, Functions)", "MSSQL / Azure SQL", "Vue.js", "React Native", "Kubernetes & Docker", "RabbitMQ", "Digital Ocean", "JavaScript / TypeScript", "GitHub Actions CI/CD", "Microservices", "Web APIs / gRPC / REST", "Graph API / GraphQL"],
        links: [
            { label: "Product", url: "https://next.myleanlaw.co", icon: HiGlobeAlt },
            { label: "Company Website", url: "https://leanlaw.co", icon: HiExternalLink },
            { label: "Android App", url: "https://play.google.com/store/search?q=leanlaw&c=apps&hl=en", icon: HiExternalLink },
            { label: "iOS App", url: "https://apps.apple.com/us/app/leanlaw-legal-billing-tool/id1128609356", icon: HiExternalLink },
        ],
        highlights: [
            "Legal-specific billing & invoicing system",
            "Cross-platform mobile apps (React Native — iOS & Android)",
            "Microservices architecture with Kubernetes orchestration",
            "Trust accounting with compliance",
            "Payment processing integration via Maxio & Stripe",
            "Legal payments integration via Confido Legal",
            "QuickBooks Online integration via Graph API",
            "Time tracking & expense management",
            "Azure & Digital Ocean hybrid cloud deployment",
            "RabbitMQ message queuing for async workflows",
            "CI/CD pipelines with GitHub Actions",
        ],
        apps: [
            { name: "LeanLaw Web App", platform: "Vue.js" },
            { name: "LeanLaw Mobile App", platform: "React Native (iOS & Android)" },
            { name: "LeanLaw REST API", platform: ".NET Core Web API + MSSQL" },
            { name: "GraphQL API", platform: ".NET Core + GraphQL" },
            { name: "QuickBooks Sync Service", platform: ".NET Core Microservice" },
            { name: "Invoicing Service", platform: ".NET Core Microservice" },
            { name: "Payment Service", platform: ".NET Core Microservice" },
            { name: "Webhooks Service", platform: ".NET Core Microservice" },
            { name: "Email Service", platform: ".NET Core Microservice" },
            { name: "Background Services", platform: ".NET Core Workers" },
        ],
        logo: "/img/clients/leanlaw.png",
        brandColor: "#1e3a5f",
        screenshots: [
            { src: "/img/portfolio/leanlaw-web.png", label: "LeanLaw — Legal Billing" },
        ],
        featured: true,
    },
    {
        title: "Custom Filler",
        client: "AeroTechLabs",
        location: "Fort Lauderdale, Florida",
        description: "Custom web platform developed for AeroTechLabs, providing specialized digital solutions. Features a robust Next.js frontend combined with a Supabase-powered backend for real-time data, authentication, and seamless client engagement.",
        services: ["Web Development", "UI/UX Design", "Backend Development"],
        technologies: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiSupabase],
        techLabels: ["Next.js", "Supabase", "React", "TypeScript", "Tailwind CSS"],
        links: [
            { label: "Website", url: "https://customfiller.com", icon: HiGlobeAlt },
        ],
        highlights: [
            "Server-side rendering with Next.js",
            "Supabase backend integration for auth and database",
            "Basic e-commerce features with Stripe payment integration",
            "Modern, responsive design with Tailwind",
            "Optimized for core web vitals and fast load times",
        ],
        apps: [
            { name: "Custom Filler Web App", platform: "Next.js / Supabase" },
        ],
        logo: "/img/clients/aerotechlabs.png",
        brandColor: "#0f172a",
        screenshots: [
            { src: "/img/portfolio/customfiller-web.png", label: "Custom Filler — Homepage" },
        ],
        featured: false,
    },
    {
        title: "Vision Sign Advertising",
        client: "Vision Sign Advertising",
        location: "Lalitpur, Nepal",
        description: "Complete digital presence for a leading printing, advertising, and event management company in Nepal. Features service showcasing, portfolio gallery, and client engagement tools.",
        services: ["Web Development", "UI/UX Design", "SEO"],
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techLabels: ["HTML5", "CSS3", "JavaScript"],
        links: [
            { label: "Website", url: "https://visionsignadvertising.com.np", icon: HiGlobeAlt },
        ],
        highlights: [
            "Full branding & digital presence",
            "Service catalog & portfolio",
            "SEO optimized",
            "Mobile-responsive design",
        ],
        apps: [],
        logo: "/img/clients/visionsign.png",
        brandColor: "#dc2626",
        screenshots: [
            { src: "/img/portfolio/visionsign-web.png", label: "Vision Sign — Homepage" },
        ],
        featured: false,
    },
];

const clients = [
    { name: "SearchMed Inc.", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/searchmed.png" },
    { name: "AeroTechLabs", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/aerotechlabs.png" },
    { name: "LeanLaw", location: "Boise, Idaho", flag: "🇺🇸", logo: "/img/clients/leanlaw.png" },
    { name: "Vision Sign Advertising", location: "Lalitpur, Nepal", flag: "🇳🇵", logo: "/img/clients/visionsign.png" },
];

/* ─── Screenshot Carousel ────────────────────────── */
function ScreenshotCarousel({ screenshots }: { screenshots: { src: string; label: string }[] }) {
    const [current, setCurrent] = useState(0);

    if (screenshots.length === 0) return null;

    return (
        <div className="relative group/carousel">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <Image
                    src={screenshots[current].src}
                    alt={screenshots[current].label}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Label */}
            <p className="mt-3 text-xs text-gray-400 text-center">{screenshots[current].label}</p>

            {/* Navigation */}
            {screenshots.length > 1 && (
                <>
                    <button
                        onClick={() => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                    >
                        <HiChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={() => setCurrent((c) => (c + 1) % screenshots.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                    >
                        <HiChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                    {/* Dots */}
                    <div className="flex justify-center gap-1.5 mt-2">
                        {screenshots.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-gray-800 w-4" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

/* ─── Page ───────────────────────────────────────── */
export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Our Work</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                            Projects & Case Studies
                        </h1>
                        <p className="text-lg text-gray-500 max-w-xl">
                            From healthcare platforms to legal tech — we build software that powers businesses across the globe.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Projects */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ boxShadow: `0 4px 24px -4px ${project.brandColor}15` }}
                        >
                            {/* Project Header */}
                            <div className="px-6 sm:px-8 py-5 flex items-center justify-between" style={{ backgroundColor: project.brandColor }}>
                                <div className="flex items-center gap-4">
                                    {project.logo && (
                                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm p-1.5 flex items-center justify-center">
                                            <Image src={project.logo} alt={project.title} width={32} height={32} className="object-contain" />
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{project.title}</h2>
                                        <p className="text-white/60 text-xs">{project.client} · {project.location}</p>
                                    </div>
                                </div>
                                {project.featured && (
                                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white rounded-full backdrop-blur-sm">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Top: Screenshot + Info */}
                            <div className="grid lg:grid-cols-2 bg-white">
                                {/* Screenshot carousel */}
                                <div className="p-6 sm:p-8 bg-gray-50/80 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    <ScreenshotCarousel screenshots={project.screenshots} />
                                </div>

                                {/* Project info */}
                                <div className="p-6 sm:p-8 flex flex-col">
                                    <p className="text-gray-600 leading-relaxed text-sm mb-5 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Apps */}
                                    {project.apps.length > 0 && (
                                        <div className="mb-5">
                                            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Apps Built</h3>
                                            <div className="space-y-1.5">
                                                {project.apps.map((app, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-xs">
                                                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.brandColor }} />
                                                        <span className="font-medium text-gray-700">{app.name}</span>
                                                        <span className="text-gray-400">— {app.platform}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
                                                style={{ color: project.brandColor, backgroundColor: `${project.brandColor}08`, border: `1px solid ${project.brandColor}20` }}
                                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${project.brandColor}15`; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${project.brandColor}08`; }}
                                            >
                                                <link.icon className="w-3.5 h-3.5" />
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="px-6 sm:px-8 py-6 border-t border-gray-100 bg-white">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Highlights</h3>
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                    {project.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2.5 py-1">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.brandColor }} />
                                            <span className="text-sm text-gray-600">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom bar: Services + Tech */}
                            <div className="px-6 sm:px-8 py-5 bg-gray-50 border-t border-gray-100">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Services</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.services.map((s, i) => (
                                                <span key={i} className="px-2.5 py-1 text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded-md">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="lg:border-l lg:border-gray-200 lg:pl-6">
                                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Tech Stack</h3>
                                        {project.techLabels ? (
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.techLabels.map((t, i) => (
                                                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded-md">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex flex-wrap gap-2.5">
                                                {project.technologies.map((Tech, i) => (
                                                    <Tech key={i} className="w-5 h-5 text-gray-400" />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Clients Section */}
            <section className="bg-white border-t border-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Partnerships</p>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Clients</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors text-center"
                            >
                                {client.logo ? (
                                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white border border-gray-100 p-2 flex items-center justify-center">
                                        <Image src={client.logo} alt={client.name} width={44} height={44} className="object-contain" />
                                    </div>
                                ) : (
                                    <div className="text-3xl mb-3">{client.flag}</div>
                                )}
                                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{client.name}</h3>
                                <p className="text-xs text-gray-400">{client.flag} {client.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Build Something Great?</h2>
                        <p className="text-gray-500 mb-8">
                            Let&apos;s discuss how we can help bring your project to life.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            Start a Conversation
                            <HiExternalLink className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
