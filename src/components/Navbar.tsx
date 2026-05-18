import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { TOAST_ORDER_LINK, LOGO_URL } from "../constants";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Menu", href: "/#menu" },
    { name: "About", href: "/#about" },
    { name: "Catering", href: "/#catering" },
    { name: "Contact", href: "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      return location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-charcoal/95 backdrop-blur-md border-b border-white/5" : "py-10 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-4">
          <div className="relative h-12 w-12 bg-sage rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
            <img 
              src={LOGO_URL} 
              alt="Holy Land Grill Logo" 
              className="h-full w-full object-contain p-2 brightness-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tighter text-cream group-hover:text-gold transition-colors duration-300 uppercase leading-none">
              Holy Land Grill
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-gold/60 font-bold mt-1">Mediterranean Soul</span>
          </div>
        </Link>

        {/* Desktop Links - Right Aligned */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group ${
                isActive(link.href) ? "text-gold" : "text-cream/60 hover:text-gold"
              }`}
            >
              {link.name}
              <div className={`absolute -bottom-1 left-0 w-full h-[1px] bg-gold transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${isActive(link.href) ? "scale-x-100" : ""}`} />
            </a>
          ))}
          <a
            href={TOAST_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-sage/10 border border-sage/30 text-gold text-[10px] uppercase tracking-[0.2em] font-black hover:bg-sage hover:text-charcoal transition-all duration-500 flex items-center gap-3 rounded-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-8 border-b border-white/5">
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tighter text-cream uppercase leading-none">
                  Holy Land Grill
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-gold/60 font-bold mt-1">Mediterranean Soul</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-white p-3 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content - Centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-10 px-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold/40 font-bold">0{idx + 1}</span>
                  <span className="text-5xl md:text-7xl font-serif text-cream group-hover:text-gold transition-colors italic tracking-tighter">
                    {link.name}
                  </span>
                </motion.a>
              ))}
              
              <motion.a
                href={TOAST_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8 px-12 py-5 bg-gold text-charcoal text-[11px] uppercase tracking-[0.4em] font-black rounded-sm shadow-xl flex items-center gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
