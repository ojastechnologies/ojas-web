"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/app/constants";

export function Footer() {
  return (
    <footer className="theme-dark relative py-16 bg-ink-950 border-t border-white/[0.06] text-white/50 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/[0.04] p-1 ring-1 ring-white/10">
                <Image src="/img/logo.jpg" alt="Ojas Technologies logo - AI integration and software engineering, Nepal" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-display text-lg font-semibold text-white">Ojas Technologies</span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">AI integration, RAG pipelines, and senior .NET, React, and Azure engineering from Kathmandu — for companies in the US and worldwide.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[{n:"Hire Developers",h:"/hire-developers"},{n:"Portfolio",h:"/portfolio"},{n:"In Nepal",h:"/software-development-nepal"},{n:"About Us",h:"/about"},{n:"Contact",h:"/contact"}].map(({n,h}) => (
                <li key={h}><Link href={h} className="group text-sm text-white/50 hover:text-cyan-200 transition-colors flex items-center gap-1"><HiArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* What we do */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">What We Do</h3>
            <ul className="space-y-2">
              {[{n:"AI Integration",h:"/#ai"},{n:"RAG Pipelines",h:"/#rag"},{n:"Dedicated Teams",h:"/hire-developers"},{n:"Blog & Insights",h:"/blog"}].map(({n,h}) => (
                <li key={h}><Link href={h} className="group text-sm text-white/50 hover:text-cyan-200 transition-colors flex items-center gap-1"><HiArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {CONTACT_INFO.map((info, i) => (
                <a key={i} href={info.link || info.href} className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <info.icon className="w-4 h-4 mt-0.5 shrink-0 text-cyan-300" />
                  <span>{info.content}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {SOCIAL_LINKS.map(({ Icon, href, color, name }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/[0.08] hover:text-cyan-300 hover:border-white/20 transition-all" aria-label={name}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div aria-hidden className="select-none pointer-events-none font-display font-semibold tracking-tighter leading-none text-[18vw] lg:text-[200px] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent -mb-6 lg:-mb-10">
          ojas
        </div>

        <div className="relative pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Ojas Technologies Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
