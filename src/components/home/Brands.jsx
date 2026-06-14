import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../../data/constants';

const Brands = () => {
  // Duplicate for seamless loop
  const brandsRow = [...BRANDS, ...BRANDS];

  return (
    <section id="brands" className="py-20 bg-cream border-y border-gray-100 overflow-hidden">
      <div className="relative">
        {/* Left Blur */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-cream to-transparent z-10" />
        {/* Right Blur */}
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-cream to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-20 whitespace-nowrap"
        >
          {brandsRow.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 transition-transform duration-500 hover:scale-110 cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
