import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Particle } from "../ui/Particles";

export default function Hero() {
    return (
        <section className="relative min-h-screen items-center justify-center overflow-hidden">
            {/* Purple gradient — full section */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F20] to-[#170A25]" />

            {/* Grid only inside centered circle (transparent elsewhere) */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]
                [mask-image:radial-gradient(circle_50vmin_at_50%_50%,black,transparent)] 
                [-webkit-mask-image:radial-gradient(circle_50vmin_at_50%_50%,black,transparent)] [mask-size:100%_100%] 
                [-webkit-mask-size:100%_100%]"
                aria-hidden
            />

            {Array.from({ length: 20 }).map((_, index) => (
                <Particle key={index} offsetX={index * 20} side="left" delay={index * 0.1} duration={8 + Math.random() * 6} />
            ))}

            {Array.from({ length: 20 }).map((_, index) => (
                <Particle key={index} offsetX={index * 20} side="right" delay={index * 0.1} duration={8 + Math.random() * 6} />
            ))}

            <motion.div
            animate={{
                opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
            }}
            className="absolute left-0 top-0 h-full w-[300px]
            bg-gradient-to-r from-purple-600/20 to-transparent
            blur-2xl"
            />

            <motion.div
            animate={{
                opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
            }}
            className="absolute right-0 top-0 h-full w-[300px]
            bg-gradient-to-r from-purple-600/20 to-transparent
            blur-2xl"
            />

            <motion.div
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className="absolute inset-0 flex flex-col items-center justify-center sm:px-6">

                <div className="container mx-auto flex flex-col items-center justify-center gap-12 max-w-4xl pt-20">
                    <h1 className="text-7xl font-bold text-white text-center">We Build Digital{' '}<br/>
                        <span className="bg-gradient-to-r from-[#4f46e5] to-[#4F46E5]/70 bg-clip-text text-transparent">Experiences<br/></span>
                        {' '}That Convert
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl text-center leading-relaxed">              
                        Transform your brand with cutting-edge web design, development, and digital marketing solutions that drive real results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/contact" className="px-8 py-3 bg-gradient-to-br from-[#4f46e5] to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 hover:scale-103 transition-shadow transition-transform duration-300">
                            Get Started
                        </Link>
                        <Link to="/portfolio" className="px-8 py-3 text-white font-medium border border-white/10 rounded-xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            Portfolio
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="absolute -bottom-10 left-0 w-full h-50 bg-gradient-to-b from-transparent to-black">

            </div>
        </section>
    )
}