import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const navLinks = [
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Testimonials",
    to: "/testimonials",
  },
  {
    name: "Pricing",
    to: "/pricing",
  },
  {
    name: "Contact",
    to: "/contact",
  }
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl w-full">
        <nav className="max-w-7xl mx-auto py-4 px-6 md:px-12 ">
        <motion.div
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="flex items-center justify-between">
            <Link to="/">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f46e5] to-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20">
                        <Sparkles className="w-5 h-5 text-white"></Sparkles>
                    </div>
                    <span className="text-2xl font-bold text-white">
                        Nova Digital
                    </span>
                </div>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <Link to={link.to} key={link.name} className="text-white/70 hover:text-white transition-colors relative group text-base">
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4f46e5] to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
            ))}
            </div>

            <Link to="/contact" className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#4f46e5] to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 hover:scale-103 transition-shadow transition-transform duration-300">Get Started</Link>
            
        </motion.div>
        </nav>
    </header>
  )
}