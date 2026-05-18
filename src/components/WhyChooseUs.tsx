import { motion } from "motion/react";
import { Leaf, Clock, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Sourced daily to ensure the highest quality and most vibrant flavors in every bite.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quality Mediterranean street food, served hot and fresh when you need it most.",
  },
  {
    icon: Sparkles,
    title: "Authentic Flavor",
    description: "Traditional recipes passed down through generations, made with love and spice.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 py-32 bg-charcoal border-y border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="py-12 md:py-0 md:px-12 first:pl-0 last:pr-0 group"
            >
              <span className="block text-gold/30 font-serif italic text-4xl mb-6">0{idx + 1}</span>
              <div className="flex items-center gap-4 mb-6">
                <feature.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-serif text-3xl text-cream tracking-tight">{feature.title}</h3>
              </div>
              <p className="text-cream/50 text-base leading-relaxed font-light tracking-wide group-hover:text-cream/80 transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
