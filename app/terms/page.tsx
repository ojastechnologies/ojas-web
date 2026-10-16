import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { Reveal, SplitText } from "@/app/components/motion";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Ojas Technologies — conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
        <Navbar />

        {/* Dark hero */}
        <section className="relative overflow-hidden bg-ink-950">
          <div className="orb orb-a w-[380px] h-[380px] -top-40 -left-32 bg-cyan-500/20" />
          <div className="orb orb-b w-[420px] h-[420px] -top-24 right-[-15%] bg-violet-600/20" />
          <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-12 md:pb-16">
            <Reveal y={10}>
              <span className="dark-badge">Legal</span>
            </Reveal>
            <SplitText
              as="h1"
              inView={false}
              delay={0.1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] mb-5"
              segments={[
                { text: "Terms of" },
                { text: "Service", className: "text-gradient-ai" },
              ]}
            />
            <Reveal delay={0.3} y={12}>
              <p className="font-mono text-sm text-white/55">Last updated: {new Date().getFullYear()}</p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
          <Reveal>
          <div className="glass p-6 sm:p-8 md:p-12">
          <div className="prose-dark space-y-10 prose-h2:mt-0 break-words">
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">1. Acceptance of Terms</h2>
              <p className="text-white/65 leading-relaxed">
                By accessing and using the Ojas Technologies website (ojastech.io), you agree to be bound
                by these Terms of Service. If you do not agree with any part of these terms, please do not
                use our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">2. Services</h2>
              <p className="text-white/65 leading-relaxed">
                Ojas Technologies provides software development, IT outstaffing, web development, mobile
                application development, and related digital services. All services are provided under
                separate agreements that detail scope, deliverables, timelines, and payment terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">3. Intellectual Property</h2>
              <p className="text-white/65 leading-relaxed">
                All content on this website — including text, graphics, logos, and code — is the property
                of Ojas Technologies or its clients and is protected by applicable intellectual property
                laws. Client project work and deliverables are governed by individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">4. Limitation of Liability</h2>
              <p className="text-white/65 leading-relaxed">
                Ojas Technologies shall not be liable for any indirect, incidental, or consequential damages
                arising from the use of this website. Our liability for services provided is limited to the
                terms specified in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">5. Governing Law</h2>
              <p className="text-white/65 leading-relaxed">
                These terms are governed by the laws of Nepal. Any disputes shall be subject to the
                exclusive jurisdiction of the courts in Kathmandu, Nepal.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">6. Changes to Terms</h2>
              <p className="text-white/65 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page
                with an updated date. Continued use of the website after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">7. Contact</h2>
              <p className="text-white/65 leading-relaxed">
                For questions about these Terms of Service, contact us at:
              </p>
              <address className="text-white/65 not-italic mt-4 pl-4 border-l border-cyan-300/30">
                Ojas Technologies Pvt. Ltd.<br />
                Tokha - 03, Kathmandu, Nepal<br />
                Email: contact@ojastech.io
              </address>
            </section>
          </div>
          </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
