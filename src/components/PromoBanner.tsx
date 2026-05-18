import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-sage py-1.5 relative z-[60] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] font-black uppercase tracking-[0.4em] text-charcoal flex items-center justify-center gap-3"
        >
          <span className="hidden sm:inline bg-charcoal/10 h-[1px] w-12" />
          Visit us in Aurora, Indiana • Authentic Mediterranean Flavor
          <span className="hidden sm:inline bg-charcoal/10 h-[1px] w-12" />
        </motion.p>
      </div>
    </div>
  );
}
