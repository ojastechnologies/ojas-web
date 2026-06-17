import { Navbar } from "./components/navbar";
import { Hero } from "./components/mainLayout/hero";
import { Pillars } from "./components/mainLayout/pillars";
import { TechBar } from "./components/mainLayout/techbar";
import { PortfolioPreview } from "./components/mainLayout/portfolio-preview";
import { Testimonials } from "./components/mainLayout/testimonials";
import { Contact } from "./components/mainLayout/contact";
import { Footer } from "./components/mainLayout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Pillars />
      <TechBar />
      <PortfolioPreview />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
