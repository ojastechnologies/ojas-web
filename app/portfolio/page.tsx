"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
  HiExternalLink,
  HiGlobeAlt,
  HiChevronLeft,
  HiChevronRight,
  HiDesktopComputer,
  HiServer,
} from "react-icons/hi";
import {
  SiReact,
  SiDotnet,
  SiTypescript,
  SiNextdotjs,
  SiBlazor,
  SiFlutter,
  SiTailwindcss,
  SiGooglecloud,
  SiSupabase,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { IconType } from "react-icons";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";

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
  outcomes?: { metric: string; label: string }[];
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
    description:
      "A comprehensive, HIPAA-compliant healthcare platform connecting patients with every registered healthcare provider in the United States. Features an AI-powered health assistant (DoctorFind.ai) for personalized provider matching, real-time appointment scheduling, medication tracking, blood pressure & weight monitoring, and secure private health reports. The provider side includes profile management, scheduling tools, patient management dashboards, and an integrated advertising system.",
    services: [
      "Full-Stack Development",
      "Mobile App Development",
      "Desktop App Development",
      "Cloud Architecture",
      "Cloud Infrastructure Management",
      "AI Integration",
      "Security & Compliance",
    ],
    technologies: [
      SiDotnet,
      TbBrandCSharp,
      SiBlazor,
      TbBrandAzure,
      SiSqlite,
      SiTypescript,
      SiFlutter,
    ],
    techLabels: [
      ".NET Core / C#",
      "Blazor",
      ".NET MVC",
      "Azure Cloud Services",
      ".NET MAUI",
      "OpenIdDict Auth",
      "MSSQL & SQLite",
      "SignalR",
      "E2E Encryption",
      "GitHub Actions CI/CD",
    ],
    links: [
      { label: "Website", url: "https://searchmed.com", icon: HiGlobeAlt },
      {
        label: "Provider Portal",
        url: "https://provider.searchmed.com",
        icon: HiExternalLink,
      },
      {
        label: "Patient App (Android)",
        url: "https://play.google.com/store/apps/details?id=com.searchmed.portal&hl=en",
        icon: HiExternalLink,
      },
      {
        label: "Patient App (iOS)",
        url: "https://apps.apple.com/us/app/searchmed-patient-portal/id6745996128",
        icon: HiExternalLink,
      },
      {
        label: "Provider Scheduler (Windows)",
        url: "ms-windows-store://pdp/?ProductId=9PFDTW1MMHZ6&cid=PCCongratsBnr",
        icon: HiExternalLink,
      },
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
      { name: "Patient Portal App", platform: "iOS (.NET MAUI)" },
      {
        name: "Provider Scheduler",
        platform: "Windows Desktop (.NET MAUI)",
      },
      {
        name: "Auth Server",
        platform: "auth.searchmed.net (.NET MVC + OpenIdDict)",
      },
      { name: "SearchMed API", platform: ".NET Core Web API + MSSQL Database" },
    ],
    logo: "/img/clients/searchmed.png",
    brandColor: "#4338ca",
    screenshots: [
      { src: "/img/portfolio/searchmed-web.png", label: "SearchMed — Provider Search" },
    ],
    outcomes: [
      { metric: "500K+", label: "Healthcare providers indexed" },
      { metric: "50K+", label: "Monthly active patients" },
      { metric: "HIPAA", label: "Full compliance achieved" },
    ],
    featured: true,
  },
  {
    title: "LeanLaw Billing Platform",
    client: "LeanLaw",
    location: "Boise, Idaho",
    description:
      "Cloud-based legal billing and practice management platform built on a microservices architecture. Helps law firms manage trust accounting, time tracking, invoice generation, and QuickBooks Online integration. Deployed across Azure and Digital Ocean with Kubernetes orchestration.",
    services: [
      "Full-Stack Development",
      "Mobile App Development",
      "Cloud Architecture",
      "Cloud Infrastructure Management",
      "API Development",
      "Microservices",
      "CI/CD",
    ],
    technologies: [SiDotnet, TbBrandCSharp, SiReact, SiTypescript],
    techLabels: [
      ".NET Core / C#",
      "Azure Cloud (AKS, Service Bus, Blob Storage, Functions)",
      "MSSQL / Azure SQL",
      "Vue.js",
      "React Native",
      "Kubernetes & Docker",
      "RabbitMQ",
      "Digital Ocean",
      "JavaScript / TypeScript",
      "GitHub Actions CI/CD",
      "Microservices",
      "Web APIs / gRPC / REST",
      "Graph API / GraphQL",
    ],
    links: [
      { label: "Product", url: "https://next.myleanlaw.co", icon: HiGlobeAlt },
      { label: "Company Website", url: "https://leanlaw.co", icon: HiExternalLink },
      {
        label: "Android App",
        url: "https://play.google.com/store/search?q=leanlaw&c=apps&hl=en",
        icon: HiExternalLink,
      },
      {
        label: "iOS App",
        url: "https://apps.apple.com/us/app/leanlaw-legal-billing-tool/id1128609356",
        icon: HiExternalLink,
      },
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
    brandColor: "#4338ca",
    screenshots: [
      { src: "/img/portfolio/leanlaw-web.png", label: "LeanLaw — Legal Billing" },
    ],
    outcomes: [
      { metric: "$2B+", label: "Invoices processed annually" },
      { metric: "1,000+", label: "Law firms served" },
      { metric: "99.9%", label: "Platform uptime" },
    ],
    featured: true,
  },
  {
    title: "Custom Filler",
    client: "AeroTechLabs",
    location: "Fort Lauderdale, Florida",
    description:
      "Custom web platform developed for AeroTechLabs, providing specialized digital solutions. Features a robust Next.js frontend combined with a Supabase-powered backend for real-time data, authentication, and seamless client engagement.",
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
    apps: [{ name: "Custom Filler Web App", platform: "Next.js / Supabase" }],
    logo: "/img/clients/aerotechlabs.png",
    brandColor: "#4338ca",
    screenshots: [
      { src: "/img/portfolio/customfiller-web.png", label: "Custom Filler — Homepage" },
    ],
    featured: false,
  },
  {
    title: "Vision Sign Advertising",
    client: "Vision Sign Advertising",
    location: "Lalitpur, Nepal",
    description:
      "Complete digital presence for a leading printing, advertising, and event management company in Nepal. Features service showcasing, portfolio gallery, and client engagement tools.",
    services: ["Web Development", "UI/UX Design", "SEO"],
    technologies: [SiHtml5, SiCss3, SiJavascript],
    techLabels: ["HTML5", "CSS3", "JavaScript"],
    links: [
      {
        label: "Website",
        url: "https://visionsignadvertising.com.np",
        icon: HiGlobeAlt,
      },
    ],
    highlights: [
      "Full branding & digital presence",
      "Service catalog & portfolio",
      "SEO optimized",
      "Mobile-responsive design",
    ],
    apps: [],
    logo: "/img/clients/visionsign.png",
    brandColor: "#4338ca",
    screenshots: [
      { src: "/img/portfolio/visionsign-web.png", label: "Vision Sign — Homepage" },
    ],
    featured: false,
  },
];

