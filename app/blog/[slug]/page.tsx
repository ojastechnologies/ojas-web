import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/mainLayout/footer";
import { getPostBySlug, getAllSlugs, getAllPosts } from "../lib";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

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
            <main className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
                <Navbar />

                {/* Dark hero header */}
                <div className="bg-gradient-to-br from-indigo-900 via-blue-900">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
                        <div className="mb-8">
                            <Link href="/blog" className="text-sm text-blue-200/70 hover:text-white transition-colors">
                                ← Back to Blog
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-blue-200/80">{tag}</span>
                            ))}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-blue-200/60">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readingTime}</span>
                            <span>·</span>
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div
                        className="prose prose-indigo max-w-none
                            prose-headings:text-gray-900 prose-headings:font-bold
                            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                            prose-strong:text-gray-900
                            prose-ul:mb-6 prose-li:text-gray-600
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-gray-700
                            prose-pre:bg-gradient-to-r prose-pre:from-indigo-900 prose-pre:via-blue-900 prose-pre:to-indigo-900 prose-pre:text-indigo-100 prose-pre:rounded-xl prose-pre:p-4
                            prose-table:w-full prose-table:border-collapse prose-th:text-left prose-th:font-semibold prose-th:pb-2 prose-th:pr-4 prose-td:py-2 prose-td:pr-4 prose-td:border-b prose-td:border-indigo-100"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Related Posts</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {relatedPosts.map((rp) => (
                                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group p-4 rounded-xl bg-white border border-indigo-100 hover:border-indigo-200 transition-colors">
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {rp.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 font-medium">{tag}</span>
                                            ))}
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 leading-snug">{rp.title}</h4>
                                        <p className="text-xs text-gray-500 line-clamp-2">{rp.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer CTA */}
                    <div className="mt-16 p-8 rounded-xl bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Need help with your project?</h3>
                        <p className="text-gray-500 mb-6">
                            Let&apos;s discuss how Ojas Technologies can help.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
