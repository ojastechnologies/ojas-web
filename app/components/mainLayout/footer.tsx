"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/app/constants";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    try {
      const leads = JSON.parse(localStorage.getItem("ojastech_leads") || "[]");
      leads.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem("ojastech_leads", JSON.stringify(leads));
      setState("success");
      setEmail("");
      setTimeout(() => setState("idle"), 3000);
    } catch { setState("error"); setTimeout(() => setState("idle"), 3000); }
  };
  return (
    <form onSubmit={submit} className="relative flex gap-2">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" required className="flex-1 px-3.5 py-2.5 rounded-lg bg-indigo-900/50 border border-indigo-800/50 text-sm text-indigo-200 placeholder-indigo-400/60 focus:outline-none focus:border-blue-500/50 transition-all" />
      <button type="submit" disabled={state === "sending"} className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white text-xs font-semibold transition-colors disabled:opacity-50 shrink-0">
        {state === "sending" ? "..." : "Subscribe"}
      </button>
      {state === "success" && <span className="absolute -bottom-5 left-0 text-[11px] text-emerald-400">✓ Subscribed!</span>}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="relative py-16 bg-indigo-950 text-indigo-300/60 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-indigo-900/50 p-1 ring-1 ring-indigo-800/50">
                <Image src="/img/logo.jpg" alt="Ojas Technologies logo - Offshore .NET and React development Nepal" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-lg font-bold text-indigo-200">Ojas Technologies</span>
            </Link>
            <p className="text-sm text-indigo-300/50 leading-relaxed max-w-xs">A premier offshore .NET development and AI automation agency. Custom software from Kathmandu — web, mobile, and cloud solutions for global clients.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[{n:"Hire Developers",h:"/hire-developers"},{n:"Portfolio",h:"/portfolio"},{n:"About Us",h:"/about"},{n:"Contact",h:"/contact"}].map(({n,h}) => (
                <li key={h}><Link href={h} className="text-sm text-indigo-300/60 hover:text-blue-400 transition-colors flex items-center gap-1"><HiArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-indigo-300/60 mb-3">AI automation tips, dev insights, and company news.</p>
            <Newsletter />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {CONTACT_INFO.map((info, i) => (
                <a key={i} href={info.link || info.href} className="flex items-start gap-3 text-sm text-indigo-300/60 hover:text-indigo-200 transition-colors">
                  <info.icon className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                  <span>{info.content}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {SOCIAL_LINKS.map(({ Icon, href, color, name }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-indigo-900/50 border border-indigo-800/50 flex items-center justify-center text-indigo-300/60 hover:bg-indigo-800 hover:text-blue-400 hover:border-indigo-700 transition-all" aria-label={name}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-indigo-800/50 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-indigo-300/40">
          <p>&copy; {new Date().getFullYear()} Ojas Technologies Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
