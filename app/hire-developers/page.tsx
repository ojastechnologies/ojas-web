import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { HireContent } from "./HireContent";

export const metadata = {
  title: "Hire Developers",
  description:
    "Hire dedicated .NET, Blazor, MAUI, and React developers from Nepal. Scale your engineering team with AI-adept offshore developers who integrate seamlessly. Competitive rates, timezone-aligned.",
  alternates: {
    canonical: "https://ojastech.io/hire-developers",
  },
  keywords: [
    "hire .NET developers",
    "hire Blazor developers",
    "dedicated development team Nepal",
    "IT staff augmentation",
    ".NET MAUI developers",
    "React developers Nepal",
    "offshore software development team",
    "hire remote developers",
    "Nepal development team",
    "Azure cloud developers",
  ],
  openGraph: {
    title: "Hire Developers — Ojas Technologies",
    description:
      "Scale faster with dedicated .NET, Blazor, MAUI, and React developers from Nepal. AI-adept engineering teams that integrate with your workflow. Inquire today.",
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
