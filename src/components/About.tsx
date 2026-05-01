import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-olive/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Story</span>
          <h2 className="font-serif text-5xl md:text-8xl text-cream mb-12 leading-tight">
            Taste of the <br />
            <span className="italic font-light gold-gradient">Holy Land</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div>
              <p className="text-cream/70 text-2xl leading-relaxed font-light italic mb-8">
                "Holy Land Grill serves authentic Mediterranean food made fresh daily with bold flavors, quality ingredients, and traditional recipes."
              </p>
            </div>
            <div>
              <p className="text-cream/60 text-lg leading-relaxed font-light mb-12">
                From our signature plates to our freshly prepared wraps, every dish is a tribute to the vibrant culinary traditions of the Mediterranean. We believe that great food starts with the best ingredients and a dedication to authentic methods.
              </p>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-gold text-2xl italic font-light tracking-wider">Rick</span>
                <span className="text-cream/40 uppercase tracking-[0.2em] text-[10px]">Founder</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
