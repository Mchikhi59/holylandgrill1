import { motion } from "motion/react";
import { ClipboardList } from "lucide-react";

export default function Catering() {
  return (
    <section id="catering" className="py-32 relative overflow-hidden bg-black/20 border-y border-white/5 scroll-mt-32">
      {/* Background with texture instead of image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Events & Parties</span>
          <h2 className="font-serif text-5xl md:text-7xl text-cream mb-8 font-light italic">
            Let Us <span className="gold-gradient">Cater</span> Your Next Event
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-12 font-light">
            Perfect for offices, parties, weddings, festivals, and private events. Bring the authentic flavors of the Holy Land to your guests.
          </p>
          
          <a 
            href="https://form.jotform.com/261277570109054"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-charcoal font-bold uppercase tracking-widest text-sm hover:bg-cream transition-all duration-300 shadow-2xl shadow-gold/20"
          >
            <ClipboardList className="w-5 h-5" />
            Request Catering
          </a>
        </motion.div>
      </div>
    </section>
  );
}
