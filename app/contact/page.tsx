import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { Contact } from "../components/mainLayout/contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ojas Technologies. Start your project, hire developers, or discuss your requirements. Based in Kathmandu, Nepal — serving clients worldwide.",
  keywords: [
    "contact Ojas Technologies",
    "hire developers Nepal",
    "software development inquiry",
    "IT outstaffing contact",
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
