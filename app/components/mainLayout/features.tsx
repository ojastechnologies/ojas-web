"use client";
import { motion } from "framer-motion";
import { HiClock, HiCode, HiSupport, HiUserGroup, HiChip, HiAcademicCap } from "react-icons/hi";
import { SiReact, SiTypescript, SiTailwindcss, SiDocker, SiKubernetes, SiDotnet, SiFlutter, SiFigma, SiAdobecreativecloud, SiJira, SiNodedotjs, SiGooglecloud } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import { COMPANY_STATS } from "@/app/constants";

const features = [
    {
        icon: HiCode,
        title: "Full-Stack Development",
        description: "End-to-end development from responsive frontends to scalable backends, delivering complete, production-ready solutions.",
        technologies: [SiReact, SiTypescript, SiDotnet, SiNodedotjs],
        stats: { "Projects Delivered": COMPANY_STATS.projectsDelivered, "Code Quality": "99%" },
        delay: 0.1
    },
    {
        icon: HiChip,
        title: "Cloud Solutions & Microservices",
        description: "Cloud-native applications with robust microservices architecture on Azure, Google Cloud, and Docker/Kubernetes.",
        technologies: [TbBrandAzure, SiGooglecloud, SiDocker, SiKubernetes],
        stats: { "Uptime": "99.9%", "Performance": "Excellent" },
        delay: 0.2
    },
    {
        icon: HiUserGroup,
        title: "Client Collaboration",
        description: "Transparent development with regular updates and modern project management tools for clear communication.",
        technologies: [SiJira, SiFigma, SiAdobecreativecloud],
        stats: { "Client Satisfaction": COMPANY_STATS.clientSatisfaction, "Return Rate": "85%" },
        delay: 0.3
    },
    {
        icon: HiSupport,
        title: "Technical Support",
        description: "Round-the-clock maintenance and support. Our team keeps your applications running smoothly with fast response times.",
        technologies: [SiDocker, SiKubernetes, SiGooglecloud],
        stats: { "Response Time": "< 1hr", "Resolution Rate": "95%" },
        delay: 0.4
    },
    {
        icon: HiAcademicCap,
        title: "Mobile Development",
        description: "Cross-platform mobile apps with Flutter and React Native. Native performance, single codebase efficiency.",
        technologies: [SiFlutter, SiReact, SiTypescript],
        stats: { "App Rating": "4.8/5", "Platforms": "iOS & Android" },
        delay: 0.5
    },
    {
        icon: HiClock,
        title: "UI/UX Excellence",
        description: "User-centric design with modern aesthetics. Creating engaging interfaces that drive results.",
        technologies: [SiFigma, SiAdobecreativecloud, SiTailwindcss],
        stats: { "Design Systems": "50+", "User Satisfaction": "96%" },
        delay: 0.6
    }
];

export const Features = () => {
    return (
        <section id="features" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-mesh pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-head"
                >
                    <div className="section-badge">Core Capabilities</div>
                    <h2 className="section-title">
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            Technology Excellence Hub
                        </span>
                    </h2>
                    <p className="section-sub">Cutting-edge solutions built with industry best practices</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            whileHover={{ y: -4 }}
                            className="card-hover p-6"
                        >
                            <div className="space-y-5">
                                <div className="flex items-start justify-between">
                                    <div className="icon-box">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <motion.div
                                        whileHover={{ rotate: 45 }}
                                        className="text-gray-400"
                                    >
                                        <BsArrowUpRight className="w-5 h-5" />
                                    </motion.div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-body text-sm">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-4 border-t border-indigo-100">
                                    {feature.technologies.map((Tech, i) => (
                                        <Tech key={i} className="w-5 h-5 text-gray-400" />
                                    ))}
                                </div>

                                <div className="flex justify-between pt-4 border-t border-indigo-100">
                                    {Object.entries(feature.stats).map(([key, value]) => (
                                        <div key={key} className="text-xs">
                                            <span className="text-gray-400">{key}: </span>
                                            <span className="font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 p-8 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Projects Completed", value: COMPANY_STATS.projectsDelivered },
                            { label: "Client Satisfaction", value: COMPANY_STATS.clientSatisfaction },
                            { label: "Team Experts", value: COMPANY_STATS.teamSize },
                            { label: "Global Presence", value: `${COMPANY_STATS.countries} Countries` }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <div className="text-blue-100 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
