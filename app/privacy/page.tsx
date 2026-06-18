import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ojas Technologies — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
        <Navbar />

        {/* Dark hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-900 via-blue-900">
          <div className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-blue-200/70">Last updated: {new Date().getFullYear()}</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-indigo max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                When you contact us through our website, we collect the information you provide: your name, email address,
                phone number (if provided), and the content of your message. We also collect standard web server logs
                including IP address, browser type, referring pages, and timestamps for security and analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information you provide to respond to your inquiries, discuss potential projects,
                provide estimates and proposals, and communicate about our services. We do not sell, rent, or
                share your personal information with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Storage & Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Your data is stored securely and accessed only by authorized Ojas Technologies personnel.
                We implement industry-standard security measures including encryption, access controls,
                and regular security reviews to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use essential cookies for functionality and analytics. You can control
                cookie settings through your browser preferences. We do not use tracking cookies for
                advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our contact form uses FormSubmit.co to process form submissions. Google Maps is embedded
                to show our office location. These services have their own privacy policies governing
                the data they collect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal data.
                To exercise these rights, contact us at contact@ojastech.io. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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
