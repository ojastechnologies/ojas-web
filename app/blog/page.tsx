import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { getAllPosts } from "./lib";
import { HiArrowRight } from "react-icons/hi";
import { Magnetic, Reveal, SplitText, Stagger, StaggerItem } from "@/app/components/motion";

export const metadata: Metadata = {
    title: "Blog — .NET Development, AI Automation & Tech Insights",
    description: "Expert insights on offshore .NET development, AI automation for businesses, and software engineering from Ojas Technologies. Learn about Blazor, React, Azure, and hiring developers in Nepal.",
    alternates: {
        canonical: "https://ojastech.io/blog",
    },
    keywords: [".NET development blog", "AI automation insights", "offshore software development tips", "Nepal tech blog", "Blazor tutorials", "React development tips", "Azure cloud guides", "hire developers Nepal blog", "Ojas Technologies blog"],
    openGraph: {
        title: "Blog | Ojas Technologies",
        description: "Expert insights on offshore .NET development, AI automation, hiring React developers in Nepal, and custom software engineering from Kathmandu.",
        url: "https://ojastech.io/blog",
        siteName: "Ojas Technologies",
        type: "website",
        images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies Blog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Ojas Technologies",
        description: "Expert insights on offshore .NET development, AI automation, hiring React developers in Nepal, and custom software engineering from Kathmandu.",
        images: ["/img/full logo.jpeg"],
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <main className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
                <Navbar />

                {/* Header */}
                <section className="relative overflow-hidden bg-ink-950">
                    <div className="orb orb-a w-[420px] h-[420px] -top-40 -left-32 bg-cyan-500/20" />
                    <div className="orb orb-b w-[460px] h-[460px] -top-24 right-[-15%] bg-violet-600/20" />
                    <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-20">
                        <Reveal y={10}>
                            <p className="dark-badge">Our Blog</p>
                        </Reveal>
                        <SplitText
                            as="h1"
                            inView={false}
                            delay={0.1}
                            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] mb-5"
                            segments={[
                                { text: "Insights &" },
                                { text: "Resources", className: "text-gradient-animated" },
                            ]}
                        />
                        <Reveal delay={0.3} y={16}>
                            <p className="dark-sub max-w-xl">
                                AI automation guides, software development tips, and industry insights from the Ojas team.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
                    <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {posts.map((post) => (
                            <StaggerItem key={post.slug} className="h-full">
                                <Link href={`/blog/${post.slug}`} className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                                    <article className="glass-hover h-full p-6 md:p-7 flex flex-col">
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {post.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="chip-dark">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h2 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300 leading-snug tracking-tight">
                                            {post.title}
                                        </h2>

                                        <p className="text-sm text-white/55 leading-relaxed mb-6 flex-1">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between gap-3 text-xs text-white/55 pt-4 border-t border-white/[0.06]">
                                            <span className="font-mono">{post.date}</span>
                                            <span className="flex items-center gap-2">
                                                <span className="font-mono">{post.readingTime}</span>
                                                <HiArrowRight className="w-4 h-4 text-cyan-300/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-200" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </section>

                {/* CTA */}
                <section className="relative py-20 md:py-28 border-t border-white/[0.06] overflow-hidden">
                    <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
                    <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Have a project in mind?</h2>
                        <p className="text-white/55 mb-8">
                            Tell us what you&apos;re building. We&apos;ll reply within 24 hours with how we&apos;d approach it.
                        </p>
                        <Magnetic>
                            <Link
                                href="/#contact"
                                className="group btn-glow"
                            >
                                Get in Touch
                                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Magnetic>
                    </Reveal>
                </section>
            </main>
            <Footer />
        </>
    );
}
