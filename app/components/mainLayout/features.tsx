"use client";
import { motion } from "framer-motion";
import { HiClock, HiCode, HiSupport, HiUserGroup, HiLightBulb, HiAcademicCap, HiDeviceMobile } from "react-icons/hi";
import { SiReact, SiTypescript, SiTailwindcss, SiDocker, SiKubernetes, SiDotnet, SiFlutter, SiFigma, SiAdobecreativecloud, SiJira, SiNodedotjs, SiGooglecloud, SiBlazor, SiVuedotjs, SiAmazonwebservices, SiShortcut, SiSlack, SiTeamspeak, SiGooglemeet } from "react-icons/si";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { BiCloud } from "react-icons/bi";

const features = [
    {
        icon: HiCode,
        title: "Full-Stack Development",
        description: "End-to-end development using modern tech stack. From responsive frontends to scalable backends, we deliver complete solutions.",
        technologies: [SiDotnet, SiReact, SiVuedotjs, SiNodedotjs, SiBlazor, SiFlutter, SiFigma],
        stats: { "Projects Delivered": "150+", "Code Quality": "99%" },
        delay: 0.1
    },
    {
        icon: BiCloud,
        title: "Cloud Solutions",
        description: "Cloud-native applications with robust architecture. We leverage AWS and Google Cloud for scalable, reliable deployments.",
        technologies: [VscAzure, SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes,],
        stats: { "Uptime": "99.9%", "Performance": "Excellent" },
        delay: 0.2
    },
    {
        icon: HiUserGroup,
        title: "Client Collaboration",
        description: "Transparent development process with regular updates. We use modern project management tools to ensure clear communication.",
        technologies: [SiJira, BsGithub, SiFigma, SiShortcut, SiAdobecreativecloud],
        stats: { "Client Satisfaction": "98%", "Return Rate": "85%" },
        delay: 0.3
    },
    {
        icon: HiSupport,
        title: "Technical Support",
        description: "24/7 technical assistance and maintenance. Our dedicated support team ensures your applications run smoothly.",
        technologies: [SiSlack, SiGooglemeet, SiJira, SiShortcut, BsGithub],
        stats: { "Response Time": "< 1hr", "Resolution Rate": "95%" },
        delay: 0.4
    },
    {
        icon: HiDeviceMobile,
        title: "Cross-Platform Solutions",
        description: "Building high-performance mobile and desktop applications using Flutter, React Native, and .NET MAUI for seamless cross-platform experiences.",
        technologies: [SiFlutter, SiReact, SiDotnet, SiTypescript],
        stats: { "App Rating": "4.8/5", "Platform Coverage": "100%" },
        delay: 0.5
    },
    {
        icon: <HiClock></HiClock>,
        title: "UI/UX Excellence",
        description: "User-centric design approach with modern aesthetics. We create engaging interfaces that users love to interact with.",
        technologies: [SiFigma, SiAdobecreativecloud, SiTailwindcss],
        stats: { "Design Systems": "50+", "User Satisfaction": "96%" },
        delay: 0.6
    }
];

export const Features = () => {
    return (
        <section id="features" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 mb-6"
                    >
                        <HiLightBulb className="w-5 h-5 text-blue-600 animate-pulse" />
                        <span className="text-blue-700 font-medium">Our Core Capabilities</span>
                    </motion.div>

                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Technology Excellence Hub
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Delivering innovative solutions with cutting-edge technologies and industry best practices
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="relative space-y-6">
                                    <div className="flex items-start justify-between">
                                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <motion.div
                                            whileHover={{ rotate: 45 }}
                                            className="text-blue-600"
                                        >
                                            <BsArrowUpRight className="w-6 h-6" />
                                        </motion.div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-4 border-t border-blue-100">
                                        {feature.technologies.map((Tech, i) => (
                                            <Tech key={i} className="w-6 h-6 text-blue-600 opacity-75 hover:opacity-100 transition-opacity transform hover:scale-110" />
                                        ))}
                                    </div>

                                    <div className="flex justify-between pt-4 border-t border-blue-100">
                                        {Object.entries(feature.stats).map(([key, value]) => (
                                            <div key={key} className="text-sm">
                                                <span className="text-gray-500">{key}: </span>
                                                <span className="font-semibold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl shadow-blue-500/20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Projects Completed", value: "500+" },
                            { label: "Client Satisfaction", value: "98%" },
                            { label: "Team Experts", value: "50+" },
                            { label: "Global Presence", value: "10+ Countries" }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <div className="text-blue-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
