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
    <section className="py-24 bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center group"
            >
              <div className="mb-8 relative inline-block">
                <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                <feature.icon className="w-12 h-12 text-gold relative z-10 mx-auto" />
              </div>
              <h3 className="font-serif text-2xl text-cream mb-4 font-light tracking-wide">{feature.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed font-light max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
