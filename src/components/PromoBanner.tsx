import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-gold/90 backdrop-blur-sm py-2 relative z-[60]">
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-charcoal flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3 h-3" />
          Grand Opening: Visit us at Aurora, Indiana for Authentic Mediterranean Street Food
          <Sparkles className="w-3 h-3 text-white" />
        </motion.p>
      </div>
    </div>
  );
}
