import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { TOAST_ORDER_LINK } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Catering", href: "#catering" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 glass border-b border-white/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group">
          <span className="font-serif text-xl md:text-2xl tracking-tighter text-cream group-hover:text-gold transition-colors duration-300">
            HOLY LAND <span className="italic font-light">GRILL</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-cream/70 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={TOAST_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Order Online
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-cream p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl tracking-tighter text-cream">
                HOLY LAND <span className="italic font-light text-gold">GRILL</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-cream p-2">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif text-cream hover:text-gold transition-colors italic"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={TOAST_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-5 bg-gold text-charcoal text-center text-sm uppercase tracking-[0.2em] font-bold"
              >
                Order Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
