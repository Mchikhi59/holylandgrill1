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
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans text-cream bg-charcoal selection:bg-gold selection:text-charcoal min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <FeaturedMenu />
        <Catering />
        <Contact />
      </main>

      <Footer />
      <FloatingOrderButton />
    </div>
  );
}

