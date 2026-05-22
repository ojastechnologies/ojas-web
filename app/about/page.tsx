import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { AboutContent } from "./AboutContent";

export const metadata = {
  title: "About Us",
  description:
    "Ojas Technologies is a Microsoft-ecosystem software engineering company based in Kathmandu, Nepal. .NET, Blazor, MAUI, React, and Azure specialists since 2020.",
  keywords: [
    "software company Kathmandu",
    ".NET development Nepal",
    "Microsoft technology partner",
    "IT outstaffing company",
    "Blazor developers",
  ],
  openGraph: {
    title: "About — Ojas Technologies",
    description:
      "Microsoft-ecosystem specialists in Kathmandu, Nepal. .NET, Blazor, MAUI, and Azure engineering since 2020.",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
