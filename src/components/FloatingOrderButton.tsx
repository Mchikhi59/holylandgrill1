import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { TOAST_ORDER_LINK } from "../constants";

export default function FloatingOrderButton() {
  return (
    <motion.a
      href={TOAST_ORDER_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-3 bg-gold text-charcoal px-6 py-4 rounded-full shadow-2xl shadow-gold/20 font-bold uppercase tracking-widest text-sm"
    >
      <ShoppingBag className="w-5 h-5" />
      Order Now
    </motion.a>
  );
}
