# Website Refocus — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the Ojas Technologies website from a generalist digital agency to a Microsoft-ecosystem specialist (.NET, Blazor, MAUI, React, Azure) with IT outstaffing as the core model.

**Architecture:** 5 pages with shared Navbar/Footer. Homepage gets 3 new section components (Pillars, TechBar, PortfolioPreview) replacing Features/Services. Three new standalone pages for SEO. Constants drive all shared data.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3, Framer Motion 11, react-icons

---

### Task 1: Update constants (NAV_ITEMS + SERVICES_LIST)

**Files:**
- Modify: `app/constants.ts`

- [ ] **Step 1: Replace NAV_ITEMS and SERVICES_LIST**

Replace lines 62-79:

```typescript
// ─── Navigation Items ──────────────────────────────────────────────
export const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "Hire Developers", href: "/hire-developers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

// ─── Services List ─────────────────────────────────────────────────
export const SERVICES_LIST = [
    "Web Development",
    "Mobile Application",
    "Desktop Application",
    "Cloud & DevOps",
    "IT Outstaffing",
];
```

**Note:** Removed Graphics Design, Digital Marketing, SEO Optimization. Added Cloud & DevOps and IT Outstaffing.

- [ ] **Step 2: Verify no other files import old nav names**

```bash
grep -r "Features\|/#features\|/#services\|/#about\|/#contact" app/components/ app/page.tsx --include="*.tsx" --include="*.ts"
```

Manually note any files that still reference old anchor links. We'll fix them in subsequent tasks.

---

### Task 2: Update Navbar CTA link

**Files:**
- Modify: `app/components/navbar.tsx:93`

- [ ] **Step 1: Change the CTA button link from /#contact to /contact**

```typescript
// Line 93: change
href="/#contact"
// to
href="/contact"
```

The rest of the navbar reads from `NAV_ITEMS` in constants, so it auto-updates. Social icons and mobile menu are unchanged.

---

### Task 3: Refine Hero CTAs

**Files:**
- Modify: `app/components/mainLayout/hero.tsx:93-106`

- [ ] **Step 1: Update primary CTA to /hire-developers**

Change line 94: `href="#contact"` → `href="/hire-developers"`
Change line 97: `"Start Project"` → `"Hire Developers"`

- [ ] **Step 2: Update secondary CTA to /portfolio**

Change line 101: `href="#services"` → `href="/portfolio"`
Change line 104: `"Explore Services"` → `"See Our Work"`

- [ ] **Step 3: Update the hero badge text (line 41)**

Change `"IT Outstaffing & Dedicated Teams"` → `"Microsoft Ecosystem Specialists"`

- [ ] **Step 4: Clean up unused imports**

Remove `TbBrandGithub` from line 5 if unused.

---

### Task 4: Create ThreePillars component

**Files:**
- Create: `app/components/mainLayout/pillars.tsx`

- [ ] **Step 1: Write the component**

