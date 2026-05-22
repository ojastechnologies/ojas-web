"use client";
import { motion } from "framer-motion";
import { SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker, SiKubernetes } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const techStack = [
  { name: ".NET Core", Icon: SiDotnet },
  { name: "Blazor", Icon: SiBlazor },
  { name: ".NET MAUI", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Azure", Icon: TbBrandAzure },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "TypeScript", Icon: SiTypescript },
];

export function TechBar() {
  return (
    <section className="relative py-16 overflow-hidden bg-gray-50/50 border-y border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-10"
        >
          Technology Expertise
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <tech.Icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
