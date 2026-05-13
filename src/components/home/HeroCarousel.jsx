import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import banner1 from '../../assets/banner1.jpg';
import banner3 from '../../assets/banner3.jpg';

const slides = [
  {
    id: 1,
    image: banner1,
    subtitle: 'One Stop Shop For',
    title: 'Fire, Welding & Safety\nSolution',
    desc: 'GRACE SAFETY ENGINEERING was established in Bengaluru, Karnataka with the sole purpose of providing the Regional and National Market with Quality Personal Protective Equipment (PPE)'
  },
  {
    id: 2,
    image: banner3,
    subtitle: 'Premium Industrial Grade',
    title: 'Power Tools &\nAbrasives',
    desc: 'Equip your workforce with high-performance power tools and abrasives from top global brands, ensuring maximum productivity and uncompromised safety standards.'
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-2xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-sm md:text-base font-bold mb-3 uppercase tracking-wider text-gray-300">
                  {slides[current].subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight whitespace-pre-line text-white">
                  {slides[current].title}
                </h1>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                  {slides[current].desc}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link 
                    to="/about" 
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-sm font-bold text-sm transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight size={14} />
                    </span>
                    More About Us!
                  </Link>
                  <Link 
                    to="/products" 
                    className="bg-white hover:bg-gray-100 text-primary px-8 py-3.5 rounded-sm font-bold text-sm transition-colors"
                  >
                    Our Products
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-20 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-20 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              current === idx ? 'border-primary bg-transparent' : 'border-white bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
