"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { TbBrain, TbDeviceAnalytics, TbCode, TbDeviceMobile, TbBrandGithub } from "react-icons/tb";
import { SiDotnet, SiReact, SiVuedotjs, SiBlazor, SiFlutter, SiDocker, SiKubernetes, SiNodedotjs, SiAmazonwebservices, SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    })
};

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-10 pb-2">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8 md:space-y-10"
          >
            <motion.div 
              variants={textVariants}
              custom={0.2}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-blue-500/10"
            >
              <TbBrain className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-blue-700 font-medium tracking-wide">
              Global Software Solutions
            </span>            </motion.div>

            <div className="space-y-6">
            <motion.h2 
  variants={textVariants}
  custom={0.4}
  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent tracking-wide"
>
  Your Trusted Development Partner
</motion.h2>
              <motion.div
                variants={textVariants}
                custom={0.6}
                className="relative"
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] drop-shadow-sm">
                  <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    Crafting Digital
                  </span>
                  <br />
                  <span className="relative">
                    Experiences
                    <motion.span
                      className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20 blur-2xl opacity-30"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </span>
                </h1>
              </motion.div>
              <motion.p
  variants={textVariants}
  custom={0.8}
  className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed"
>
  Delivering world-class software solutions with dedicated development teams that bring your vision to life through cutting-edge technology.
</motion.p>
            </div>

            <motion.div 
              variants={textVariants}
              custom={1}
              className="flex gap-4 flex-wrap"
            >
              <Link 
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 flex items-center gap-3 group"
              >
                Start Project
                <HiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link 
                target="_blank"
                href="https://github.com/ojastechnologies/ojas-web"
                className="px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 group"
              >
                <TbBrandGithub className="w-5 h-5" />
                View Source
              </Link>
            </motion.div>

            <motion.div 
              variants={textVariants}
              custom={1.2}
              className="flex gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              {[
                { number: "150+", label: "Global Clients" },
                { number: "98%", label: "Client Retention" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="space-y-1 group">
                  <motion.div 
                    className="text-2xl font-bold text-blue-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* Enhanced Visual Section */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative h-[600px] mt-8 lg:mt-0"
>
<div className="absolute inset-0 grid grid-cols-2 gap-6">
  <div className="space-y-6">
    {/* Full Stack Development Card */}
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-auto min-h-[280px] bg-gradient-to-br from-blue-600/80 to-sky-500/90 rounded-3xl p-4 sm:p-6 text-white shadow-xl backdrop-blur-lg border border-white/30 hover:shadow-blue-500/40 transition-all group"
    >
      <div className="flex justify-between items-start">
        <TbCode className="w-8 h-8 sm:w-10 sm:h-10 text-white/90" />
        <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
          Full Stack
        </span>
      </div>
      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Modern Web Stack</h3>
        <p className="text-xs sm:text-sm text-white/80 mb-3">
          Scalable web solutions with modern frameworks.
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs text-white/80">Frontend</span>
              <div className="flex flex-wrap gap-2">
                {[SiReact, SiVuedotjs, SiBlazor].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-white/80">Backend</span>
              <div className="flex flex-wrap gap-2">
                {[SiNodedotjs, SiDotnet].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Mobile Development Card */}
    <motion.div
      animate={{
        y: [5, -5, 5],
        rotate: [1, -1, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-auto min-h-[260px] bg-gradient-to-br from-indigo-500/90 via-purple-600/80 to-blue-600/90 rounded-3xl p-4 sm:p-6 text-white shadow-xl backdrop-blur-lg border border-white/30 hover:shadow-purple-500/40 transition-all group"
    >
      <div className="flex justify-between items-start">
        <TbDeviceMobile className="w-10 h-10 text-white/90" />
        <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
          Mobile
        </span>
      </div>
      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Cross-Platform Solutions</h3>
        <p className="text-xs sm:text-sm text-white/80 mb-3">
          Native-like mobile apps for iOS and Android.
        </p>
        <div className="flex flex-wrap gap-3">
          {[SiFlutter, SiReact, SiDotnet].map((Icon, i) => (
            <Icon
              key={i}
              className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </div>
    </motion.div>
  </div>

  <div className="space-y-6 mt-12">
    {/* Cloud Solutions Card */}
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-[260px] bg-gradient-to-br from-sky-500/90 via-teal-600/80 to-blue-500/90 rounded-3xl p-6 text-white shadow-xl backdrop-blur-lg border border-white/30 hover:shadow-teal-500/40 transition-all group"
    >
      <div className="flex justify-between items-start">
        <TbDeviceAnalytics className="w-10 h-10 text-white/90" />
        <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
          Cloud
        </span>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
        <p className="text-sm text-white/80 mb-4">
          Empowering microservices and orchestration with leading platforms.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <span className="text-xs text-white/80">Platforms</span>
            <div className="flex gap-2">
              {[VscAzureDevops, SiAmazonwebservices].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-white/80">DevOps</span>
            <div className="flex gap-2">
              {[SiKubernetes, SiDocker].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* AI Solutions Card */}
    {/* AI Solutions Card */}
<motion.div
  animate={{
    y: [5, -5, 5],
    rotate: [1, -1, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="h-auto min-h-[240px] bg-gradient-to-br from-purple-600/90 via-pink-500/80 to-red-500/90 rounded-3xl p-4 sm:p-6 text-white shadow-xl backdrop-blur-lg border border-white/30 hover:shadow-pink-500/40 transition-all group"
>
  <div className="flex justify-between items-start">
    <TbBrain className="w-8 h-8 sm:w-10 sm:h-10 text-white/90" />
    <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
      AI
    </span>
  </div>
  <div className="mt-4 sm:mt-6">
    <h3 className="text-lg sm:text-xl font-bold mb-2">AI-Powered Solutions</h3>
    <p className="text-xs sm:text-sm text-white/80 mb-3">
      Smart automation with GPT, TensorFlow and PyTorch.
    </p>
    <div className="flex gap-3">
      <SiTensorflow className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform" />
      <SiPytorch className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform" />
      <SiOpenai className="w-6 h-6 text-white/90 transform group-hover:scale-110 transition-transform" />
    </div>
  </div>
</motion.div>
  </div>
</div>

</motion.div>


        </div>
      </div>
    </div>
  );
};