import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { Navbar } from "./components/navbar";
import { Magnetic, Reveal } from "./components/motion";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950">
                <div className="orb orb-a w-[460px] h-[460px] -top-32 -left-32 bg-cyan-500/20" />
                <div className="orb orb-b w-[520px] h-[520px] bottom-[-20%] right-[-15%] bg-violet-600/20" />
                <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
                <div className="relative text-center px-4 pt-24 pb-16">
                    <Reveal y={16}>
                        <h1 className="font-display font-semibold tracking-tighter leading-none text-[7rem] sm:text-[10rem] md:text-[13rem] text-gradient-animated">
                            404
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15} y={16} className="space-y-4 mt-2">
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">Page Not Found</h2>
                        <p className="text-white/55 max-w-md mx-auto">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3} y={16} className="mt-8">
                        <Magnetic>
                            <Link href="/" className="group btn-glow">
                                Back to Home
                                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Magnetic>
                    </Reveal>
                </div>
            </main>
        </>
    );
}
