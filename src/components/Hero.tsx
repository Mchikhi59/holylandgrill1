import { motion, useScroll, useTransform } from "motion/react";
import { TOAST_ORDER_LINK } from "../constants";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with subtle gradient instead of image */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <div className="absolute inset-0 bg-radial-gradient from-gold/5 to-transparent opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-gold font-sans tracking-[0.3em] uppercase text-sm mb-4 font-semibold">
            Authentic Mediterranean
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight leading-none text-cream">
            HOLY LAND <br />
            <span className="italic font-light gold-gradient">GRILL</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-light tracking-wide italic">
            Food Fresh Off The Grill, Served with Love.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu"
              className="w-full sm:w-auto px-10 py-5 bg-gold text-charcoal font-semibold uppercase tracking-widest text-sm hover:bg-cream transition-colors duration-300 flex items-center justify-center group"
            >
              View Menu
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={TOAST_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border border-cream/30 text-cream font-semibold uppercase tracking-widest text-sm hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              Order Online
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
