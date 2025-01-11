'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi';
import { FiUsers, FiAward, FiCode } from 'react-icons/fi';

export const About = () =>  {
    return (
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Enhanced gradient background to match hero section */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Section with Repositioned Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-1">
                <Image
                  src="/img/full logo.jpeg"
                  alt="Ojas Technologies"
                  width={600}
                  height={600}
                  className="rounded-3xl object-cover"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-500/20" />
              </div>
              
              {/* Repositioned Stats with matching UI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 left-10 right-10 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl ring-1 ring-black/5 border border-blue-100"
              >
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Projects', value: '150+' },
                    { label: 'Clients', value: '50+' },
                    { label: 'Experience', value: '3+ Years' },
                    { label: 'Team Size', value: '20+' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-blue-600 font-bold text-lg">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
  
            {/* Content Section with matching styles */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 pt-10"
            >
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                    About Us
                  </span>
                </h2>
                <p className="text-lg font-semibold text-blue-600">
                  Your Trusted IT Partner Since 2020
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Ojas Technologies (Pvt) Ltd is a premier development and design company, 
                established in 2020 with a vision to deliver exceptional software solutions. 
                Our technology innovation center in Nepal serves as a hub for creating 
                cutting-edge web, mobile, and creative design solutions for businesses worldwide.
              </p>
  
              {/* Core Values with matching card styles */}
              <div className="grid gap-6">
                {[
                  {
                    icon: FiCode,
                    title: "Technical Excellence",
                    description: "Delivering top-tier software solutions with cutting-edge technologies"
                  },
                  {
                    icon: FiUsers,
                    title: "Client-Centric Approach",
                    description: "Dedicated to understanding and exceeding client expectations"
                  },
                  {
                    icon: FiAward,
                    title: "Quality Assurance",
                    description: "Rigorous testing and quality control for reliable solutions"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 backdrop-blur-sm border border-blue-100"
                  >
                    <value.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* CTA matching hero section style */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
              >
                Learn More About Our Services
                <HiCheckCircle className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
