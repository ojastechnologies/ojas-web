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
  title: "Ojas Technologies | Software Development Company in Nepal",
  description: "Ojas Technologies is a leading software development company based in Nepal, specializing in web development, mobile apps, cloud solutions, and IT services to help businesses achieve their goals efficiently.",
  keywords: ["software development", "web development", "mobile apps", "Nepal", "IT services", "Ojas Technologies", "cloud solutions", "digital marketing"],
  authors: [{ name: "Ojas Technologies Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ojastech.io",
    siteName: "Ojas Technologies",
    title: "Ojas Technologies | Software Development Company in Nepal",
    description: "Leading software development company in Nepal — web, mobile, cloud, and digital solutions.",
    images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojas Technologies | Software Development Company in Nepal",
    description: "Leading software development company in Nepal — web, mobile, cloud, and digital solutions.",
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
