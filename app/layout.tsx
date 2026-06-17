import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ojastech.io"),
  alternates: {
    canonical: "https://ojastech.io",
  },
  title: {
    default: "Ojas Technologies | IT Outstaffing & Software Development in Kathmandu",
    template: "%s | Ojas Technologies",
  },
  description: "Ojas Technologies is a top-tier offshore software development and IT outstaffing company in Kathmandu, Nepal. We provide dedicated teams, custom software, and scalable modern web apps using .NET Core, React, Next.js, and Azure Cloud Solutions.",
  keywords: ["offshore software development Nepal", "IT outsourcing Kathmandu", "IT outstaffing Nepal", "dedicated development team", "hire developers Nepal", "custom software development", "software outsourcing company", ".NET Core development", "React development", "Next.js developers", "Azure cloud experts", "microservices architecture", "AI automation", "Ojas Technologies", "tech partner Nepal", "scalable software solutions"],
  authors: [{ name: "Ojas Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ojastech.io",
    siteName: "Ojas Technologies",
    title: "Ojas Technologies | IT Outstaffing & Offshore Software Development",
    description: "Partner with Kathmandu's leading IT outstaffing and software agency. We build scalable custom software using .NET, React, Next.js, and Azure Cloud for global clients.",
    images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies - Offshore Software Development Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojas Technologies | Software Outsourcing Nepal",
    description: "Top-tier offshore software development company in Kathmandu. Expert teams in .NET, React, Next.js, and Cloud Solutions.",
    images: ["/img/full logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured data for SEO (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ojastech.io/#organization",
      name: "Ojas Technologies",
      url: "https://ojastech.io",
      logo: "https://ojastech.io/img/full logo.jpeg",
      description: "Top-tier offshore software development and IT outstaffing company in Kathmandu, Nepal.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tokha - 03",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+977-9841185541",
        email: "contact@ojastech.io",
        contactType: "sales",
        availableLanguage: ["English", "Nepali"],
      },
      sameAs: [
        "https://linkedin.com/company/ojastech",
        "https://github.com/ojastechnologies",
        "https://facebook.com/ojastech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ojastech.io/#website",
      url: "https://ojastech.io",
      name: "Ojas Technologies",
      publisher: { "@id": "https://ojastech.io/#organization" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ojastech.io/#localbusiness",
      name: "Ojas Technologies",
      image: "https://ojastech.io/img/full logo.jpeg",
      telephone: "+977-9841185541",
      email: "contact@ojastech.io",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tokha - 03",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://linkedin.com/company/ojastech",
        "https://github.com/ojastechnologies",
        "https://facebook.com/ojastech",
      ],
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Web Development",
            description: "Full-stack web development using React, Next.js, Blazor, and .NET Core.",
            provider: { "@id": "https://ojastech.io/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Mobile Application Development",
            description: "Cross-platform mobile apps with .NET MAUI, React Native, and Flutter.",
            provider: { "@id": "https://ojastech.io/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "IT Outstaffing & Dedicated Teams",
            description: "Remote .NET, React, and cloud engineers who integrate with your team.",
            provider: { "@id": "https://ojastech.io/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "AI Automation & AI Agents",
            description: "Custom AI automation workflows, chatbots, document processing, and LLM-powered solutions.",
            provider: { "@id": "https://ojastech.io/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Cloud & DevOps",
            description: "Azure cloud architecture, Kubernetes, CI/CD pipelines, and hybrid cloud deployments.",
            provider: { "@id": "https://ojastech.io/#organization" },
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S8CHW8DB9E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S8CHW8DB9E');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
