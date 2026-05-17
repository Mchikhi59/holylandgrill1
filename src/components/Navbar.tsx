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
      className={`relative w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-2xl" : "py-8 bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center h-12 md:h-16">
          <div className="relative h-full">
            <img 
              src={LOGO_URL} 
              alt="Holy Land Grill Logo" 
              className="h-full w-auto object-contain brightness-110 contrast-125"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.text-fallback')?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text if Image Fails */}
            <span className="text-fallback hidden font-serif text-xl md:text-2xl tracking-tighter text-cream group-hover:text-gold transition-colors duration-300">
              HOLY LAND <span className="italic font-light">GRILL</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links - Right Aligned */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
                  isActive(link.href) ? "text-gold" : "text-cream/70 hover:text-gold"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href={TOAST_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gold text-gold text-[10px] uppercase tracking-[0.2em] font-black hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center gap-3"
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
              <span className="font-serif text-2xl tracking-tighter text-cream">
                HOLY LAND <span className="italic font-light text-gold">GRILL</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-cream p-2">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 pb-12 bg-[#8a8f2a]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl md:text-4xl font-serif text-cream hover:text-gold transition-colors italic"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={TOAST_ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-4 bg-gold text-charcoal text-center text-xs uppercase tracking-[0.2em] font-bold"
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
