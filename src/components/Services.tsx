import { Code2, Palette, Sparkles, Megaphone } from "lucide-react";
import { motion } from "motion/react";

const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and deliver seamless digital experiences.",
    },
    {
      icon: Sparkles,
      title: "Branding",
      description: "Comprehensive brand identity systems that capture your essence and resonate with your audience.",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Data-driven digital marketing strategies that amplify your reach and drive measurable growth.",
    },
  ];

export default function Services () {
    return (
        <section id="services" className="py-20 relative bg-black overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
                <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}>
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center">
                            Our <span className="bg-gradient-to-r from-[#4f46e5] to-purple-500 bg-clip-text text-transparent">
                                Services
                        </span></h2>
                        <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto text-center">We offer a wide range of services to help you grow your business.</p>
                    </div>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                        key={index}
                        initial={{opacity: 0, x: 40}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.3, delay: index * 0.1}}
                        className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#4F46E5]/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)]">
                        
                           <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/0 to-purple-600/0 group-hover:from-[#4F46E5]/10 group-hover:to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           <div className="relative z-10 space-y-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4f46e5]/20 to-purple-600/20 border border-[#4f46e5]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#4f46e5]/40 transition-all duration-500">
                                    <service.icon className="text-xl font-semibold text-white tracking-tight"/>
                                </div>
                                <h3 className="text-xl font-semibold text-white tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed text-base">
                                    {service.description}
                                </p>
                            </div>
                        
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}