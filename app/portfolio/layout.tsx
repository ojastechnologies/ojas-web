import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio & Case Studies",
    description: "Explore our recent projects and case studies. See how Ojas Technologies has delivered custom web, mobile, and cloud software solutions for businesses worldwide.",
    openGraph: {
        title: "Portfolio & Case Studies | Ojas Technologies",
        description: "Explore our recent projects and case studies. See how Ojas Technologies has delivered custom web, mobile, and cloud software solutions.",
        url: "https://ojastech.io/portfolio",
        siteName: "Ojas Technologies",
        type: "website",
        images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies Portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio & Case Studies | Ojas Technologies",
        description: "Explore our recent projects and case studies. See how Ojas Technologies has delivered custom web, mobile, and cloud software solutions.",
        images: ["/img/full logo.jpeg"],
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
