import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { PHONE_NUMBER } from "../constants";

export default function OrderCallToAction() {
  const cleanPhone = PHONE_NUMBER.replace(/-/g, "");

  return (
    <section className="bg-transparent py-4 border-b border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          {/* Action Button */}
          <a
            href={`tel:${cleanPhone}`}
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-olive text-cream rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold hover:text-charcoal transition-all duration-500 shadow-lg shadow-black/40 hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 group-hover:-rotate-12 transition-transform duration-300" />
            <span>Call to Order</span>
            <span className="opacity-60 font-light">|</span>
            <span className="font-serif italic text-sm">{PHONE_NUMBER}</span>
          </a>

          {/* Location Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-cream/80 font-sans text-[10px] tracking-wide lowercase">
              Pickup at <span className="text-gold italic">Aurora, Indiana</span>
            </p>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gold/30"></span>
            <p className="text-cream/40 font-serif italic text-[9px] uppercase tracking-widest">
              Please have your order ready!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
