import { Quote, Star } from "lucide-react";

const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODExNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Nova Digital transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations. Our conversion rate has increased by 150%!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignCo",
      image: "https://images.unsplash.com/photo-1678542230173-8e2c3eb87c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDczMTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Working with Nova Digital was an absolute pleasure. They delivered a stunning website that perfectly captures our brand identity. Highly professional and incredibly talented team!",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Marketing Director, GrowthLab",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc5MjkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The best digital agency we've ever worked with. They understood our vision from day one and delivered results that far exceeded our goals. Can't recommend them enough!",
      rating: 5,
    },
  ];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 relative bg-black overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center">
                        What Our{' '}
                            <span className="bg-gradient-to-r from-[#4f46e5] to-purple-500 bg-clip-text text-transparent">
                                Clients Say
                            </span> 
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto text-center">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#4F46E5]/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] p-8 rounded-2xl">
                        <div className="absolute top-10 right-10 opacity-5">
                            <Quote className="w-15 h-15 text-[#4f46e5]" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="flex gap-1">
                                {Array.from({length: testimonial.rating}).map((_, index) => (
                                    <Star className="w-5 h-5 text-[#4f46e5] fill-[#4f46e5]" key={index} />
                                ))}
                            </div>

                            <div>
                                <p className="text-white/70 leading-relaxed text-sm">{testimonial.quote}</p>
                            </div>

                            <div className="h-px bg-white/10 my-4" />
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                                </div>
                                <div>
                                    <p className="text-white text-lg font-semibold">{testimonial.name}</p>
                                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}