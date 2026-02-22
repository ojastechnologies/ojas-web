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
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Project Card */}
                            <div className="group relative">
                                {/* Glow effect behind card */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                                <div className="relative rounded-[2rem] overflow-hidden bg-white border border-gray-200/60 shadow-xl">
                                    {/* Hero Section */}
                                    <div className={`relative bg-gradient-to-br ${project.color} px-8 sm:px-12 py-12`}>
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

                                        <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-5 mb-6">
                                                    {project.logo && (
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                                            className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md p-2.5 flex items-center justify-center shadow-lg border border-white/30"
                                                        >
                                                            <Image src={project.logo} alt={project.title} width={52} height={52} className="object-contain" />
                                                        </motion.div>
                                                    )}
                                                    <div>
                                                        {project.featured && (
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/20 rounded-full mb-2 backdrop-blur-sm border border-white/20">
                                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                                Featured Project
                                                            </span>
                                                        )}
                                                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{project.title}</h2>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 text-white/70 text-sm mb-6">
                                                    <span className="flex items-center gap-1.5">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                                        {project.client}
                                                    </span>
                                                    <span className="w-1 h-1 bg-white/40 rounded-full" />
                                                    <span className="flex items-center gap-1.5">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                        {project.location}
                                                    </span>
                                                </div>

                                                <p className="text-white/85 text-lg leading-relaxed max-w-2xl">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Links */}
                                            <div className="flex flex-wrap lg:flex-col gap-2 lg:min-w-[200px]">
                                                {project.links.map((link, i) => (
                                                    <motion.a
                                                        key={i}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.03, x: -4 }}
                                                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 rounded-xl text-sm font-medium transition-all backdrop-blur-sm border border-white/10 hover:border-white/30"
                                                    >
                                                        <link.icon className="w-4 h-4" />
                                                        {link.label}
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Highlights Grid */}
                                    <div className="px-8 sm:px-12 py-10 bg-gradient-to-b from-gray-50/80 to-white">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Highlights</h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {project.highlights.map((highlight, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors group/item"
                                                >
                                                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                                                        {String(i + 1).padStart(2, "0")}
                                                    </span>
                                                    <span className="text-gray-700 leading-snug pt-1 group-hover/item:text-gray-900 transition-colors">
                                                        {highlight}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Bar: Services + Tech */}
                                    <div className="px-8 sm:px-12 py-6 border-t border-gray-100 bg-white flex flex-col lg:flex-row lg:items-center gap-6">
                                        <div className="flex-1">
                                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Services</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.services.map((service, i) => (
                                                    <span
                                                        key={i}
                                                        className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white shadow-sm`}
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="lg:border-l lg:border-gray-100 lg:pl-6">
                                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</h3>
                                            {project.techLabels ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techLabels.map((label: string, i: number) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full border border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition-colors"
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
                                                            className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors"
                                                        />
                                                    ))}
                                                </div>
                                            )}
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
