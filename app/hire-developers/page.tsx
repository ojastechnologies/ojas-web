import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { HireContent } from "./HireContent";

export const metadata = {
  title: "Hire Developers",
  description:
    "Hire dedicated .NET, Blazor, MAUI, and React developers from Nepal. AI-adept engineering teams that integrate with your workflow. Transparent pricing, timezone-aligned.",
  keywords: [
    "hire .NET developers",
    "hire Blazor developers",
    "dedicated development team Nepal",
    "IT staff augmentation",
    ".NET MAUI developers",
    "React developers Nepal",
    "offshore software development team",
  ],
  openGraph: {
    title: "Hire Developers — Ojas Technologies",
    description:
      "Dedicated Microsoft-ecosystem engineering teams from Kathmandu, Nepal. .NET, Blazor, MAUI, React, Azure specialists.",
  },
};

export default function HirePage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <HireContent />
      </main>
      <Footer />
    </>
  );
}
