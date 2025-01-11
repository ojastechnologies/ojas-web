"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";

const services = [
    {
        title: "Web Development",
        description: "We design and develop sophisticated websites and web applications of all scales, focusing on performance, user experience, and modern technologies.",
        image: "/img/web.png",
        delay: 0.1,
        stats: { "Projects": "100+", "Success Rate": "99%" }
    },
    {
        title: "Mobile Application Development",
        description: "We create innovative mobile applications that meet your specific requirements, delivering native-like experiences across platforms.",
        image: "/img/mbile app.png",
        delay: 0.2,
        stats: { "Apps Delivered": "50+", "App Rating": "4.8/5" }
    },
    {
        title: "Desktop Application Development",
        description: "We develop powerful desktop applications optimized for Windows, macOS, and Linux, tailored to your business needs.",
        image: "/img/desktop app.png",
        delay: 0.3,
        stats: { "Platforms": "3+", "Client Satisfaction": "98%" }
    },
    {
        title: "Graphics Design",
        description: "Our expert designers create attractive and innovative visual solutions that elevate your brand identity and communication.",
        image: "/img/graphics.png",
        delay: 0.4,
        stats: { "Designs Created": "500+", "Brand Success": "95%" }
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive digital and social media marketing services to boost your online presence and reach your target audience effectively.",
        image: "/img/digital-marketting.png",
        delay: 0.5,
        stats: { "ROI Average": "300%", "Growth Rate": "150%" }
    },
    {
        title: "Search Engine Optimization",
        description: "Strategic SEO services to improve your online visibility, drive organic traffic, and achieve higher search engine rankings.",
        image: "/img/seo.png",
        delay: 0.6,
        stats: { "Ranking Improvement": "80%", "Traffic Growth": "200%" }
    }
];

function Services() {
    return (
        <section id="services" className="relative py-24 overflow-hidden">
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
                        <span className="text-blue-700 font-medium">Our Services</span>
                    </motion.div>

                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Comprehensive Digital Solutions
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Empowering businesses with cutting-edge technology solutions and creative services
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="relative space-y-6">
                                    <div className="flex justify-center">
                                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-2">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-center bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-center leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between pt-6 border-t border-blue-100">
                                        {Object.entries(service.stats).map(([key, value]) => (
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
            </div>
        </section>
    );
}

export { Services };
