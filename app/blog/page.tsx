import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { getAllPosts } from "./lib";

export const metadata: Metadata = {
    title: "Blog — .NET Development, AI Automation & Tech Insights",
    description: "Expert insights on offshore .NET development, AI automation for businesses, hiring React developers in Nepal, custom software, and technology trends from Ojas Technologies.",
    openGraph: {
        title: "Blog | Ojas Technologies",
        description: "Expert insights on offshore .NET development, AI automation, hiring React developers in Nepal, and custom software.",
        url: "https://ojastech.io/blog",
        siteName: "Ojas Technologies",
        type: "website",
        images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies Blog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Ojas Technologies",
        description: "Expert insights on offshore .NET development, AI automation, hiring React developers in Nepal, and custom software.",
        images: ["/img/full logo.jpeg"],
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
                <Navbar />

                {/* Header */}
                <div className="bg-gradient-to-br from-indigo-900 via-blue-900">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                        <p className="text-sm font-semibold text-blue-200/70 uppercase tracking-widest mb-3">Our Blog</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                            Insights & Resources
                        </h1>
                        <p className="text-lg text-blue-200/70 max-w-xl">
                            AI automation guides, software development tips, and industry insights from the Ojas team.
                        </p>
                    </div>
                </div>

                {/* Blog Posts */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <article className="h-full p-6 rounded-xl bg-white border border-indigo-100 hover:border-indigo-200 transition-colors duration-200 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <span key={tag} className="tag text-[11px]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-indigo-100">
                                        <span>{post.date}</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Want to stay updated?</h2>
                        <p className="text-gray-500 mb-8">
                            Subscribe to our newsletter for the latest on AI, development, and tech trends.
                        </p>
                        <Link
                            href="/#contact"
                            className="btn-primary"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
