import {  Instagram, Sparkles, Twitter, Linkedin, Github } from "lucide-react";

const navigation = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
      {name: "Pricing", href: "#pricing" },
    ],
    services: [
      { name: "Web Development", href: "#portfolio" },
      { name: "UI/UX Design", href: "#portfolio" },
      { name: "Branding", href: "#portfolio" },
      { name: "Marketing", href: "#portfolio" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

export default function Footer() {
    return (
        <footer className="py-20 relative bg-black overflow-hidden border-t border-white/20">
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/20 pb-10">
                    <div className="space-y-4">
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f46e5] to-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20">
                                <Sparkles className="w-5 h-5 text-white"></Sparkles>
                            </div>
                            <h3 className="text-white text-2xl font-bold">Nova Digital</h3>
                        </div>
                        <p className="text-white/50 text-base max-w-md">
                            Creating exceptional digital experiences that transform businesses and inspire users worldwide.
                        </p>
                        <div className="flex flex-row items-center gap-4">
                            <a className="group hover:bg-[#4f46e5] transition-colors duration-300 w-10 h-10 bg-white/7 rounded-xl  border border-white/10 flex items-center justify-center" href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300"></Twitter>
                            </a>
                            <a className="group hover:bg-[#4f46e5] transition-colors duration-300 w-10 h-10 bg-white/7 rounded-xl  border border-white/10 flex items-center justify-center" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300"></Linkedin>
                            </a>
                            <a className="group hover:bg-[#4f46e5] transition-colors duration-300 w-10 h-10 bg-white/7 rounded-xl  border border-white/10 flex items-center justify-center" href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300"></Github>
                            </a>
                            <a className="group hover:bg-[#4f46e5] transition-colors duration-300 w-10 h-10 bg-white/7 rounded-xl  border border-white/10 flex items-center justify-center" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300"></Instagram>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-xl font-bold">Company</h3>
                        <ul className="flex flex-col gap-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-white/50 text-[15px] hover:text-[#4f46e5] transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-xl font-bold">Services</h3>
                        <ul className="flex flex-col gap-2">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-white/50 text-[15px] hover:text-[#4f46e5] transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-xl font-bold">Legal</h3>
                        <ul className="flex flex-col gap-2">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-white/50 text-[15px] hover:text-[#4f46e5] transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-6">
                    <div className="mx-auto md:mx-0">
                        <span className="text-white/50 text-sm">© 2026 Nova Digital. All rights reserved.</span>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-white/50 text-sm">Built with passion and creativity.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}