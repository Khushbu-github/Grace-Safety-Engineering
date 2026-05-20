import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '../../data/constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Glob all images in /public/assets — keys only, no eager import needed.
// Public directory files are always served at root path (/public/x => /x).
const imageKeys = Object.keys(
  import.meta.glob('/public/assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,gif,GIF}')
);

// Build a lookup: folderName (lowercase) => array of served image URLs
const folderImageMap = {};
for (const fsPath of imageKeys) {
  // e.g. /public/assets/roadsafety/roadsafety (1).jpg => folder = roadsafety
  const parts = fsPath.split('/');
  const folder = parts[parts.length - 2].toLowerCase();
  if (!folderImageMap[folder]) folderImageMap[folder] = [];
  // Strip /public prefix — Vite serves public assets at the root path
  folderImageMap[folder].push(fsPath.replace(/^\/public/, ''));
}

const getImagesForFolder = (folderPath) => {
  // folderPath is like 'assets/roadsafety' — we just need the last segment
  const folderName = folderPath.split('/').pop().toLowerCase();
  return folderImageMap[folderName] || [];
};

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <section id="products" className="section-padding pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Product Range</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Explore Our <span className="text-primary">Catalog</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance industrial equipment and safety gear from the world's most trusted brands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-16 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex gap-3 overflow-x-auto md:flex-wrap md:justify-center pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory.id === cat.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Products Display grouped by Subcategory */}
        <motion.div layout className="space-y-20">
          <AnimatePresence mode="popLayout">
            {selectedCategory.subcategories.map((sub, idx) => {
              const images = getImagesForFolder(sub.folder);
              
              return (
                <motion.div
                  key={`${selectedCategory.id}-${sub.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                    <h3 className="text-3xl font-black text-gray-900">{sub.name}</h3>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                      {images.length} Products
                    </span>
                  </div>

                  {images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {images.map((imgSrc, imgIdx) => (
                        <div key={imgIdx} className="group relative glass-card p-0 overflow-hidden aspect-square bg-white border border-gray-100">
                          <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
                            <img 
                              src={imgSrc} 
                              alt={`${sub.name} Product ${imgIdx + 1}`}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Link to="/contact" className="bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <ArrowRight size={20} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-white border border-gray-100 rounded-2xl text-gray-400">
                      Images coming soon for {sub.name}...
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <div className="mt-20 text-center">
          <Link to="/contact" className="btn-outline inline-flex items-center gap-3">
            Contact for Full Catalog
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
