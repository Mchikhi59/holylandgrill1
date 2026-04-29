import { Instagram, Facebook, Twitter } from "lucide-react";
import { TIKTOK_LINK, FACEBOOK_LINK } from "../constants";

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
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-xl tracking-tighter text-cream">
            HOLY LAND <span className="italic font-light text-gold">GRILL</span>
          </div>

          <div className="flex gap-6">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: FACEBOOK_LINK },
              { Icon: Twitter, href: "#" },
              { Icon: TikTok, href: TIKTOK_LINK }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="text-cream/40 hover:text-gold transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-cream/40 text-[10px] uppercase tracking-[0.2em]">
            Holy Land Grill © 2026 • Premium Mediterranean Street Food
          </div>
        </div>
      </div>
    </footer>
  );
}
