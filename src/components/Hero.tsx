import { motion, useScroll, useTransform } from "motion/react";
import { TOAST_ORDER_LINK } from "../constants";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with subtle gradient instead of image */}
      <div className="absolute inset-0 z-0 bg-transparent">
        <div className="absolute inset-0 bg-radial-gradient from-gold/5 to-transparent opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-gold font-sans tracking-[0.3em] uppercase text-xs mb-6 font-bold">
            Experience the Mediterranean
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter leading-[1.1] md:leading-[1.05] text-cream drop-shadow-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              Authentic Flavor.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="italic font-light gold-gradient block"
            >
              Fresh Grill.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-cream block mt-4"
            >
              Holy Land Grill.
            </motion.span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            From sizzling shawarmas to handcrafted falafels—experience the true taste of Mediterranean street food, made fresh daily with premium ingredients and time-honored recipes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={TOAST_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-gold text-charcoal font-bold uppercase tracking-widest text-xs hover:bg-cream transition-all duration-300 flex items-center justify-center"
            >
              Order Now
            </a>
            <a 
              href="#menu"
              className="w-full sm:w-auto px-10 py-5 border border-cream/20 text-cream font-bold uppercase tracking-widest text-xs hover:bg-cream hover:text-charcoal transition-all duration-300 flex items-center justify-center"
            >
              View Menu
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 border border-gold/40 text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
