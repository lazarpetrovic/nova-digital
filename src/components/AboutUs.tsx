import { Briefcase } from "lucide-react";
import { Users } from "lucide-react";
import { Award } from "lucide-react";
import { TrendingUp } from "lucide-react";

const stats = [
    { icon: Briefcase, label: "Projects", value: "120+" },
    { icon: Users, label: "Clients", value: "50+" },
    { icon: Award, label: "Awards", value: "15+" },
    { icon: TrendingUp, label: "Growth", value: "200%" },
  ];

export default function AboutUs() {
    return (
        <section className="py-20 relative bg-black">
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex flex-row align-center items-center gap-10">
                    <div className="relative flex-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] to-purple-600/20 rounded-3xl blur-3xl opacity-70"></div>
                        <div className="relative z-10 overflow-hidden border border-white/20 shadow-2xl rounded-3xl">
                            <img 
                                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzA3MTU5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Team collaboration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="space-y-5 flex-1">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">About{' '}
                                <span className="bg-gradient-to-r from-[#4f46e5] to-purple-500 bg-clip-text text-transparent">Nova Digital</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed">
                                We're a team of professional developers, designers, and strategists dedicated to crafting exceptional digital experiences that drive growth and innovation.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Since 2020, we've helped bussinesses of all sizes transform their digital presence with cutting-edge solutions that combine creativity, technology, and data-driven insights.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#4F46E5]/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] p-6 rounded-2xl">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4f46e5]/20 to-purple-600/20 border border-[#4f46e5]/20 flex items-center justify-center">
                                            <stat.icon className="w-5 h-5 text-[#4f46e5]" />
                                        </div>
                                        <div>
                                            <div>
                                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                            </div>
                                            <div>
                                                <span className="text-white/70 text-sm mt-1">{stat.label}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}