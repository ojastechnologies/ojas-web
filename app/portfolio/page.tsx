"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft, HiExternalLink, HiGlobeAlt } from "react-icons/hi";
import { SiReact, SiDotnet, SiTypescript, SiNextdotjs, SiBlazor, SiFlutter, SiTailwindcss, SiGooglecloud, SiSupabase, SiSqlite } from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";

const projects = [
    {
        title: "SearchMed",
        client: "SearchMed Inc.",
        location: "Fort Lauderdale, Florida",
        description: "A comprehensive, HIPAA-compliant healthcare platform connecting patients with every registered healthcare provider in the United States. Features an AI-powered health assistant (DoctorFind.ai) for personalized provider matching, real-time appointment scheduling, medication tracking, blood pressure & weight monitoring, and secure private health reports. The provider side includes profile management, scheduling tools, patient management dashboards, and an integrated advertising system.",
        services: ["Full-Stack Development", "Mobile App Development", "Desktop App Development", "Cloud Architecture", "AI Integration", "Security & Compliance"],
        technologies: [SiDotnet, TbBrandCSharp, SiBlazor, TbBrandAzure, SiSqlite, SiTypescript, SiFlutter],
        techLabels: [".NET Core / C#", "Blazor", "Azure Cloud Services", ".NET MAUI", "OpenIdDict Auth", "MSSQL & SQLite", "SignalR", "E2E Encryption"],
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
            "Cross-platform patient app built with .NET MAUI (Android live; iOS releasing soon)",
            "Windows desktop Provider Scheduler app (.NET MAUI)",
            "Blazor-based provider portal with profile, scheduling & patient management",
            "Azure cloud infrastructure — App Services, Service Bus, Blob Storage, Notification Hubs, SignalR",
            "Custom OpenIdDict-based authentication server (auth.searchmed.net)",
            "MSSQL primary database with SQLite for offline-capable mobile storage",
        ],
        color: "from-blue-600 to-sky-500",
        logo: "/img/clients/searchmed.png",
        featured: true,
    },
    {
        title: "LeanLaw Billing Platform",
        client: "LeanLaw",
        location: "Boise, Idaho",
        description: "Cloud-based legal billing software that helps law firms get paid faster. Includes trust accounting, time tracking, invoice generation, and QuickBooks Online integration. Trusted by top legal teams across the US.",
        services: ["Full-Stack Development", "Mobile App", "Cloud Solutions", "API Integration"],
        technologies: [SiDotnet, TbBrandCSharp, SiReact, SiTypescript],
        links: [
            { label: "Product", url: "https://next.myleanlaw.co", icon: HiGlobeAlt },
            { label: "Company", url: "https://leanlaw.co", icon: HiExternalLink },
            { label: "Android App", url: "https://play.google.com/store/search?q=leanlaw&c=apps&hl=en", icon: HiExternalLink },
            { label: "iOS App", url: "https://apps.apple.com/us/app/leanlaw-legal-billing-tool/id1128609356", icon: HiExternalLink },
        ],
        highlights: [
            "Legal-specific billing & invoicing system",
            "Cross-platform mobile apps (React Native — iOS & Android)",
            "Trust accounting with compliance",
            "QuickBooks Online integration",
            "Time tracking & expense management",
        ],
        color: "from-indigo-600 to-blue-500",
        logo: "/img/clients/leanlaw.png",
        featured: true,
    },
    {
        title: "Custom Filleer",
        client: "AeroTechLabs",
        location: "Fort Lauderdale, Florida",
        description: "Custom web platform developed for AeroTechLabs, providing specialized digital solutions with a Supabase-powered backend for real-time data, authentication, and seamless client engagement.",
        services: ["Web Development", "UI/UX Design", "Backend (Supabase)"],
        technologies: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiSupabase],
        links: [
            { label: "Website", url: "https://customfiller.com", icon: HiGlobeAlt },
        ],
        highlights: [
            "Custom-built web application",
            "Modern, responsive design",
            "Optimized for performance",
        ],
        color: "from-sky-500 to-cyan-500",
        logo: "/img/clients/aerotechlabs.png",
        featured: false,
    },
    {
        title: "Vision Sign Advertising",
        client: "Vision Sign Advertising",
        location: "Lalitpur, Nepal",
        description: "Complete digital presence for a leading printing, advertising, and event management company in Nepal. Features service showcasing, portfolio gallery, and client engagement tools.",
        services: ["Web Development", "UI/UX Design", "SEO"],
        technologies: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
        links: [
            { label: "Website", url: "https://visionsignadvertising.com.np", icon: HiGlobeAlt },
        ],
        highlights: [
            "Full branding & digital presence",
            "Service catalog & portfolio",
            "SEO optimized",
            "Mobile-responsive design",
        ],
        color: "from-emerald-500 to-teal-500",
        logo: "/img/clients/visionsign.png",
        featured: false,
    },
];

