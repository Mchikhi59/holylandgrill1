import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { LOGO_URL, TIKTOK_LINK, FACEBOOK_LINK, PHONE_NUMBER, EMAIL, ADDRESS, HOURS } from "../constants";

const TikTok = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.13-1.19-.1.28-.11.58-.11.88-.01 3.12.01 6.24-.02 9.36-.14 3.16-2.12 6.06-5.23 6.9-3.05.82-6.5-.49-7.93-3.05-1.44-2.58-.77-6.12 1.62-7.91 1.64-1.23 3.85-1.58 5.73-.8 0-1.57.01-3.13.01-4.7-.02-.01-.04-.03-.06-.04-1.88-.61-3.92-.31-5.51.84-1.59 1.15-2.57 3.01-2.6 5-.01 1.99.98 3.85 2.6 5 1.64 1.23 3.85 1.58 5.73.8 0-1.57.01-3.13.01-4.7-.02-.01-.04-.03-.06-.04-1.88-.61-3.92-.31-5.51.84-1.59 1.15-2.57 3.01-2.6 5-.01 1.99.98 3.85 2.6 5 1.62 1.24 3.85 1.58 5.73.8 0-1.57.01-3.13.01-4.7-.02-.01-.04-.03-.06-.04-1.88-.61-3.92-.31-5.51.84-1.59 1.15-2.57 3.01-2.6 5-.01 1.99.98 3.85 2.6 5.01 1.62 1.24 3.85 1.58 5.73.81V5.7c.01-.13-.01-.26-.01-.39-.01-1.76 1.05-3.34 2.66-4.04.14-.06.28-.11.43-.16 1.66-.58 3.55-.38 5.04.53v.44z" />
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.13-1.19-.1.28-.11.58-.11.88-.01 3.12.01 6.24-.02 9.36-.14 3.16-2.12 6.06-5.23 6.9-3.05.82-6.5-.49-7.93-3.05-1.44-2.58-.77-6.12 1.62-7.91 1.64-1.23 3.85-1.58 5.73-.8 0-1.57.01-3.13.01-4.7z" />
    <path d="M12.525,0l3.91,0c0.08,1.53,0.63,3.09,1.75,4.17c1.12,1.11,2.7,1.62,4.24,1.79v4.03c-1.44-0.06-2.89-0.44-4.13-1.19c-0.1,0.28-0.11,0.58-0.11,0.88c-0.01,3.12,0.01,6.24-0.02,9.36c-0.14,3.16-2.12,6.06-5.23,6.9c-3.05,0.82-6.5-0.49-7.93-3.05c-1.44-2.58-0.77-6.12,1.62-7.91c1.64-1.23,3.85-1.58,5.73-0.8V0z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div>
            <div className="h-12 w-auto mb-6">
              <img 
                src={LOGO_URL} 
                alt="Holy Land Grill Logo" 
                className="h-full w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.text-fallback')?.classList.remove('hidden');
                }}
              />
              <div className="text-fallback hidden font-serif text-2xl tracking-tighter text-cream">
                HOLY LAND <span className="italic font-light text-gold">GRILL</span>
              </div>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-8 max-w-xs lowercase">
              Premium Mediterranean street food crafted with passion and authentic family recipes. Quality you can taste in every bite.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: FACEBOOK_LINK },
                { Icon: TikTok, href: TIKTOK_LINK }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/40 hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Location & Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <p className="text-cream/60 text-sm leading-relaxed lowercase">{ADDRESS}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <p className="text-cream/60 text-sm">{PHONE_NUMBER}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <p className="text-cream/60 text-sm lowercase">{EMAIL}</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Opening Hours</h4>
            <div className="space-y-3">
              {HOURS.slice(0, 7).map((item, idx) => (
                <div key={idx} className="flex justify-between text-xs">
                  <span className="text-cream/40">{item.day}</span>
                  <span className="text-cream/60 tabular-nums">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Integration */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Find Us</h4>
            <div className="h-48 rounded-xl overflow-hidden border border-white/10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.442654316634!2d-84.89679628464654!3d39.055979979546!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x88417937d2f9f1ab%3A0x7d6a7ed2a3a5f3e9!2s215%20Judiciary%20St%2C%20Aurora%2C%20IN%2047001%2C%20USA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-cream/20 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            Holy Land Grill © 2026 • Aurora, Indiana • Premium Mediterranean Street Food
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-cream/20 text-[10px] uppercase tracking-[0.1em] hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/20 text-[10px] uppercase tracking-[0.1em] hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
