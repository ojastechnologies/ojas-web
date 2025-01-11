import Link from "next/link";
import Image from "next/image";


import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaCheck } from 'react-icons/fa';
import { Navbar } from "./components/navbar";
import { Hero } from "./components/mainLayout/hero";
import { About } from "./components/mainLayout/about";
import { Features } from "./components/mainLayout/features";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
  
      <Navbar/>
      <Hero />
      <About />
      <Features />

      {/* Hero Section */}
      {/* <div className="bg-light py-5 mb-5">
        <div className="container mx-auto py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div>
              <h1 className="text-4xl mb-3 animate-slideDown">Your Vision, Our Tech</h1>
              <p className="animate-slideDown">Let us turn your concepts into a tangible digital experience. Get in touch with us and create something remarkable.</p>
            </div>
            <div className="animate-fadeIn">
              <Image 
                src="/img/banner.png"
                alt="ojas technologies nepal"
                width={500}
                height={500}
                className="w-full animate-pulse"
                style={{ animationDuration: '3s' }}
              />
            </div>
          </div>
        </div>
      </div> */}

       {/* About Section */}
       <div className="py-20" id="about-us">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="wow fadeInUp">
              <Image 
                src="/img/full-logo.jpeg"
                alt="ojastech"
                width={400}
                height={400}
                className="w-[70%]"
              />
            </div>
            <div className="wow fadeInUp">
              <h1 className="text-4xl mb-4">About Us</h1>
              <p className="text-primary text-lg mb-4">Your Trusted IT Partner</p>
              <p className="text-justify mb-4">
                Founded in 2020, Ojas Technologies (Pvt) Ltd is a leading development and design company that provides top-notch software, web, mobile, and creative design solutions to businesses worldwide. Our technology development and innovation center is located in Nepal.
              </p>
              
              {/* Features list */}
              {[
                "We offer top-quality software and applications",
                "We strive to deliver the best possible outcomes for our clients",
                "We are dedicated to being the premier IT support platform for your business"
              ].map((text, index) => (
                <div key={index} className="flex items-center mb-2">
                  <div className="bg-light text-primary p-2 rounded-full mr-3">
                  <FaCheck className="w-4 h-4 text-primary" />

</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-light py-20 my-20" id="services">
        <div className="container mx-auto">
          <div className="text-center max-w-[500px] mx-auto mb-12">
            <h1 className="text-4xl">Our Services</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-5 wow fadeInUp">
                <Image 
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h5 className="mb-3 text-xl">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Icons Component */}
      <div className="flex space-x-2">
      <SocialIcon href="https://facebook.com/ojastech" icon={<FaFacebook />} />
    <SocialIcon href="https://twitter.com/ojastech" icon={<FaTwitter />} />
    <SocialIcon href="https://youtube.com/ojastech" icon={<FaYoutube />} />
    <SocialIcon href="https://linkedin.com/company/ojastech" icon={<FaLinkedin />} />
      </div>
    </div>
  );
}

// Updated SocialIcon component
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link 
    href={href}
    target="_blank"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-light text-primary hover:bg-primary hover:text-white transition-colors"
  >
    {icon}
  </Link>
);

// Services data
const services = [
  {
    icon: "/img/web.png",
    title: "Web Development",
    description: "We design and develop websites and web applications of all sizes."
  },
  {
    icon: "/img/mbile-app.png",
    title: "Mobile Application Development",
    description: "We create mobile applications that meet your specific requirements."
  },
  {
    icon: "/img/desktop-app.png",
    title: "Desktop Application Development",
    description: "We develop desktop applications to fit your needs."
  },
  {
    icon: "/img/graphics.png",
    title: "Graphics Design",
    description: "We create attractive and innovative graphic designs for our clients."
  },
  {
    icon: "/img/digital-marketting.png",
    title: "Digital Marketing",
    description: "We offer digital marketing and social media marketing services."
  },
  {
    icon: "/img/seo.png",
    title: "Search Engine Optimization",
    description: "We handle SEO for your website to help improve your online visibility."
  }
];