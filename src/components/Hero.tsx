import { motion, useScroll, useTransform } from "motion/react";
import { TOAST_ORDER_LINK } from "../constants";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden">
      {/* Background Image Container */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://res.cloudinary.com/dkbp4licj/image/upload/v1779065525/front_dtiqfq.jpg" 
          alt="Holy Land Grill Exterior"
          className="w-full h-full object-cover grayscale-[0.1]"
        />
        {/* Overlays for depth and text legibility */}
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 pt-20">
        <div className="max-w-6xl p-8 md:p-12 bg-charcoal/20 backdrop-blur-sm rounded-3xl border border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="inline-block text-gold font-sans tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 font-black border-l-4 border-gold pl-6 py-1">
              Est. 2024 • Authentic Flavor
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] mb-10 tracking-tighter leading-none text-cream drop-shadow-2xl">
              Holy Land <span className="italic font-light gold-gradient">Grill.</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-sans text-xl md:text-2xl text-cream/80 mb-12 max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-md"
            >
              Experience the true taste of Mediterranean street food, where ancient recipes meet modern passion. Sizzling shawarmas, crispy falafels, and soulful spices.
            </motion.p>
            
            <div className="flex flex-wrap gap-8">
              <a 
                href={TOAST_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-14 py-6 bg-gold text-charcoal font-black uppercase tracking-[0.3em] text-[11px] overflow-hidden rounded-sm transition-all shadow-2xl hover:shadow-gold/20"
              >
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a 
                href="#menu"
                className="px-14 py-6 border-2 border-white/20 backdrop-blur-md text-white font-black uppercase tracking-[0.3em] text-[11px] hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
              >
                Explore Menu
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge (Refined) */}
      <motion.div 
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden xl:flex w-48 h-48 bg-sage rounded-full items-center justify-center p-8 text-center text-charcoal font-black uppercase tracking-tighter text-sm leading-tight shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30"
      >
        Fresh Selection <br/> Hand-Crafted
      </motion.div>

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
