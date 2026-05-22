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