```typescript
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiUserGroup, HiCode, HiCloud } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

const pillars = [
  {
    icon: HiUserGroup,
    title: "IT Outstaffing & Dedicated Teams",
    description:
      "Embed .NET, Blazor, MAUI, and React engineers as your remote team. AI-adept workflows deliver consistent quality faster than traditional outsourcing.",
    href: "/hire-developers",
    cta: "Hire Developers",
  },
  {
    icon: HiCode,
    title: "Custom SaaS & Platform Development",
    description:
      "Full-stack product engineering for healthcare, legal-tech, and enterprise. HIPAA-compliant, Azure-native, with AI-powered features where it matters.",
    href: "/portfolio",
    cta: "See Our Work",
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps",
    description:
      "Azure App Services, AKS, Docker, CI/CD pipelines. Hybrid cloud experience across Azure and Digital Ocean with 99.9% uptime track record.",
    href: "/contact",
    cta: "Start a Project",
  },
];

export function Pillars() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.10),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Microsoft-ecosystem engineering, delivered from Kathmandu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 w-fit mb-6">
                <pillar.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
              >
                {pillar.cta}
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 5: Create TechBar component

**Files:**
- Create: `app/components/mainLayout/techbar.tsx`

- [ ] **Step 1: Write the component**

```typescript
"use client";
import { motion } from "framer-motion";
import { SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker, SiKubernetes } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const techStack = [
  { name: ".NET Core", Icon: SiDotnet },
  { name: "Blazor", Icon: SiBlazor },
  { name: ".NET MAUI", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Azure", Icon: TbBrandAzure },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "TypeScript", Icon: SiTypescript },
];

export function TechBar() {
  return (
    <section className="relative py-16 overflow-hidden bg-gray-50/50 border-y border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-10"
        >
          Technology Expertise
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <tech.Icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 6: Create PortfolioPreview component

**Files:**
- Create: `app/components/mainLayout/portfolio-preview.tsx`

- [ ] **Step 1: Write the component**

```typescript
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";

const featuredProjects = [
  {
    title: "SearchMed",
    client: "SearchMed Inc.",
    location: "Fort Lauderdale, Florida",
    description:
      "HIPAA-compliant healthcare platform with AI-powered provider matching, built with Blazor, .NET MAUI, and Azure. AI chat assistant diagnoses symptoms and recommends providers.",
    logo: "/img/clients/searchmed.png",
    brandColor: "#1a4f7a",
    tags: ["Blazor", ".NET MAUI", "Azure", "AI/ML"],
    link: "/portfolio#searchmed",
  },
  {
    title: "LeanLaw Billing Platform",
    client: "LeanLaw",
    location: "Boise, Idaho",
    description:
      "Cloud-based legal billing microservices platform processing $2B+ annually. React Native mobile apps, Kubernetes on Azure + Digital Ocean hybrid deployment.",
    logo: "/img/clients/leanlaw.png",
    brandColor: "#1e3a5f",
    tags: [".NET Core", "React", "Kubernetes", "Microservices"],
    link: "/portfolio#leanlaw",
  },
];

export function PortfolioPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.10),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complex platforms we&apos;ve built and continue to support
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="px-6 py-4 flex items-center gap-4"
                style={{ backgroundColor: project.brandColor }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-white/60 text-xs">
                    {project.client} &middot; {project.location}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                >
                  View Case Study
                  <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
          >
            View all projects
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 7: Rewrite homepage (app/page.tsx)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the entire file**

```typescript
import { Navbar } from "./components/navbar";
import { Hero } from "./components/mainLayout/hero";
import { Pillars } from "./components/mainLayout/pillars";
import { TechBar } from "./components/mainLayout/techbar";
import { PortfolioPreview } from "./components/mainLayout/portfolio-preview";
import { Testimonials } from "./components/mainLayout/testimonials";
import { Contact } from "./components/mainLayout/contact";
import { Footer } from "./components/mainLayout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Pillars />
      <TechBar />
      <PortfolioPreview />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
```

**Note:** About, Features, and Services sections removed. Pillars, TechBar, and PortfolioPreview added.

---

### Task 8: Create /about page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Write the page**

```typescript
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { AboutContent } from "./AboutContent";

export const metadata = {
  title: "About Us",
  description:
    "Ojas Technologies is a Microsoft-ecosystem software engineering company based in Kathmandu, Nepal. .NET, Blazor, MAUI, React, and Azure specialists since 2020.",
  keywords: [
    "software company Kathmandu",
    ".NET development Nepal",
    "Microsoft technology partner",
    "IT outstaffing company",
    "Blazor developers",
  ],
  openGraph: {
    title: "About — Ojas Technologies",
    description:
      "Microsoft-ecosystem specialists in Kathmandu, Nepal. .NET, Blazor, MAUI, and Azure engineering since 2020.",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Create the content component**

Create `app/about/AboutContent.tsx`:

```typescript
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCode, HiUserGroup, HiLightningBolt } from "react-icons/hi";
import { COMPANY_STATS } from "@/app/constants";

export function AboutContent() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Microsoft Ecosystem Specialists in Kathmandu
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Founded in 2020, we&apos;ve delivered 150+ projects across 10+ countries — specializing in .NET, Blazor, MAUI, React, and Azure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-1">
              <Image
                src="/img/full logo.jpeg"
                alt="Ojas Technologies Kathmandu"
                width={600}
                height={600}
                className="rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Ojas Technologies (Pvt) Ltd started in 2020 in Kathmandu, Nepal with a simple idea:
                world-class Microsoft-ecosystem engineering doesn&apos;t require a Silicon Valley address.
                We built a team of .NET, Blazor, MAUI, and React engineers who deliver enterprise-grade
                software for startups, agencies, and enterprises worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Projects", value: COMPANY_STATS.projectsDelivered },
                { label: "Clients", value: COMPANY_STATS.clients },
                { label: "Experience", value: COMPANY_STATS.yearsExperience },
                { label: "Team Size", value: COMPANY_STATS.teamSize },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: HiCode,
                  title: "Microsoft Ecosystem DNA",
                  desc: ".NET Core, Blazor, MAUI, C#, Azure — these aren&apos;t just tools we use, they&apos;re what we specialize in. Every engineer on our team is deep in the Microsoft technology stack.",
                },
                {
                  icon: HiLightningBolt,
                  title: "AI-Adept Workflow",
                  desc: "Every developer at Ojas leverages AI agents for code generation, review, and testing — ensuring consistent quality, coding standards, and faster delivery without cutting corners.",
                },
                {
                  icon: HiUserGroup,
                  title: "Nepal Advantage",
                  desc: "Operating from Kathmandu gives our clients significant cost efficiency while maintaining Western-quality engineering. Timezone overlap with both EST and PST means real-time collaboration.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 border border-blue-100">
                  <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hire-developers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-blue-500/30 group"
            >
              Hire Developers
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 9: Create /contact page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Write the page — reuses existing Contact component**

```typescript
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { Contact } from "../components/mainLayout/contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ojas Technologies. Start your project, hire developers, or discuss your requirements. Based in Kathmandu, Nepal — serving clients worldwide.",
  keywords: [
    "contact Ojas Technologies",
    "hire developers Nepal",
    "software development inquiry",
    "IT outstaffing contact",
  ],
  openGraph: {
    title: "Contact — Ojas Technologies",
    description:
      "Start a conversation with Ojas Technologies. We respond within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

---

### Task 10: Create /hire-developers page

**Files:**
- Create: `app/hire-developers/page.tsx`
- Create: `app/hire-developers/HireContent.tsx`

- [ ] **Step 1: Write the page shell**

```typescript
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { HireContent } from "./HireContent";

export const metadata = {
  title: "Hire Developers",
  description:
    "Hire dedicated .NET, Blazor, MAUI, and React developers from Nepal. AI-adept engineering teams that integrate with your workflow. Transparent pricing, timezone-aligned.",
  keywords: [
    "hire .NET developers",
    "hire Blazor developers",
    "dedicated development team Nepal",
    "IT staff augmentation",
    ".NET MAUI developers",
    "React developers Nepal",
    "offshore software development team",
  ],
  openGraph: {
    title: "Hire Developers — Ojas Technologies",
    description:
      "Dedicated Microsoft-ecosystem engineering teams from Kathmandu, Nepal. .NET, Blazor, MAUI, React, Azure specialists.",
  },
};

export default function HirePage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <HireContent />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Write HireContent.tsx**

```typescript
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker, SiKubernetes } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const techExpertise = [
  { name: ".NET Core / C#", level: "Primary", Icon: SiDotnet },
  { name: "Blazor", level: "Specialized", Icon: SiBlazor },
  { name: ".NET MAUI", level: "Specialized", Icon: SiTypescript },
  { name: "React / Next.js", level: "Primary", Icon: SiReact },
  { name: "Azure Cloud", level: "Primary", Icon: TbBrandAzure },
  { name: "Docker & K8s", level: "Strong", Icon: SiDocker },
  { name: "TypeScript", level: "Primary", Icon: SiTypescript },
  { name: "MSSQL / Azure SQL", level: "Strong", Icon: SiDotnet },
];

const processSteps = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Tell us what you need — technology stack, team size, project scope, timeline. We'll propose the right team composition.",
  },
  {
    step: "02",
    title: "Team Matching",
    desc: "We handpick engineers from our team whose expertise matches your stack. You interview them before commitment.",
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "Your dedicated team integrates into your workflow — Slack, Jira, GitHub, daily standups. Same tools, same process.",
  },
  {
    step: "04",
    title: "Ongoing Delivery",
    desc: "Two-week sprints, AI-assisted code reviews, transparent progress. Scale the team up or down as your needs evolve.",
  },
];

const teamExamples = [
  {
    title: "SaaS Development Team",
    members: "2x .NET Backend + 2x React Frontend + 1x Azure DevOps",
    bestFor: "Building or scaling a SaaS platform",
  },
  {
    title: "Blazor Full-Stack Team",
    members: "2x Blazor/.NET + 1x MAUI Mobile + 1x Azure Cloud",
    bestFor: "Microsoft-ecosystem web + mobile products",
  },
  {
    title: "API & Microservices Team",
    members: "3x .NET Core + 1x Docker/K8s + 1x QA Automation",
    bestFor: "Backend platform engineering at scale",
  },
];

export function HireContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
              IT Outstaffing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Dedicated .NET, Blazor & React Teams from Nepal
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Scale your engineering capacity with AI-adept Microsoft-ecosystem developers.
              We handle recruiting, retention, and operations — you get a high-performing
              remote team that ships.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-blue-500/30 group"
            >
              Start a Conversation
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500">From first conversation to daily delivery</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-blue-100 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Expertise */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Technology Expertise</h2>
            <p className="text-gray-500">Microsoft ecosystem is our home turf</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {techExpertise.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <tech.Icon className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{tech.name}</div>
                  <div className="text-xs text-gray-400">{tech.level}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Adept Workflow */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Adept Engineering</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Every developer at Ojas leverages AI agents in their daily workflow — from code
              generation and automated testing to PR reviews and documentation. This isn&apos;t
              about replacing engineers; it&apos;s about amplifying them. The result: consistent
              quality, fewer bugs, faster delivery, and code that meets your standards.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { title: "Code Quality", desc: "AI-assisted reviews catch edge cases before they reach production" },
                { title: "Faster Delivery", desc: "Boilerplate eliminated. Engineers focus on business logic and architecture" },
                { title: "Knowledge Capture", desc: "Auto-generated documentation and specs that stay up to date" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-white border border-gray-100">
                  <HiCheckCircle className="w-5 h-5 text-emerald-500 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Examples */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Example Team Compositions</h2>
            <p className="text-gray-500">Mix and match based on your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamExamples.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{team.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{team.members}</p>
                <p className="text-sm text-gray-500">{team.bestFor}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl bg-blue-50/50 border border-blue-100 text-center"
          >
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Timezone aligned:</span> Nepal Time (NPT) overlaps with
              EST morning and PST afternoon — enabling real-time standups and pair programming.
            </p>
            <p className="text-sm text-gray-500">
              Custom team compositions available. Tell us what you need and we&apos;ll design the right team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Scale Your Team?</h2>
          <p className="text-gray-500 mb-8">
            Tell us about your project. We&apos;ll propose the right team within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-blue-500/30 group"
          >
            Get Started
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
```

---

### Task 11: Update sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add new routes**

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ojastech.io",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://ojastech.io/hire-developers",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://ojastech.io/portfolio",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://ojastech.io/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://ojastech.io/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://ojastech.io/privacy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: "https://ojastech.io/terms",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
```

---

### Task 12: Remove unused section components from homepage references

**Files:**
- No files to delete (keep components for future use), but verify no stale imports

- [ ] **Step 1: Check git diff for any stale imports**

```bash
git diff app/page.tsx
```

Verify that `About`, `Features`, and `Services` imports are removed from `app/page.tsx`.

- [ ] **Step 2: Clean up unused imports in hero.tsx**

Remove `TbBrandGithub` from hero.tsx if unused (confirm by reading the file).

---

### Task 13: Build verification

- [ ] **Step 1: Run the build**

```bash
npm run build 2>&1
```

Expected: 0 errors, all routes listed:
```
Route (app)
├ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /contact
├ ○ /hire-developers
├ ○ /portfolio
├ ○ /privacy
├ ○ /robots.txt
├ ○ /sitemap.xml
└ ○ /terms
```

- [ ] **Step 2: Verify TypeScript passes**

Check build output for: `✓ Compiled successfully` and `Finished TypeScript`

- [ ] **Step 3: Spot-check the navbar**

Start dev server: `npm run dev`
- Navigate to `/`
- Click "Hire Developers" → `/hire-developers`
- Click "Portfolio" → `/portfolio`
- Click "About" → `/about`
- Click "Contact" → `/contact`
- Click "Home" → `/`
- Check mobile hamburger menu works
- Verify the nav CTA ("Start Project") goes to `/contact`

- [ ] **Step 4: Verify no stale content**

```bash
grep -r "Graphics Design\|Digital Marketing\|SEO Optimization\|/#features\|/#services\|/#about\|/#contact" app/ --include="*.tsx" --include="*.ts"
```

Expected: no results (all old anchor links and removed services should be gone from visible content). Some anchor links in section ID attributes (`id="contact"`, `id="hero"`) are fine.

---

### Task 14: Commit

- [ ] **Step 1: Stage and commit**

```bash
git add app/constants.ts app/components/navbar.tsx app/components/mainLayout/hero.tsx app/page.tsx app/sitemap.ts
git add app/components/mainLayout/pillars.tsx app/components/mainLayout/techbar.tsx app/components/mainLayout/portfolio-preview.tsx
git add app/about/ app/contact/ app/hire-developers/
git commit -m "refactor: reposition as Microsoft-ecosystem specialist, remove non-tech services"
```
