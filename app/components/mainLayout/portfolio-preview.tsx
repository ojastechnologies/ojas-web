"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

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
    link: "/portfolio",
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
    link: "/portfolio",
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
