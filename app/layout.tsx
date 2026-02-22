import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ojastech.io"),
  title: {
    default: "Ojas Technologies | IT Outstaffing & Software Development in Kathmandu",
    template: "%s | Ojas Technologies",
  },
  description: "Ojas Technologies is a top-tier offshore software development and IT outstaffing company in Kathmandu, Nepal. We provide dedicated teams, custom software, and scalable modern web apps using .NET Core, React, Next.js, and Azure Cloud Solutions.",
  keywords: ["offshore software development Nepal", "IT outsourcing Kathmandu", "IT outstaffing Nepal", "dedicated development team", "hire developers Nepal", "custom software development", "software outsourcing company", ".NET Core development", "React development", "Next.js developers", "Azure cloud experts", "microservices architecture", "Ojas Technologies", "tech partner Nepal", "scalable software solutions"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
