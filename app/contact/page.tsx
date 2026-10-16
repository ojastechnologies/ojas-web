import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { Contact } from "../components/mainLayout/contact";
import { Reveal, SplitText } from "../components/motion";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Ojas Technologies to start your offshore software development project. Hire dedicated .NET, Blazor, and React developers from Kathmandu, Nepal. We respond within 24 hours.",
  alternates: {
    canonical: "https://ojastech.io/contact",
  },
  keywords: [
    "contact Ojas Technologies",
    "hire developers Nepal",
    "software development inquiry",
    "IT outstaffing contact",
    "offshore .NET development Nepal",
    "AI automation agency Kathmandu",
    "start software project",
    "custom development quote",
  ],
  openGraph: {
    title: "Contact — Ojas Technologies",
    description:
      "Contact Ojas Technologies to hire offshore .NET, Blazor, and React developers from Nepal. Start your project today — we respond within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-ink-950">
        <Navbar />

        {/* Dark hero header */}
        <section className="relative overflow-hidden bg-ink-950">
          <div className="orb orb-a w-[460px] h-[460px] -top-40 -left-32 bg-cyan-500/20" />
          <div className="orb orb-b w-[520px] h-[520px] -top-24 right-[-15%] bg-violet-600/20" />
          <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
            <div className="max-w-3xl">
              <Reveal y={10}>
                <div className="dark-badge">Contact</div>
              </Reveal>
              <SplitText
                as="h1"
                inView={false}
                delay={0.1}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
                segments={[
                  { text: "Let's Build" },
                  { text: "Something Together", className: "text-gradient-ai" },
                ]}
              />
              <Reveal delay={0.4} y={16}>
                <p className="dark-sub">
                  Ready to start your next project? Send us a message and we&apos;ll get back to you within 24 hours.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <Contact simple dark />
      </main>
      <Footer />
    </>
  );
}