const clients = [
  { name: "SearchMed Inc.", contact: "Rafael Morel, CTO", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/searchmed.png" },
  { name: "LeanLaw", contact: "Fred Willerup, CTO", location: "Boise, Idaho", flag: "🇺🇸", logo: "/img/clients/leanlaw.png" },
  { name: "AeroTechLabs", contact: "Scott Hofman, CEO", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/aerotechlabs.png" },
  { name: "Vision Sign Advertising", contact: "Basudev Adhikari, CEO", location: "Lalitpur, Nepal", flag: "🇳🇵", logo: "/img/clients/visionsign.png" },
];

/* ─── Helpers ────────────────────────────────────── */

/** Assign a platform category icon */
function PlatformIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase();
  if (p.includes("ios")) return <FaApple className="w-3.5 h-3.5" />;
  if (p.includes("android")) return <FaAndroid className="w-3.5 h-3.5" />;
  if (p.includes("windows") || p.includes("desktop"))
    return <FaWindows className="w-3.5 h-3.5" />;
  if (p.includes("web") || p.includes("blazor") || p.includes("vue") || p.includes("next") || p.includes("html"))
    return <HiGlobeAlt className="w-3.5 h-3.5" />;
  // API / backend / microservice / worker
  if (p.includes("api") || p.includes("microservice") || p.includes("worker") || p.includes("graphql"))
    return <HiServer className="w-3.5 h-3.5" />;
  return <HiDesktopComputer className="w-3.5 h-3.5" />;
}

/** Short human-readable platform label */
function PlatformLabel({ platform }: { platform: string }) {
  const p = platform.toLowerCase();
  if (p.includes("ios")) return "iOS";
  if (p.includes("android")) return "Android";
  if (p.includes("windows") || p.includes("desktop")) return "Desktop";
  if (p.includes("web") || p.includes("blazor") || p.includes("vue") || p.includes("next") || p.includes("html"))
    return "Web";
  if (p.includes("api") || p.includes("microservice") || p.includes("worker") || p.includes("graphql"))
    return "API";
  return "Web";
}

/** Determine if an app has a matching deployable link */
function hasMatchingLink(
  app: { name: string; platform: string },
  links: { label: string; url: string }[]
): string | null {
  const name = app.name.toLowerCase();
  const platform = app.platform.toLowerCase();

  // Direct label match: check if any link label contains the app name or vice versa
  for (const link of links) {
    const label = link.label.toLowerCase();
    if (label.includes(name) || name.includes(label)) return link.url;
  }

  // Web App → find Website/Product link
  if (name.includes("web app") || name.includes("website")) {
    for (const link of links) {
      const label = link.label.toLowerCase();
      if (label === "website" || label === "product" || label === "company website")
        return link.url;
    }
  }

  // Portal → find portal link
  if (name.includes("portal")) {
    for (const link of links) {
      if (link.label.toLowerCase().includes("portal")) return link.url;
    }
  }

  // Android → find android link
  if (name.includes("android") || platform.includes("android")) {
    for (const link of links) {
      if (link.label.toLowerCase().includes("android")) return link.url;
    }
  }

  // iOS → find iOS link
  if (name.includes("ios") || platform.includes("ios")) {
    for (const link of links) {
      if (link.label.toLowerCase().includes("ios")) return link.url;
    }
  }

  // Scheduler / Desktop / Windows
  if (
    name.includes("scheduler") ||
    name.includes("desktop") ||
    name.includes("windows") ||
    platform.includes("windows")
  ) {
    for (const link of links) {
      const label = link.label.toLowerCase();
      if (label.includes("scheduler") || label.includes("desktop") || label.includes("windows"))
        return link.url;
    }
  }

  // Mobile App → find android/ios link
  if (name.includes("mobile")) {
    for (const link of links) {
      const label = link.label.toLowerCase();
      if (label.includes("android") || label.includes("ios") || label.includes("mobile"))
        return link.url;
    }
  }

  return null;
}

interface LinkedApp {
  name: string;
  platform: string;
  projectName: string;
  projectColor: string;
  url: string;
}

interface ServiceGroup {
  projectName: string;
  projectColor: string;
  services: { name: string; platform: string }[];
}

/** Pre-compute linked apps and service groups from projects */
function computeAppsAndServices(projects: Project[]) {
  const linkedApps: LinkedApp[] = [];
  const serviceGroups: ServiceGroup[] = [];
  let totalAppCount = 0;

  for (const project of projects) {
    totalAppCount += project.apps.length;
    const services: { name: string; platform: string }[] = [];

    for (const app of project.apps) {
      const url = hasMatchingLink(app, project.links);
      if (url) {
        linkedApps.push({
          name: app.name,
          platform: app.platform,
          projectName: project.title,
          projectColor: project.brandColor,
          url,
        });
      } else {
        services.push({ name: app.name, platform: app.platform });
      }
    }

    if (services.length > 0) {
      serviceGroups.push({
        projectName: project.title,
        projectColor: project.brandColor,
        services,
      });
    }
  }

  return { linkedApps, serviceGroups, totalAppCount };
}

/* ─── Screenshot Carousel ────────────────────────── */
function ScreenshotCarousel({
  screenshots,
}: {
  screenshots: { src: string; label: string }[];
}) {
  const [current, setCurrent] = useState(0);

  if (screenshots.length === 0) return null;

  return (
    <div className="relative group/carousel">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-indigo-50">
        <Image
          src={screenshots[current].src}
          alt={screenshots[current].label}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <p className="mt-3 text-xs text-gray-400 text-center">
        {screenshots[current].label}
      </p>

      {/* Navigation */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent(
                (c) => (c - 1 + screenshots.length) % screenshots.length
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <HiChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % screenshots.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <HiChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-indigo-600 w-4" : "bg-indigo-200"
                }`}
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
  const { linkedApps, serviceGroups, totalAppCount } = useMemo(
    () => computeAppsAndServices(projects),
    []
  );
  const uniqueCountries = useMemo(
    () => new Set(clients.map((c) => c.location.split(",").pop()?.trim())).size,
    []
  );

  const heroStats = [
    { value: `${totalAppCount}+`, label: "Apps Built" },
    { value: "4", label: "Platforms" },
    { value: `${clients.length}`, label: "Clients" },
    { value: `${uniqueCountries}`, label: "Countries" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* ════════ 1. Hero Section — Dark indigo ════════ */}
        <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-sm font-semibold text-blue-300 uppercase tracking-[0.15em] mb-4">
                Our Work
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                {totalAppCount}+ Apps Built for
                <br />
                Global Clients
              </h1>
              <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-12">
                From HIPAA-compliant healthcare platforms to multi-service
                microservices architectures — we ship production-grade software
                across web, mobile, and desktop.
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-2xl mx-auto border border-white/10">
                {heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-indigo-900/60 backdrop-blur-sm py-5 px-3 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-blue-300/80 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ 2. Apps Grid — Visual App Showcase ════════ */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em] mb-2">
                Application Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Every App We&apos;ve Built
              </h2>
              <p className="text-gray-500 mt-2 max-w-xl">
                {totalAppCount} individual applications across {clients.length}{" "}
                client projects — web, mobile, desktop, and backend services.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {/* Individual app cards (apps WITH links) */}
              {linkedApps.map((app, i) => (
                <motion.div
                  key={`app-${app.projectName}-${app.name}-${i}`}
                  variants={cardVariants}
                  className="bg-white rounded-xl border border-indigo-100/50 hover:border-indigo-200 transition-colors p-4 flex flex-col"
                >
                  {/* App name + external link icon */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug">
                      {app.name}
                    </h3>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors flex-shrink-0"
                    >
                      <HiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Platform + Project badge row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-gray-50 rounded-md px-1.5 py-0.5">
                      <PlatformIcon platform={app.platform} />
                      <PlatformLabel platform={app.platform} />
                    </span>
                    <span
                      className="inline-flex items-center text-[11px] font-medium text-white rounded-md px-1.5 py-0.5 truncate max-w-[120px]"
                      style={{ backgroundColor: app.projectColor }}
                    >
                      {app.projectName}
                    </span>
                  </div>

                  {/* Platform detail */}
                  <p className="text-[11px] text-gray-400/80 mt-auto leading-tight">
                    {app.platform}
                  </p>
                </motion.div>
              ))}

              {/* Grouped service cards (apps WITHOUT links, one per project) */}
              {serviceGroups.map((group, i) => (
                <motion.div
                  key={`services-${group.projectName}-${i}`}
                  variants={cardVariants}
                  className="bg-indigo-50/50 rounded-xl border border-dashed border-indigo-200 p-4 flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <HiServer className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-sm font-bold text-gray-900">
                      Infrastructure &amp; Services
                    </h3>
                  </div>

                  {/* Project badge */}
                  <span
                    className="inline-flex items-center self-start text-[11px] font-medium text-white rounded-md px-1.5 py-0.5 truncate max-w-[160px] mb-2"
                    style={{ backgroundColor: group.projectColor }}
                  >
                    {group.projectName}
                  </span>

                  {/* Services list */}
                  <div className="space-y-1 mt-0.5">
                    {group.services.map((svc, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-1.5 text-[12px] text-gray-700/80"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-300 flex-shrink-0" />
                        <span>
                          <span className="font-medium">{svc.name}</span>
                          <span className="text-gray-400/70">
                            {" "}
                            — {svc.platform}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Count badge */}
                  <div className="mt-2 pt-2 border-t border-indigo-200/50 text-[10px] font-medium text-gray-400">
                    {group.services.length} service{group.services.length !== 1 ? "s" : ""}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════ 3. Project Deep-Dive Sections ════════ */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em] mb-2">
                Case Studies
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Project Details
              </h2>
            </motion.div>

            <div className="space-y-12">
              {projects
                .filter((p) => p.apps.length > 0)
                .map((project, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-xl border border-indigo-100/50 hover:border-indigo-200 transition-colors bg-white overflow-hidden"
                  >
                    {/* Project header bar */}
                    <div className="px-6 sm:px-8 py-4 flex items-center justify-between bg-gradient-to-r from-indigo-700 to-blue-600">
                      <div className="flex items-center gap-3">
                        {project.logo && (
                          <div className="w-9 h-9 rounded-lg bg-white/20 p-1.5 flex items-center justify-center">
                            <Image
                              src={project.logo}
                              alt={project.title}
                              width={28}
                              height={28}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-white/60 text-xs">
                            {project.client} · {project.location}
                          </p>
                        </div>
                      </div>
                      {project.featured && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Body: screenshot + info */}
                    <div className="grid lg:grid-cols-2">
                      {/* Screenshot carousel */}
                      <div className="p-6 sm:p-8 bg-gradient-to-b from-indigo-50/80 to-white border-b lg:border-b-0 lg:border-r border-indigo-100">
                        <ScreenshotCarousel
                          screenshots={project.screenshots}
                        />
                      </div>

                      {/* Info */}
                      <div className="p-6 sm:p-8 flex flex-col gap-5">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Business Outcomes */}
                        {project.outcomes &&
                          project.outcomes.length > 0 && (
                            <div>
                              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                Business Impact
                              </h4>
                              <div className="grid grid-cols-3 gap-3">
                                {project.outcomes.map((o, i) => (
                                  <div
                                    key={i}
                                    className="text-center p-3 rounded-lg bg-indigo-50 border border-indigo-100"
                                  >
                                    <div className="text-lg font-bold text-gray-700">
                                      {o.metric}
                                    </div>
                                    <div className="text-[10px] text-gray-500 leading-tight">
                                      {o.label}
                                    </div>
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
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors text-gray-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100"
                            >
                              <link.icon className="w-3.5 h-3.5" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="px-6 sm:px-8 py-5 border-t border-indigo-100">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Highlights
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                        {project.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 py-1"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-indigo-500" />
                            <span className="text-sm text-gray-600">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom bar: Services + Tech */}
                    <div className="px-6 sm:px-8 py-5 bg-gradient-to-b from-indigo-50/50 to-white border-t border-indigo-100">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Services
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.services.map((s, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 text-[11px] font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-indigo-200 lg:pl-6">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Tech Stack
                          </h4>
                          {project.techLabels ? (
                            <div className="flex flex-wrap gap-1.5">
                              {project.techLabels.map((t, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 text-[11px] font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-2.5">
                              {project.technologies.map((Tech, i) => (
                                <Tech
                                  key={i}
                                  className="w-5 h-5 text-gray-400"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>

        {/* ════════ 4. Clients Section ════════ */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-white border-t border-indigo-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em] mb-2">
                Partnerships
              </p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Our Clients
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-xl border border-indigo-100/50 p-5 text-center"
                >
                  {client.logo ? (
                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white border border-indigo-100/50 p-2 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-3xl mb-3">{client.flag}</div>
                  )}
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    {client.contact}
                  </p>
                  <p className="text-xs text-gray-400">
                    {client.flag} {client.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 5. CTA Section ════════ */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Build Something Great?
              </h2>
              <p className="text-gray-500 mb-8">
                Let&apos;s discuss how we can help bring your project to life.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all"
              >
                Start a Conversation
                <HiExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
