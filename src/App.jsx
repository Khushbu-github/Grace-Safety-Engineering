import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './components/home/About';
import AboutPage from './pages/About';
import ProductSection from './components/products/ProductSection';
import Contact from './components/home/Contact';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Cursor Glow Effect
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <ScrollToTop />
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Cursor Glow */}
      <div 
        id="cursor-glow"
        className="fixed w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"
      />

      <Navbar />
      
      <main className="pt-24 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