const clients = [
    { name: "SearchMed Inc.", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/searchmed.png" },
    { name: "AeroTechLabs", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/aerotechlabs.png" },
    { name: "LeanLaw", location: "Boise, Idaho", flag: "🇺🇸", logo: "/img/clients/leanlaw.png" },
    { name: "Vision Sign Advertising", location: "Lalitpur, Nepal", flag: "🇳🇵", logo: "/img/clients/visionsign.png" },
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                            <HiArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-bold tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                Our Portfolio
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From healthcare platforms to legal tech — we build software that powers businesses across the globe.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Projects */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`rounded-3xl overflow-hidden border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ${project.featured ? "ring-2 ring-blue-200" : ""}`}>
                                {/* Project Header */}
                                <div className={`bg-gradient-to-r ${project.color} p-8 text-white`}>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            {project.logo && (
                                                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm p-2 flex items-center justify-center flex-shrink-0">
                                                    <Image src={project.logo} alt={project.title} width={48} height={48} className="object-contain" />
                                                </div>
                                            )}
                                            <div>
                                                {project.featured && (
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-2 backdrop-blur-sm">
                                                        Featured Project
                                                    </span>
                                                )}
                                                <h2 className="text-3xl font-bold">{project.title}</h2>
                                                <p className="text-white/80 mt-1">{project.client} • {project.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.links.map((link, i) => (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm"
                                                >
                                                    <link.icon className="w-4 h-4" />
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Body */}
                                <div className="p-8 bg-white/80 backdrop-blur-xl">
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        {/* Description */}
                                        <div className="lg:col-span-2 space-y-6">
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {project.description}
                                            </p>

                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Highlights</h3>
                                                <ul className="space-y-2">
                                                    {project.highlights.map((highlight, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 flex-shrink-0" />
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Sidebar */}
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services Provided</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.services.map((service, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg font-medium"
                                                        >
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h3>
                                                {project.techLabels ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.techLabels.map((label: string, i: number) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg font-medium"
                                                            >
                                                                {label}
                                                            </span>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-wrap gap-3">
                                                        {project.technologies.map((Tech, i) => (
                                                            <Tech
                                                                key={i}
                                                                className="w-7 h-7 text-blue-600 opacity-75 hover:opacity-100 transition-opacity"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                Our Clients
                            </span>
                        </h2>
                        <p className="text-gray-600">
                            Trusted by businesses across the globe
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
                            >
                                {client.logo ? (
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gray-50 p-2 flex items-center justify-center">
                                        <Image src={client.logo} alt={client.name} width={56} height={56} className="object-contain" />
                                    </div>
                                ) : (
                                    <div className="text-4xl mb-3">{client.flag}</div>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{client.name}</h3>
                                <p className="text-sm text-gray-500">{client.flag} {client.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl"
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Let&apos;s discuss how we can help bring your project to life.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                        >
                            Start a Conversation
                            <HiExternalLink className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
