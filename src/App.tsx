/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingOrderButton from "./components/FloatingOrderButton";
import ScrollToTop from "./components/ScrollToTop";
import PromoBanner from "./components/PromoBanner";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/auth/Profile";
import { AuthProvider } from "./hooks/useAuth";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <AuthProvider>
      <Router>
        <ScrollToHash />
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          <Footer />
          <FloatingOrderButton />
          <ScrollToTop />
        </div>
      </Router>
    </AuthProvider>
  );
}

