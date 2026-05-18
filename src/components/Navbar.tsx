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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#8a8f2a] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tighter text-charcoal uppercase leading-none">
                  Holy Land Grill
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-charcoal/60 font-bold mt-1">Mediterranean Soul</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-charcoal p-2 border border-charcoal/20 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-8 pb-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif text-charcoal hover:text-white transition-colors italic leading-none"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={TOAST_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-12 py-6 bg-charcoal text-white text-center text-xs uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
