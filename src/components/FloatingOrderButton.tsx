import { motion } from "motion/react";
import { ShoppingBag, Phone } from "lucide-react";
import { TOAST_ORDER_LINK, PHONE_NUMBER } from "../constants";

export default function FloatingOrderButton() {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 lg:hidden flex gap-3">
      <motion.a
        href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-cream px-4 py-4 rounded-xl shadow-2xl font-bold uppercase tracking-widest text-[10px]"
      >
        <Phone className="w-4 h-4 text-gold" />
        Call Us
      </motion.a>
      
      <motion.a
        href={TOAST_ORDER_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
        className="flex-[1.5] flex items-center justify-center gap-3 bg-gold text-charcoal px-4 py-4 rounded-xl shadow-2xl shadow-gold/20 font-bold uppercase tracking-widest text-[10px]"
      >
        <ShoppingBag className="w-4 h-4" />
        Order Now
      </motion.a>
    </div>
  );
}
