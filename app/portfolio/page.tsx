"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, type ReactNode } from "react";
import {
  HiExternalLink,
  HiGlobeAlt,
  HiChevronLeft,
  HiChevronRight,
  HiDesktopComputer,
  HiServer,
  HiSparkles,
  HiCalendar,
  HiHeart,
  HiLockClosed,
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
import { PhoneMockup } from "../components/phone-mockup";
import { BrowserMockup } from "../components/browser-mockup";
import {
  CountUp,
  Magnetic,
  Reveal,
  SplitText,
  Stagger,
  StaggerItem,
} from "@/app/components/motion";

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
  /** Shown instead of screenshots for mobile apps without bundled screenshots */
  mockup?: { subtitle: string; features: { Icon: IconType; label: string }[] };
  /** Shown instead of screenshots for websites without a bundled screenshot */
  site?: { url: string; tagline: string; monogram: string };
  /** Tile behind the logo in the case-study header (default: white) */
  logoTile?: string;
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
        label: "Provider Scheduler (Windows)",
        url: "ms-windows-store://pdp/?ProductId=9PFDTW1MMHZ6&cid=PCCongratsBnr",
        icon: HiExternalLink,
      },
    ],
    highlights: [
      "AI-powered healthcare provider search & matching (DoctorFind.ai)",
      "HIPAA-compliant patient portal with end-to-end encrypted messaging",
      "Real-time appointment scheduling with calendar management",
      "Integrated payment processing via Stripe",
      "Cross-platform SearchMed Patient Portal app (.NET MAUI) — live on iOS and Android",
      "Windows desktop Provider Scheduler app (.NET MAUI)",
      "Blazor-based provider portal with profile, scheduling & patient management",
      "Azure cloud infrastructure — App Services, Service Bus, Blob Storage, Notification Hubs, SignalR",
      "Custom OpenIdDict-based authentication server (auth.searchmed.net)",
      "MSSQL primary database with SQLite for offline-capable mobile storage",
    ],
    apps: [
      { name: "SearchMed Web App", platform: "Web" },
      { name: "Provider Portal", platform: "Web (Blazor)" },
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
    title: "SearchMed Patient Portal",
    client: "SearchMed Inc.",
    location: "Fort Lauderdale, Florida",
    description:
      "The patient-facing mobile app of the SearchMed platform, live on the App Store and Google Play. Patients chat with an AI health assistant that helps them understand symptoms and points them to the right kind of provider, then book appointments, track medications, blood pressure and weight, and message their providers over end-to-end encrypted channels. Built once with .NET MAUI for iOS and Android, with SQLite for offline-capable storage and Azure services behind it.",
    services: [
      "Mobile App Development",
      "AI Integration",
      "Security & Compliance",
      "App Store Release",
    ],
    technologies: [SiDotnet, TbBrandCSharp, TbBrandAzure, SiSqlite],
    techLabels: [
      ".NET MAUI",
      "C#",
      "AI Chat Assistant",
      "Azure App Services",
      "Azure Notification Hubs",
      "SignalR",
      "SQLite (offline)",
      "OpenIdDict Auth",
      "E2E Encryption",
      "Stripe",
    ],
    links: [
      { label: "App Store (iOS)", url: "https://apps.apple.com/us/app/searchmed-patient-portal/id6745996128", icon: FaApple },
      { label: "Google Play (Android)", url: "https://play.google.com/store/apps/details?id=com.searchmed.portal", icon: FaAndroid },
    ],
    highlights: [
      "AI chat assistant — helps patients understand symptoms, recommends providers based on conditions, and offers basic first-aid guidance",
      "HIPAA-compliant design with end-to-end encrypted patient–provider messaging",
      "Appointment booking synced with the provider scheduling system",
      "Medication tracking plus blood pressure and weight monitoring",
      "Secure private health reports",
      "One .NET MAUI codebase shipped to both iOS and Android",
      "Offline-capable local storage with SQLite",
      "Push notifications via Azure Notification Hubs",
    ],
    apps: [
      { name: "Patient Portal App", platform: "iOS (.NET MAUI)" },
      { name: "Patient Portal App", platform: "Android (.NET MAUI)" },
    ],
    logo: "/img/clients/searchmed.png",
    brandColor: "#0e7490",
    screenshots: [],
    mockup: {
      subtitle: "iOS · Android",
      features: [
        { Icon: HiSparkles, label: "AI health assistant" },
        { Icon: HiCalendar, label: "Book appointments" },
        { Icon: HiHeart, label: "Medications & vitals" },
        { Icon: HiLockClosed, label: "Encrypted messaging" },
      ],
    },
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
        url: "https://play.google.com/store/apps/details?id=co.leanlaw.mobile",
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
      { name: "LeanLaw Mobile App", platform: "Android (React Native)" },
      { name: "LeanLaw Mobile App", platform: "iOS (React Native)" },
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
    // White-on-transparent logo needs a dark tile
    logoTile: "bg-gray-900",
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
  {
    title: "Tarangini Foundation Website",
    client: "Tarangini Foundation",
    location: "Kathmandu, Nepal",
    description:
      "Website for Tarangini Foundation (Tarangini Mahila Adhikar Prashikshen Kendra), a Kathmandu-based women's rights organization that documents feminist movements and supports the self-care of women human rights defenders. The site presents the foundation's mission and work to supporters, partners, and the public.",
    services: ["Web Development", "UI/UX Design"],
    technologies: [],
    links: [{ label: "Website", url: "https://tarangini.org.np/", icon: HiGlobeAlt }],
    highlights: [
      "Public website for a Kathmandu-based women's rights organization",
      "Presents the foundation's mission, programs, and work",
    ],
    apps: [{ name: "Tarangini Foundation Website", platform: "Web" }],
    logo: "",
    brandColor: "#be185d",
    screenshots: [],
    site: {
      url: "tarangini.org.np",
      tagline: "Women's rights and feminist movement documentation, Kathmandu",
      monogram: "T",
    },
    featured: false,
  },
];

