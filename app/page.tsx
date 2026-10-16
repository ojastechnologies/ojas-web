import { Navbar } from "./components/navbar";
import { Hero } from "./components/mainLayout/hero";
import { Clients } from "./components/mainLayout/clients";
import { AiServices } from "./components/mainLayout/ai-services";
import { RagPipeline } from "./components/mainLayout/rag-pipeline";
import { PortfolioPreview } from "./components/mainLayout/portfolio-preview";
import { Engagement } from "./components/mainLayout/engagement";
import { Pillars } from "./components/mainLayout/pillars";
import { TechBar } from "./components/mainLayout/techbar";
import { Testimonials } from "./components/mainLayout/testimonials";
import { Contact } from "./components/mainLayout/contact";
import { Footer } from "./components/mainLayout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <Hero />
      <Clients />
      <AiServices />
      <RagPipeline />
      <PortfolioPreview />
      <Engagement />
      <Pillars />
      <TechBar />
      <Testimonials />
      <Contact dark />
      <Footer />
    </div>
  );
}
