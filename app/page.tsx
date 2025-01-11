import Link from "next/link";
import Image from "next/image";


import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaCheck } from 'react-icons/fa';
import { Navbar } from "./components/navbar";
import { Hero } from "./components/mainLayout/hero";
import { About } from "./components/mainLayout/about";
import { Features } from "./components/mainLayout/features";
import { Services } from "./components/mainLayout/services";
import { Contact } from "./components/mainLayout/contact";
import { Footer } from "./components/mainLayout/footer";

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
