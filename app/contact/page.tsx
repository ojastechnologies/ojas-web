import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { Contact } from "../components/mainLayout/contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ojas Technologies — a custom software development and AI automation agency in Kathmandu, Nepal. Start your project, hire .NET or React developers.",
  keywords: [
    "contact Ojas Technologies",
    "hire developers Nepal",
    "software development inquiry",
    "IT outstaffing contact",
    "offshore .NET development Nepal",
    "AI automation agency Kathmandu",
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

        {/* Dark hero header */}
        <section className="pt-28 pb-16 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900">
          <div className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider mb-5">Contact</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Let&apos;s Build Something Together
              </h1>
              <p className="text-lg text-blue-200/70 max-w-2xl">
                Ready to start your next project? Send us a message and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <Contact simple />
      </main>
      <Footer />
    </>
  );
}
