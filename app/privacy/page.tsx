import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { Reveal, SplitText } from "@/app/components/motion";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ojas Technologies — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
                { text: "Privacy" },
                { text: "Policy", className: "text-gradient-ai" },
              ]}
            />
            <Reveal delay={0.3} y={12}>
              <p className="font-mono text-sm text-white/45">Last updated: {new Date().getFullYear()}</p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
          <Reveal>
          <div className="glass p-6 sm:p-8 md:p-12">
          <div className="prose-dark space-y-10 prose-h2:mt-0 break-words">
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">1. Information We Collect</h2>
              <p className="text-white/65 leading-relaxed">
                When you contact us through our website, we collect the information you provide: your name, email address,
                phone number (if provided), and the content of your message. We also collect standard web server logs
                including IP address, browser type, referring pages, and timestamps for security and analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">2. How We Use Your Information</h2>
              <p className="text-white/65 leading-relaxed">
                We use the information you provide to respond to your inquiries, discuss potential projects,
                provide estimates and proposals, and communicate about our services. We do not sell, rent, or
                share your personal information with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">3. Data Storage & Security</h2>
              <p className="text-white/65 leading-relaxed">
                Your data is stored securely and accessed only by authorized Ojas Technologies personnel.
                We implement industry-standard security measures including encryption, access controls,
                and regular security reviews to protect your information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">4. Cookies</h2>
              <p className="text-white/65 leading-relaxed">
                Our website may use essential cookies for functionality and analytics. You can control
                cookie settings through your browser preferences. We do not use tracking cookies for
                advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">5. Third-Party Services</h2>
              <p className="text-white/65 leading-relaxed">
                Our contact form uses FormSubmit.co to process form submissions. Google Maps is embedded
                to show our office location. These services have their own privacy policies governing
                the data they collect.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">6. Your Rights</h2>
              <p className="text-white/65 leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal data.
                To exercise these rights, contact us at contact@ojastech.io. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">7. Contact Us</h2>
              <p className="text-white/65 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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