const clients = [
  {
    name: "SearchMed Inc.", contact: "Rafael Morel, CTO", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/searchmed.png",
    products: [
      { name: "SearchMed Platform", url: "https://searchmed.com" },
      { name: "SearchMed Patient Portal (iOS)", url: "https://apps.apple.com/us/app/searchmed-patient-portal/id6745996128" },
    ],
  },
  {
    name: "LeanLaw", contact: "Fred Willerup, CTO", location: "Boise, Idaho", flag: "🇺🇸", logo: "/img/clients/leanlaw.png",
    products: [{ name: "LeanLaw Billing Platform", url: "https://leanlaw.co" }],
  },
  {
    name: "AeroTechLabs", contact: "Scott Hofman, CEO", location: "Fort Lauderdale, Florida", flag: "🇺🇸", logo: "/img/clients/aerotechlabs.png",
    // White-on-transparent logo needs a dark tile
    logoTile: "bg-gray-900 border-gray-900",
    products: [{ name: "Custom Filler", url: "https://customfiller.com" }],
  },
  {
    name: "Vision Sign Advertising", contact: "Basudev Adhikari, CEO", location: "Lalitpur, Nepal", flag: "🇳🇵", logo: "/img/clients/visionsign.png",
    products: [{ name: "Company website", url: "https://visionsignadvertising.com.np" }],
  },
  {
    name: "Tarangini Foundation", contact: "", location: "Kathmandu, Nepal", flag: "🇳🇵", logo: "",
    monogram: "T",
    products: [{ name: "Foundation website", url: "https://tarangini.org.np/" }],
  },
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

  // 1. Android app → find android link (platform match is most specific)
  if (platform.includes("android")) {
    for (const link of links) {
      if (link.label.toLowerCase().includes("android")) return link.url;
    }
  }

  // 2. iOS app → find iOS link
  if (platform.includes("ios")) {
    for (const link of links) {
      if (link.label.toLowerCase().includes("ios")) return link.url;
    }
  }

  // 3. Shared significant words (for remaining apps)
  for (const link of links) {
    const label = link.label.toLowerCase();
    const nameWords = new Set(name.split(/\s+/));
    const labelWords = new Set(label.split(/\s+/));
    const sharedWords = [...nameWords].filter((w) => w.length > 2 && labelWords.has(w));
    if (sharedWords.length >= 2) return link.url;
  }

  // 4. Web App → find Website/Product link
  if (name.includes("web app") || name.includes("website")) {
    for (const link of links) {
      const label = link.label.toLowerCase();
      if (label === "website" || label === "product" || label === "company website")
        return link.url;
    }
  }

  // 5. Portal → patient portals skip provider links
  if (name.includes("portal")) {
    const isPatient = name.includes("patient");
    for (const link of links) {
      const label = link.label.toLowerCase();
      if (label.includes("portal")) {
        if (isPatient && label.includes("provider")) continue;
        return link.url;
      }
    }
  }

  // 6. Scheduler / Desktop / Windows
  if (name.includes("scheduler") || name.includes("desktop") || name.includes("windows") || platform.includes("windows")) {
    for (const link of links) {
      const label = link.label.toLowerCase();
      if (label.includes("scheduler") || label.includes("desktop") || label.includes("windows"))
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
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-ink-800 ring-1 ring-white/10 shadow-[0_20px_60px_-25px_rgba(34,211,238,0.35)]">
        <Image
          src={screenshots[current].src}
          alt={screenshots[current].label}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Label */}
      <p className="mt-3 text-xs text-white/55 text-center">
        {screenshots[current].label}
      </p>

      {/* Navigation */}
      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() =>
              setCurrent(
                (c) => (c - 1 + screenshots.length) % screenshots.length
              )
            }
            className="absolute left-2 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 bg-ink-900/80 backdrop-blur border border-white/15 hover:bg-ink-800 text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 transition-opacity"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => setCurrent((c) => (c + 1) % screenshots.length)}
            className="absolute right-2 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 bg-ink-900/80 backdrop-blur border border-white/15 hover:bg-ink-800 text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 transition-opacity"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {screenshots.map((s, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Show screenshot ${i + 1}: ${s.label}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  i === current ? "bg-cyan-300 w-4" : "bg-white/20 w-1.5 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/** Small uppercase label used inside case-study cards. */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.18em] mb-3">
      {children}
    </h4>
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ojastech.io" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://ojastech.io/portfolio" },
    ],
  };

  const heroStats = [
    { value: `${totalAppCount}+`, label: "Apps Built" },
    { value: "4", label: "Platforms" },
    { value: `${clients.length}`, label: "Clients" },
    { value: `${uniqueCountries}`, label: "Countries" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-ink-950 text-white overflow-x-clip">
        <Navbar />

        {/* ════════ 1. Hero ════════ */}
        <section className="relative overflow-hidden bg-ink-950">
          <div className="orb orb-a w-[420px] h-[420px] md:w-[520px] md:h-[520px] -top-40 -left-32 bg-cyan-500/25" />
          <div className="orb orb-b w-[440px] h-[440px] md:w-[560px] md:h-[560px] -top-20 right-[-15%] bg-violet-600/25" />
          <div
            className="orb orb-a w-[360px] h-[360px] bottom-[-30%] left-[30%] bg-sky-500/10"
            style={{ animationDelay: "-7s" }}
          />
          <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-28 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              className="dark-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(103,232,249,0.7)]" />
              Our Work
            </motion.span>

            <SplitText
              as="h1"
              inView={false}
              delay={0.1}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
              segments={[
                { text: `${totalAppCount}+ Apps Built for`, br: true },
                { text: "Global Clients", className: "text-gradient-animated" },
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              From HIPAA-compliant healthcare platforms to multi-service
              microservices architectures — we ship production-grade software
              across web, mobile, and desktop.
            </motion.p>

            {/* Stat Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="glass ring-gradient grid grid-cols-2 sm:grid-cols-4 max-w-2xl mx-auto overflow-hidden [&>*]:border-white/[0.08]"
            >
              {heroStats.map((stat, i) => (
                <div
                  key={i}
                  className={`py-6 px-3 text-center ${i % 2 === 1 ? "border-l" : ""} ${
                    i >= 2 ? "border-t sm:border-t-0" : ""
                  } ${i === 2 ? "sm:border-l" : ""}`}
                >
                  <CountUp
                    value={stat.value}
                    className="block font-display text-3xl sm:text-4xl font-semibold text-white"
                  />
                  <div className="text-xs text-white/55 mt-1.5 uppercase tracking-[0.14em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════ 2. Apps Grid — Visual App Showcase ════════ */}
        <section className="dark-section overflow-hidden !pt-12 md:!pt-16">
          <div className="absolute inset-0 bg-aurora opacity-30 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <div className="dark-badge">Application Portfolio</div>
              <SplitText
                className="dark-title"
                segments={[
                  { text: "Every App" },
                  { text: "We've Built", className: "text-gradient-ai" },
                ]}
              />
              <p className="dark-sub mt-4">
                {totalAppCount} individual applications across {clients.length}{" "}
                client projects — web, mobile, desktop, and backend services.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Individual app cards (apps WITH links) */}
              {linkedApps.map((app, i) => (
                <StaggerItem key={`app-${app.projectName}-${app.name}-${i}`} className="h-full">
                  <div className="group glass-hover h-full p-5 flex flex-col">
                    {/* App name + external link icon */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-[15px] font-semibold text-white mb-2 leading-snug">
                        {app.name}
                      </h3>
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${app.name} (${app.platform})`}
                        className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-white/10 text-white/50 hover:text-cyan-200 hover:border-cyan-300/40 hover:bg-white/[0.06] transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        <HiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Platform + Project badge row */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3 min-w-0">
                      <span className="chip-dark">
                        <PlatformIcon platform={app.platform} />
                        <PlatformLabel platform={app.platform} />
                      </span>
                      <span className="chip-dark max-w-[150px] min-w-0">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 ring-1 ring-white/30"
                          style={{ backgroundColor: app.projectColor }}
                        />
                        <span className="truncate">{app.projectName}</span>
                      </span>
                    </div>

                    {/* Platform detail */}
                    <p className="text-[11px] font-mono text-white/50 mt-auto leading-tight">
                      {app.platform}
                    </p>
                  </div>
                </StaggerItem>
              ))}

              {/* Grouped service cards (apps WITHOUT links, one per project) */}
              {serviceGroups.map((group, i) => (
                <StaggerItem
                  key={`services-${group.projectName}-${i}`}
                  className={`h-full ${
                    group.projectName === "LeanLaw Billing Platform" ? "lg:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <div className="h-full rounded-2xl border border-dashed border-white/15 bg-gradient-to-br from-cyan-500/[0.04] to-violet-500/[0.06] p-5 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-6 h-6 rounded-md bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center">
                        <HiServer className="w-3.5 h-3.5 text-cyan-300" />
                      </span>
                      <h3 className="font-display text-[15px] font-semibold text-white">
                        Infrastructure &amp; Services
                      </h3>
                    </div>

                    {/* Project badge */}
                    <span className="chip-dark self-start max-w-[200px] mb-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 ring-1 ring-white/30"
                        style={{ backgroundColor: group.projectColor }}
                      />
                      <span className="truncate">{group.projectName}</span>
                    </span>

                    {/* Services list */}
                    <div
                      className={`space-y-1.5 ${
                        group.projectName === "LeanLaw Billing Platform"
                          ? "sm:columns-2 sm:gap-6 sm:space-y-0 [&>*]:sm:mb-1.5 [&>*]:break-inside-avoid"
                          : ""
                      }`}
                    >
                      {group.services.map((svc, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 text-[12px] text-white/70"
                        >
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-cyan-300 flex-shrink-0" />
                          <span>
                            <span className="font-medium text-white/85">{svc.name}</span>
                            <span className="text-white/50">
                              {" "}
                              — {svc.platform}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Count badge */}
                    <div className="mt-auto pt-3">
                      <div className="pt-2.5 border-t border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-white/50">
                        {group.services.length} service{group.services.length !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ════════ 3. Project Deep-Dive Sections ════════ */}
        <section className="dark-section border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-grid-fade opacity-50 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <div className="dark-badge">Case Studies</div>
              <SplitText
                className="dark-title"
                segments={[
                  { text: "Project" },
                  { text: "Details", className: "text-gradient-ai" },
                ]}
              />
            </Reveal>

            <div className="space-y-10 md:space-y-14">
              {projects
                .filter((p) => p.apps.length > 0)
                .map((project, index) => (
                  <Reveal key={index}>
                    <article className="glass overflow-hidden transition-colors duration-500 hover:border-white/15">
                      {/* Project header bar */}
                      <div className="px-5 sm:px-8 py-4 flex items-center justify-between gap-3 bg-gradient-to-r from-cyan-500/10 via-sky-500/[0.06] to-violet-500/10 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3 min-w-0">
                          {project.logo && (
                            <div className={`w-10 h-10 rounded-xl ${project.logoTile ?? "bg-paper"} ring-1 ring-black/5 p-1.5 flex items-center justify-center flex-shrink-0`}>
                              <Image
                                src={project.logo}
                                alt={project.title}
                                width={28}
                                height={28}
                                className="object-contain"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-white/50 text-xs mt-0.5">
                              {project.client} · {project.location}
                            </p>
                          </div>
                        </div>
                        {project.featured && (
                          <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-200 border border-cyan-300/25 bg-cyan-400/10 rounded-full">
                            <HiSparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Body: screenshot + info */}
                      <div className="grid lg:grid-cols-2">
                        {/* Screenshot carousel */}
                        <div className="relative p-5 sm:p-8 bg-gradient-to-b from-white/[0.03] to-transparent border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                          <ScreenshotCarousel
                            screenshots={project.screenshots}
                          />
                          {project.screenshots.length === 0 && project.site && (
                            <div className="py-6">
                              <BrowserMockup
                                url={project.site.url}
                                name={project.client}
                                tagline={project.site.tagline}
                                monogram={project.site.monogram}
                              />
                            </div>
                          )}
                          {project.screenshots.length === 0 && project.mockup && (
                            <div className="py-6">
                              <PhoneMockup
                                icon={project.logo}
                                name={project.title}
                                subtitle={project.mockup.subtitle}
                                features={project.mockup.features}
                                dark
                              />
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="p-5 sm:p-8 flex flex-col gap-6">
                          <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Business Outcomes */}
                          {project.outcomes &&
                            project.outcomes.length > 0 && (
                              <div>
                                <Eyebrow>Business Impact</Eyebrow>
                                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                  {project.outcomes.map((o, i) => (
                                    <div
                                      key={i}
                                      className="text-center px-2 py-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                                    >
                                      <CountUp
                                        value={o.metric}
                                        className="block font-display text-lg sm:text-2xl font-semibold text-gradient-ai"
                                      />
                                      <div className="text-[10px] sm:text-[11px] text-white/55 leading-tight mt-1">
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
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full transition-colors text-white/80 bg-white/[0.04] border border-white/15 hover:bg-white/[0.08] hover:border-cyan-300/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                              >
                                <link.icon className="w-3.5 h-3.5 text-cyan-300" />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="px-5 sm:px-8 py-6 border-t border-white/[0.06]">
                        <Eyebrow>Highlights</Eyebrow>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                          {project.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 py-1"
                            >
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-cyan-300 shadow-[0_0_8px_1px_rgba(103,232,249,0.6)]" />
                              <span className="text-sm text-white/65">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom bar: Services + Tech */}
                      <div className="px-5 sm:px-8 py-6 bg-white/[0.02] border-t border-white/[0.06]">
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <Eyebrow>Services</Eyebrow>
                            <div className="flex flex-wrap gap-1.5">
                              {project.services.map((s, i) => (
                                <span key={i} className="chip-dark">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                          {(project.techLabels || project.technologies.length > 0) && (
                          <div className="lg:border-l lg:border-white/[0.08] lg:pl-6">
                            <Eyebrow>Tech Stack</Eyebrow>
                            {project.techLabels ? (
                              <div className="flex flex-wrap gap-1.5">
                                {project.techLabels.map((t, i) => (
                                  <span
                                    key={i}
                                    className="chip-dark font-mono !text-cyan-100/80"
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
                                    className="w-5 h-5 text-white/50"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        {/* ════════ 4. Clients Section ════════ */}
        <section className="dark-section overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-aurora opacity-30 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <div className="dark-badge">Partnerships</div>
              <SplitText
                className="dark-title"
                segments={[
                  { text: "Our" },
                  { text: "Clients", className: "text-gradient-ai" },
                ]}
              />
            </Reveal>

            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {clients.map((client, index) => (
                <StaggerItem key={index} className="h-full">
                  <div className="glass-hover h-full p-6 text-center flex flex-col">
                    {client.logo ? (
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-xl border p-2.5 flex items-center justify-center ring-1 ring-white/10 shadow-[0_10px_30px_-12px_rgba(103,232,249,0.35)] ${
                          "logoTile" in client ? client.logoTile : "bg-paper border-black/5"
                        }`}
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={44}
                          height={44}
                          className="object-contain"
                        />
                      </div>
                    ) : "monogram" in client ? (
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-rose-500 to-violet-600 text-paper font-display text-2xl font-semibold flex items-center justify-center shadow-lg">
                        {client.monogram}
                      </div>
                    ) : (
                      <div className="text-3xl mb-3">{client.flag}</div>
                    )}
                    <h3 className="font-display text-base font-semibold text-white mb-1">
                      {client.name}
                    </h3>
                    {client.contact && (
                      <p className="text-xs text-white/55 mb-1">
                        {client.contact}
                      </p>
                    )}
                    <p className="text-xs text-white/50">
                      {client.flag} {client.location}
                    </p>
                    <div className="mt-auto pt-4">
                      <ul className="border-t border-white/[0.08] pt-3 space-y-1.5">
                        {client.products.map((product) => (
                          <li key={product.url}>
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-cyan-200 hover:text-white transition-colors"
                            >
                              {product.url.includes("apps.apple.com") && <FaApple className="w-3 h-3" />}
                              {product.name}
                              <HiExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ════════ 5. CTA Section ════════ */}
        <section className="relative bg-ink-950 pb-24 md:pb-32 pt-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative glass border-beam !rounded-3xl px-6 py-14 md:px-12 md:py-20 text-center">
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" aria-hidden>
                  <div className="orb orb-a w-[320px] h-[320px] -top-32 -left-20 bg-cyan-500/20" />
                  <div className="orb orb-b w-[320px] h-[320px] -bottom-32 -right-20 bg-violet-600/20" />
                  <div className="absolute inset-0 bg-grid-fade opacity-60" />
                </div>
                <div className="relative">
                  <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                    Ready to Build{" "}
                    <span className="text-gradient-animated">Something Great?</span>
                  </h2>
                  <p className="text-white/55 md:text-lg mb-10">
                    Let&apos;s discuss how we can help bring your project to life.
                  </p>
                  <Magnetic>
                    <Link href="/#contact" className="group btn-glow">
                      Start a Conversation
                      <HiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
