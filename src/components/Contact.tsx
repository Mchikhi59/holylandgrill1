import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { TOAST_ORDER_LINK, PHONE_NUMBER, EMAIL, ADDRESS, HOURS, TIKTOK_LINK, FACEBOOK_LINK } from "../constants";

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-5xl md:text-6xl text-cream italic font-light">Contact <span className="not-italic font-normal">Us</span></h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Contact Details */}
            <div className="lg:w-1/2">
              <div className="space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors duration-500">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-3">Call Us</h4>
                    <p className="text-cream text-2xl font-serif italic">{PHONE_NUMBER}</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors duration-500">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-3">Email Us</h4>
                    <p className="text-cream text-2xl font-serif italic lowercase">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors duration-500">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-3">Visit Us</h4>
                    <p className="text-cream text-2xl font-serif italic max-w-sm leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-16 flex gap-5">
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
                    className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Hours of Operation */}
            <div className="lg:w-1/2">
              <div className="bg-white/[0.01] border border-white/[0.05] p-8 md:p-12 rounded-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <div className="flex items-center gap-4 mb-10 relative">
                  <Clock className="w-7 h-7 text-gold" />
                  <h4 className="text-gold uppercase tracking-widest text-sm font-bold">Hours of Operation</h4>
                </div>
                <div className="space-y-6 relative">
                  {HOURS.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center group">
                      <span className="text-cream/60 font-serif italic text-lg group-hover:text-gold transition-colors duration-300">{item.day}</span>
                      <div className="h-px flex-grow mx-4 bg-white/5 group-hover:bg-gold/10 transition-colors duration-300"></div>
                      <span className="text-cream font-medium text-sm tracking-widest tabular-nums">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 h-[450px] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gold/5">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.442654316634!2d-84.89679628464654!3d39.055979979546!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x88417937d2f9f1ab%3A0x7d6a7ed2a3a5f3e9!2s215%20Judiciary%20St%2C%20Aurora%2C%20IN%2047001%2C%20USA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Map Overlay for Style */}
            <div className="absolute inset-0 pointer-events-none border border-gold/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
