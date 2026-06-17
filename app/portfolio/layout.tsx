import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio & Case Studies",
    description: "Explore our portfolio of custom software projects. See how Ojas Technologies delivers HIPAA-compliant healthcare platforms, legal billing systems, and more using .NET, Blazor, and Azure.",
    alternates: {
        canonical: "https://ojastech.io/portfolio",
    },
    keywords: ["software development portfolio", "case studies .NET", "Blazor projects", "Azure cloud examples", "healthcare platform development", "legal billing software", "Ojas Technologies projects", "offshore development portfolio"],
    openGraph: {
        title: "Portfolio & Case Studies | Ojas Technologies",
        description: "Explore custom software projects by Ojas Technologies — HIPAA-compliant healthcare platforms, microservices billing systems, and cross-platform apps built with .NET, Blazor, and Azure.",
        url: "https://ojastech.io/portfolio",
        siteName: "Ojas Technologies",
        type: "website",
        images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies Portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio & Case Studies | Ojas Technologies",
        description: "Explore custom software projects by Ojas Technologies — HIPAA-compliant healthcare platforms, microservices billing systems, and cross-platform apps built with .NET, Blazor, and Azure.",
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
