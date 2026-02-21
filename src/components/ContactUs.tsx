import { Mail, Phone, MapPin, Send } from "lucide-react";

const iconMap = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};
    
const contactCards = [
{
    title: "Email Us",
    icon: "mail",
    lines: ["hello@novadigital.com", "support@novadigital.com"],
},
{
    title: "Call Us",
    icon: "phone",
    lines: ["+1 (555) 123-4567", "Mon-Fri, 9AM - 6PM EST"],
},
{
    title: "Visit Us",
    icon: "map",
    lines: ["123 Innovation Street", "San Francisco, CA 94103"],
},
];

const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about your project...",
    },
  ];

export default function ContactUs() {
    return (
        <section id="contact" className="py-20 relative bg-black">
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
                <div className="space-y-8 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center">
                        Let's{' '}<span className="bg-gradient-to-r from-[#4f46e5] to-purple-600 bg-clip-text text-transparent">Work Together</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto text-center">
                        Have a project in mind? Get in touch and let's create something amazing
                    </p>
                    </div>
                    <div className="flex flex-row gap-6 justify-center">
                        <div className="flex-1 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
                            <div className="space-y-6 text-left">
                                {formFields.map((field, index) => (
                                    <div key={index} className="mb-4 space-y-3">
                                        <label htmlFor={field.name} className="block text-white mb-2.5 text-sm font-medium">{field.label}</label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                rows={5}
                                                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/50 focus:border-[#4F46E5]/50 transition-all resize-none"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/50 focus:border-[#4F46E5]/50 transition-all resize-none"
                                            />
                                        )}
                                    </div>
                                ))}
                                <button type="submit" className="w-full flex items-center justify-center gap-2 group px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white font-medium hover:scale-103 hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] transition-all duration-300">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            {contactCards.map((card, index) => {
                                const Icon = iconMap[card.icon as keyof typeof iconMap];
                                return (
                                <div key={index} className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6 hover:border-[#4F46E5]/30 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4f46e5]/20 to-purple-600/20 border border-[#4f46e5]/20 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-[#4f46e5]" />
                                        </div>
                                        <div className="space-y-1 text-left">
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <div className="space-y-1">
                                                {card.lines.map((line, i) => (
                                                    <p key={i} className="text-white/70 text-sm">{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
        </section>
    )
}