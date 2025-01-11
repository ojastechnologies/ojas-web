import { Navbar } from "./components/navbar";
import { About } from "./components/mainLayout/about";
import { Features } from "./components/mainLayout/features";
import { Services } from "./components/mainLayout/services";
import { Contact } from "./components/mainLayout/contact";
import { Footer } from "./components/mainLayout/footer";
import { Hero } from "./components/mainLayout/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero />
      <About />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
