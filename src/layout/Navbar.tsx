import { useState } from "react";
import { motion} from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl w-full overflow-hidden">
        <nav className="container max-w-7xl mx-auto py-4 px-6 md:px-12 ">
        <motion.div
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f46e5] to-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20">
                        <Sparkles className="w-5 h-5 text-white"></Sparkles>
                    </div>
                    <span className="text-2xl font-bold text-white">
                        Nova Digital
                    </span>
                </div>
            </a>
            
            <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  className="text-white/70 hover:text-white transition-colors relative group text-base"
                >
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4f46e5] to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
            ))}
            </div>

            <div className="hidden lg:block">
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-[#4f46e5] to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 hover:scale-103 transition-shadow transition-transform duration-300">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </motion.div>

        {/* Mobile menu */}
        
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 px-4 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-base"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 mx-4 py-3.5 text-center bg-gradient-to-r from-[#4f46e5] to-purple-600 text-white rounded-xl font-medium"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </nav>
    </header>
  )
}