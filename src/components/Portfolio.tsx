import { ExternalLink } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Web Design", "Branding", "Mobile App"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MDczODM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNzY5ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MDgxMjc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzcwNzUwNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1602343457765-812c355ea50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rkm4lMjBkYXNoYm9hcmQlMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc3MDgxODQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Fitness App Design",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNzY5ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.category === activeCategory);

    return (
        <section className="py-20 relative bg-black">
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="mx-auto text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center">
                        Our{' '}
                        <span className="bg-gradient-to-r from-[#4f46e5] to-purple-500 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto text-center">Explore our latest projects and success stories</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2.5 rounded-xl text-white/70 font-medium transistion-colors duration-300 ${
                        activeCategory === category ? `bg-gradient-to-r from-[#4f46e5] to-purple-600 text-white/100 shadow-[0_8px_30px_rgba(79,70,229,0.3)] border border-transparent` 
                        : `bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20`
                        }`}>{category}

                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index}
                        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#4F46E5]/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)]">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                <div className="p-5 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                            <p className="text-white/70 text-sm">{project.category}</p>
                                        </div>
                                        <div className="bg-[#4F46E5] rounded-full w-10 h-10 inline-flex items-center justify-center border border-white/10 hover:border-white/50 transition-border duration-300 hover:cursor-pointer">
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-5 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="text-white/70 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}