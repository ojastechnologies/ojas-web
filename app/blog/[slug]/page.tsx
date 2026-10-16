import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/mainLayout/footer";
import { getPostBySlug, getAllSlugs, getAllPosts } from "../lib";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { HiArrowRight } from "react-icons/hi";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/app/components/motion";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `https://ojastech.io/blog/${post.slug}`,
        },
        keywords: [...post.tags, "Ojas Technologies", "offshore software development", ".NET development", ...(post.tags.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("automation")) ? ["AI automation"] : []), ...(post.tags.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("blazor") || t.toLowerCase().includes(".net")) ? ["hire developers Nepal"] : [])],
        openGraph: {
            title: `${post.title} | Ojas Technologies`,
            description: post.description,
            url: `https://ojastech.io/blog/${post.slug}`,
            siteName: "Ojas Technologies",
            type: "article",
            publishedTime: post.date,
            authors: [post.author || "Ojas Technologies"],
            images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} | Ojas Technologies`,
            description: post.description,
            images: ["/img/full logo.jpeg"],
        },
    };
}

async function renderMarkdown(markdown: string): Promise<string> {
    const result = await remark().use(gfm).use(html).process(markdown);
    return result.toString();
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const contentHtml = await renderMarkdown(post.content);

    // Get related posts based on shared tags
    const allPosts = getAllPosts();
    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
        .slice(0, 3);

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://ojastech.io/blog/${post.slug}#article`,
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                dateModified: post.date,
                author: {
                    "@type": "Person",
                    name: post.author || "Ojas Technologies",
                },
                publisher: {
                    "@type": "Organization",
                    "@id": "https://ojastech.io/#organization",
                    name: "Ojas Technologies",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://ojastech.io/img/full logo.jpeg",
                    },
                },
                image: {
                    "@type": "ImageObject",
                    url: "https://ojastech.io/img/full logo.jpeg",
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://ojastech.io/blog/${post.slug}`,
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://ojastech.io/blog/${post.slug}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://ojastech.io" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://ojastech.io/blog" },
                    { "@type": "ListItem", position: 3, name: post.title, item: `https://ojastech.io/blog/${post.slug}` },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <main className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
                <Navbar />

                {/* Dark hero header */}
                <section className="relative overflow-hidden bg-ink-950">
                    <div className="orb orb-a w-[420px] h-[420px] -top-40 -left-32 bg-cyan-500/20" />
                    <div className="orb orb-b w-[460px] h-[460px] -top-24 right-[-15%] bg-violet-600/20" />
                    <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ink-950 pointer-events-none" />
                    <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-12 md:pb-16">
                        <div className="mb-8">
                            <Link href="/blog" className="group inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors">
                                <span className="inline-block transition-transform group-hover:-translate-x-1">←</span> Back to Blog
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="chip-dark">{tag}</span>
                            ))}
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.1] break-words">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/55">
                            <span className="font-mono">{post.date}</span>
                            <span className="text-white/25">·</span>
                            <span className="font-mono">{post.readingTime}</span>
                            <span className="text-white/25">·</span>
                            <span>{post.author}</span>
                        </div>
                    </Reveal>
                </section>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10 md:mb-12" />
                    <div
                        className="prose-dark md:prose-lg
                            prose-h2:mt-12 prose-h2:mb-4
                            prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-white/70 prose-p:leading-relaxed
                            prose-li:text-white/70 prose-li:marker:text-cyan-300/60
                            prose-blockquote:border-l-cyan-300/40 prose-blockquote:text-white/70
                            prose-code:text-sm prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-ink-900 prose-pre:border prose-pre:border-white/[0.08] prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto
                            prose-hr:border-white/[0.08]
                            prose-table:block prose-table:overflow-x-auto prose-table:w-full prose-table:border-collapse prose-th:text-left prose-th:text-white prose-th:font-semibold prose-th:pb-2 prose-th:pr-4 prose-th:border-b prose-th:border-white/15 prose-td:py-2 prose-td:pr-4 prose-td:border-b prose-td:border-white/[0.06] prose-td:text-white/70
                            prose-img:rounded-xl break-words"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-20">
                            <Reveal>
                                <h3 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight mb-6">Related Posts</h3>
                            </Reveal>
                            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {relatedPosts.map((rp) => (
                                    <StaggerItem key={rp.slug} className="h-full">
                                        <Link href={`/blog/${rp.slug}`} className="group glass-hover h-full p-5 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {rp.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="chip-dark !text-[10px] !px-2 !py-0.5">{tag}</span>
                                                ))}
                                            </div>
                                            <h4 className="font-display text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors mb-2 leading-snug">{rp.title}</h4>
                                            <p className="text-xs text-white/50 line-clamp-2 flex-1">{rp.description}</p>
                                            <HiArrowRight className="mt-4 w-4 h-4 text-cyan-300/70 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                    )}

                    {/* Footer CTA */}
                    <Reveal className="mt-16">
                        <div className="relative glass ring-gradient overflow-hidden p-8 md:p-10 text-center">
                            <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />
                            <div className="relative">
                                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">Need help with your project?</h3>
                                <p className="text-white/55 mb-7">
                                    Let&apos;s discuss how Ojas Technologies can help.
                                </p>
                                <Magnetic>
                                    <Link href="/contact" className="group btn-glow">
                                        Start a Conversation
                                        <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </main>
            <Footer />
        </>
    );
}
