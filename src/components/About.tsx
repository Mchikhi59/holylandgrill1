import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-40 bg-charcoal relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden group">
              <img 
                src="https://res.cloudinary.com/dkbp4licj/image/upload/v1777821876/Seasoned_fries_hod5il.jpg" 
                alt="Our Food Culture"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-sage/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000" />
            </div>
            {/* Founders signature area floating over image */}
            <div className="absolute -bottom-6 right-12 bg-sage p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="block font-serif text-charcoal text-2xl italic mb-1 tracking-tighter">Rick & Chikhi</span>
              <span className="block text-charcoal/60 uppercase tracking-[0.2em] text-[8px] font-bold">Founders & Visionaries</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-10 border-gold/30 border p-3 tracking-widest leading-none">
              The Heritage
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-cream mb-12 tracking-tighter leading-none">
              A Legacy of <br />
              <span className="italic gold-gradient font-light">Flavor.</span>
            </h2>
            <div className="h-[1px] w-32 bg-gold/50 mb-12" />
            <p className="text-cream/70 text-2xl md:text-3xl leading-snug font-light italic mb-10 max-w-xl">
              "We don't just serve food; we serve memories of the Holy Land, wrapped in warmth and tradition."
            </p>
            <p className="text-cream/50 text-base md:text-lg leading-relaxed font-light mb-16 max-w-lg">
              Every spice, every cut, and every grill mark is intentional. From our signature "Bag-O-Grub" to our hand-made falafels, we bring the authentic street soul of the Mediterranean to your doorstep.
            </p>
            
            <a 
              href="#menu" 
              className="inline-block text-[10px] uppercase tracking-[0.4em] text-gold font-bold hover:text-white transition-colors border-b border-gold/30 pb-2"
            >
              See our creations &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
