import { Check, Sparkles, Star } from "lucide-react";

const plans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO optimization",
        "Contact form integration",
        "2 rounds of revisions",
        "30 days support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom UI/UX design",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "4 rounds of revisions",
        "90 days support",
        "Performance optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Premium custom design",
        "Full SEO & marketing suite",
        "Custom integrations",
        "Advanced analytics",
        "Unlimited revisions",
        "1 year priority support",
        "Dedicated project manager",
        "Training & documentation",
      ],
      popular: false,
    },
  ];

export default function Pricing() {
    return (
        <section className="py-20 relative bg-black">
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center">
                        Simple, <span className="bg-gradient-to-r from-[#4f46e5] to-purple-500 bg-clip-text text-transparent">
                            Transparent Pricing
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto text-center">
                        Choose the perfect plan for your business needs
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                        key={index}
                        className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:translate-y-[-4px] ${
                          plan.popular
                            ? "bg-gradient-to-br from-[#4F46E5]/10 to-purple-600/10 border-[#4F46E5]/40 shadow-[0_20px_60px_rgba(79,70,229,0.2)]"
                            : "bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-[#4F46E5]/30 hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)]"
                        }`}
                      >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-purple-500 text-white text-sm font-medium shadow-lg">
                                    <Sparkles className="w-4 h-4 text-white" />
                                    Most Popular
                                </div>
                            )}
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                                    <p className="text-white/50 text-sm">{plan.description}</p>
                                </div>
                                <div className="space-y-2 py-6">
                                    <p className="text-5xl font-bold text-white tracking-tight">{plan.price}</p>
                                    {plan.price !== "Custom" && (
                                        <div className="text-white/50 text-sm">One time payment</div>
                                    )}
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="space-y-4 py-2">
                                    {plan.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="flex items-center justify-center gap-2 rounded-full bg-[#4f46e5]/10 w-5 h-5  border border-[#4f46e5]/30 flex-shrink-0">
                                                <Check className="w-3 h-3 text-[#4f46e5]" />
                                            </div>
                                            <div>
                                                <p className="text-white/70 text-sm leading-relaxed">{feature}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        className={`w-full mt-5 py-3.5 font-medium rounded-xl transition-all duration-300 ${
                                            plan.popular
                                                ? "bg-gradient-to-r from-[#4f46e5] to-purple-500 text-white hover:from-[#6366f1] hover:to-purple-400 shadow-lg shadow-[#4f46e5]/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4f46e5]/50"
                                                : "bg-white/10 text-white border border-white/20 hover:bg-white/15"
                                        }`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}