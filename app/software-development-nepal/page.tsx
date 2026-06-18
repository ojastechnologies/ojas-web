import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/mainLayout/footer";
import { COMPANY_STATS } from "../constants";

export const metadata: Metadata = {
    title: "Software Development & IT Outsourcing Nepal | Ojas Technologies",
    description:
        "Looking for software companies in Nepal? Ojas Technologies offers expert IT outsourcing and IT outstaffing services from Kathmandu. The best software company Nepal has to offer — serving clients across South Asia.",
    alternates: {
        canonical: "https://ojastech.io/software-development-nepal",
    },
    keywords: [
        "software companies in Nepal",
        "IT outsourcing Nepal",
        "IT outstaffing Nepal",
        "best software company Nepal",
        "software development Kathmandu",
        "South Asia",
        "offshore software development Nepal",
        "hire developers Nepal",
        ".NET development Nepal",
        "React developers Nepal",
    ],
    openGraph: {
        title: "Software Development & IT Outsourcing in Nepal | Ojas Technologies",
        description:
            "Expert software development and IT outstaffing services from Kathmandu, Nepal. Timezone-aligned, cost-effective, English-proficient teams serving clients worldwide.",
        url: "https://ojastech.io/software-development-nepal",
        siteName: "Ojas Technologies",
        type: "website",
        images: [{ url: "/img/full logo.jpeg", width: 600, height: 600, alt: "Ojas Technologies - Software Development Nepal" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development & IT Outsourcing Nepal | Ojas Technologies",
        description:
            "Expert software development and IT outstaffing services from Kathmandu, Nepal. Timezone-aligned, cost-effective, English-proficient teams.",
        images: ["/img/full logo.jpeg"],
    },
};

export default function SoftwareDevelopmentNepalPage() {
    return (
        <>
            <main className="min-h-screen bg-white">
                <Navbar />

                {/* ─── Dark Hero ─── */}
                <section className="bg-gradient-to-br from-indigo-900 via-blue-900">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-200 bg-white/10 mb-6">
                            Software Development in Nepal
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                            Software Development &amp; IT Outsourcing in Nepal
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-200/70 max-w-3xl mx-auto leading-relaxed">
                            Nepal has emerged as a premier destination for software development and IT outsourcing in South Asia.
                            With a 5+ hour timezone overlap with the US East Coast, strong English proficiency, and competitive rates,
                            Nepali software companies deliver world-class solutions for global clients.
                        </p>
                        <div className="mt-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-900 font-semibold text-lg hover:bg-indigo-50 transition-colors"
                            >
                                Start Your Project
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─── Stats Section ─── */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-gray-900">{COMPANY_STATS.yearsExperience}</p>
                                <p className="text-sm text-gray-500 mt-1">Years of Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-gray-900">{COMPANY_STATS.teamSize}</p>
                                <p className="text-sm text-gray-500 mt-1">Skilled Developers</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-gray-900">{COMPANY_STATS.clients}</p>
                                <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-gray-900">{COMPANY_STATS.countries}</p>
                                <p className="text-sm text-gray-500 mt-1">Countries Served</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── Why Nepal Section ─── */}
                <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Choose Nepal for Software Development?</h2>
                        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
                            Nepal combines technical talent with business-friendly advantages that make it one of the best
                            destinations for IT outsourcing and IT outstaffing in South Asia.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl border border-indigo-200 p-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Timezone Advantage</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Nepal Standard Time (UTC+5:45) offers 5+ hours of overlap with US East Coast business hours
                                    and full overlap with Europe. Your team works during your day — no overnight shifts required.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-xl border border-indigo-200 p-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Efficiency</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Senior developers in Nepal cost $3,000–$6,000 per month — a fraction of US or European rates
                                    — without compromising on quality. You get enterprise-grade talent at offshore rates.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-xl border border-indigo-200 p-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a12 12 0 0118 0M3 5v14a12 12 0 0118 0V5M3 5h18" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">English Proficiency</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    English is the primary language of instruction in Nepali universities. Developers communicate
                                    fluently in written and spoken English — no language barriers during standups, code reviews,
                                    or client meetings.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── Our Services ─── */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Software Development Services</h2>
                        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
                            As one of the leading software companies in Nepal, we offer a full range of development and
                            IT outsourcing services.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 rounded-xl bg-white border border-indigo-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Web Development</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Full-stack web applications built with .NET Core, React, Next.js, and Blazor. Scalable,
                                    secure, and designed for performance.
                                </p>
                                <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:underline">
                                    View Portfolio →
                                </Link>
                            </div>
                            <div className="p-6 rounded-xl bg-white border border-indigo-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App Development</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Cross-platform mobile apps using .NET MAUI, React Native, and Flutter. Native-like
                                    experiences for iOS and Android.
                                </p>
                                <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:underline">
                                    View Portfolio →
                                </Link>
                            </div>
                            <div className="p-6 rounded-xl bg-white border border-indigo-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">IT Outstaffing &amp; Dedicated Teams</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Scale your engineering team instantly with dedicated .NET, React, and cloud engineers
                                    from Nepal who integrate into your workflow.
                                </p>
                                <Link href="/hire-developers" className="text-sm font-semibold text-blue-600 hover:underline">
                                    Hire Developers →
                                </Link>
                            </div>
                            <div className="p-6 rounded-xl bg-white border border-indigo-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Automation</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Custom AI agents, chatbots, document processing, and LLM-powered solutions to automate
                                    your business workflows.
                                </p>
                                <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:underline">
                                    View Portfolio →
                                </Link>
                            </div>
                            <div className="p-6 rounded-xl bg-white border border-indigo-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud &amp; DevOps</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Azure cloud architecture, Kubernetes, CI/CD pipelines, and hybrid cloud deployments
                                    managed by experienced cloud engineers.
                                </p>
                                <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:underline">
                                    View Portfolio →
                                </Link>
                            </div>
                            <div className="p-6 rounded-xl bg-white border border-indigo-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Legacy Modernization</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Modernize legacy systems to modern architectures — migrate from monolithic to
                                    microservices, upgrade frameworks, and improve performance.
                                </p>
                                <Link href="/portfolio" className="text-sm font-semibold text-blue-600 hover:underline">
                                    View Portfolio →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── CTA Section ─── */}
                <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Work with the Best Software Company in Nepal?
                        </h2>
                        <p className="text-lg text-blue-200/70 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss your project. Whether you need IT outsourcing, IT outstaffing, or a complete
                            custom software solution, our team in Kathmandu is ready to help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold text-lg hover:from-indigo-700 hover:to-blue-600 transition-all"
                        >
                            Get in Touch
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
