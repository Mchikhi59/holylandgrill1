/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMenu from "./components/FeaturedMenu";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Catering from "./components/Catering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingOrderButton from "./components/FloatingOrderButton";
import ScrollToTop from "./components/ScrollToTop";
import PromoBanner from "./components/PromoBanner";
import OrderCallToAction from "./components/OrderCallToAction";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans text-cream selection:bg-gold selection:text-charcoal min-h-screen bg-charcoal">
      {/* Global Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 grayscale-[0.1]"
          style={{ backgroundImage: `url('https://i.postimg.cc/h4Nfdsdk/log-holy.jpg')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal/95" aria-hidden="true" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className="sticky top-0 z-50">
        <PromoBanner />
        <Navbar />
      </div>
      
      <main>
        <OrderCallToAction />
        <Hero />
        <WhyChooseUs />
        <About />
        <FeaturedMenu />
        <Catering />
        <Contact />
      </main>

      <Footer />
      <FloatingOrderButton />
      <ScrollToTop />
    </div>
  );
}

