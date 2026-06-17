import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Ojas Technologies — conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
        <Navbar />

        {/* Dark hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-900 via-blue-900">
          <div className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-blue-200/70">Last updated: {new Date().getFullYear()}</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-indigo max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Ojas Technologies website (ojastech.io), you agree to be bound
                by these Terms of Service. If you do not agree with any part of these terms, please do not
                use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Ojas Technologies provides software development, IT outstaffing, web development, mobile
                application development, and related digital services. All services are provided under
                separate agreements that detail scope, deliverables, timelines, and payment terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this website — including text, graphics, logos, and code — is the property
                of Ojas Technologies or its clients and is protected by applicable intellectual property
                laws. Client project work and deliverables are governed by individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Ojas Technologies shall not be liable for any indirect, incidental, or consequential damages
                arising from the use of this website. Our liability for services provided is limited to the
                terms specified in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by the laws of Nepal. Any disputes shall be subject to the
                exclusive jurisdiction of the courts in Kathmandu, Nepal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page
                with an updated date. Continued use of the website after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service, contact us at:
              </p>
              <address className="text-gray-600 not-italic mt-2">
                Ojas Technologies Pvt. Ltd.<br />
                Tokha - 03, Kathmandu, Nepal<br />
                Email: contact@ojastech.io
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
