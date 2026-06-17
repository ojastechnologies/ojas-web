"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const services = [
  { title: "Web Development",               desc: "High-performance websites and web applications focused on speed, UX, and modern tech stacks.", img: "/img/web.png",              delay: 0.06, s1: ["100+","Projects"], s2: ["99%","Success"] },
  { title: "Mobile Application Development", desc: "Cross-platform mobile apps delivering native-like experiences across iOS and Android.",            img: "/img/mbile app.png",        delay: 0.12, s1: ["50+","Delivered"], s2: ["4.8/5","Rating"] },
  { title: "AI Automation & AI Agents",      desc: "Custom AI workflows, intelligent chatbots, document processing, and LLM-powered agents that streamline operations.",       img: "/img/Automations and Ai.png",delay: 0.18, s1: ["300%","Efficiency"], s2: ["90%","Coverage"] },
  { title: "IT Outstaffing & Dedicated Teams",desc: "Scale faster with Nepal-based .NET, React, and Full-Stack developers dedicated to your projects.",        img: "/img/web.png",              delay: 0.24, s1: ["95%","Retention"], s2: ["Overlap","Timezone"] },
  { title: "Graphics Design",                desc: "Visual solutions that elevate brand identity across every medium — from web to print.",               img: "/img/graphics.png",         delay: 0.30, s1: ["500+","Created"], s2: ["95%","Satisfaction"] },
  { title: "Digital Marketing",              desc: "Data-driven digital marketing that boosts online presence and drives measurable results.",      img: "/img/digital-marketting.png",delay: 0.36, s1: ["300%","ROI Avg"], s2: ["150%","Growth"] },
  { title: "Search Engine Optimization",     desc: "Strategic SEO to improve visibility, drive organic traffic, and climb search engine rankings.",                  img: "/img/seo.png",              delay: 0.42, s1: ["80%","Ranking"], s2: ["200%","Traffic"] },
];

export function Services() {
  return (
    <section id="services" className="section overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <div className="section-badge">Our Services</div>
          <h2 className="section-title">Full-Service Digital Solutions</h2>
          <p className="section-sub">From concept to deployment — everything you need to build, scale, and grow</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: s.delay }}
              className="card p-6"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-2 ring-1 ring-indigo-200">
                  <Image src={s.img} alt={s.title} width={64} height={64} className="object-contain w-full h-full" loading="lazy" />
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-900 text-center mb-2">{s.title}</h3>
              <p className="text-body text-xs text-center mb-4">{s.desc}</p>
              <div className="flex justify-between pt-4 border-t border-indigo-100 text-xs">
                <span className="text-gray-400">{s.s1[1]}: <strong className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{s.s1[0]}</strong></span>
                <span className="text-gray-400">{s.s2[1]}: <strong className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{s.s2[0]}</strong></span>
              </div>
              <Link href="/#contact" className="btn-ghost w-full text-xs mt-3">
                Learn More <HiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/#contact" className="btn-gradient text-base px-10 py-3.5">
            Start Your Project <HiArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-muted mt-3">We&apos;ll get back to you within 24 hours</p>
        </motion.div>
      </div>
    </section>
  );
}
