import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { AboutContent } from "./AboutContent";

export const metadata = {
  title: "About Us",
  description:
    "Discover Ojas Technologies — a leading .NET, Blazor, and Azure software engineering company in Kathmandu, Nepal. Hire expert offshore developers since 2020. Start your project today.",
  alternates: {
    canonical: "https://ojastech.io/about",
  },
  keywords: [
    "software company Kathmandu",
    ".NET development Nepal",
    "Microsoft technology partner",
    "IT outstaffing company",
    "Blazor developers",
    "offshore software development Nepal",
    "hire .NET developers",
    "Azure cloud consultants",
  ],
  openGraph: {
    title: "About — Ojas Technologies",
    description:
      "Leading .NET, Blazor, MAUI, and Azure software engineering company in Kathmandu, Nepal. Hire dedicated offshore developers since 2020.",
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
