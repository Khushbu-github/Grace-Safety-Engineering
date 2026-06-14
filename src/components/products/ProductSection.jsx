import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '../../data/constants';
import { ArrowRight, X, Maximize2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState(CATEGORIES[0]);
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Handle URL parameters for Category/Subcategory deep-linking
  React.useEffect(() => {
    const catId = searchParams.get('cat');
    const subName = searchParams.get('sub');

    if (catId) {
      const category = CATEGORIES.find(c => c.id === catId);
      if (category) {
        setSelectedCategory(category);

        // If there's a subcategory, scroll to it after selection
        if (subName) {
          // Wrap in a small timeout to allow products to render after category switch
          setTimeout(() => {
            const element = document.getElementById(`sub-${subName.replace(/\s+/g, '-').toLowerCase()}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 400);
        }
      }
    }
  }, [searchParams]);

  return (
    <section id="products" className="section-padding pt-24 bg-cream min-h-screen">
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
                className={`shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${selectedCategory.id === cat.id
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
                  id={`sub-${sub.name.replace(/\s+/g, '-').toLowerCase()}`}
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                      {images.map((imgSrc, imgIdx) => {
                        const noFeaturedSubs = ['Safety Shoes', 'Hand Gloves'];
                        const isFeatured = imgIdx === 0 && !noFeaturedSubs.includes(sub.name);

                        return (
                          <div
                            key={imgIdx}
                            className={`group relative glass-card p-0 overflow-hidden bg-white border border-gray-100 cursor-zoom-in transition-all duration-500 ${isFeatured
                              ? 'col-span-full h-[300px] md:h-[500px]'
                              : 'aspect-square'
                              }`}
                            onClick={() => setSelectedImage(imgSrc)}
                          >
                            <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${isFeatured ? 'p-0' : 'p-4'}`}>
                              <img
                                src={imgSrc}
                                alt={`${sub.name} Product ${imgIdx + 1}`}
                                className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${isFeatured ? 'object-cover' : 'object-contain'
                                  }`}
                                loading="lazy"
                              />
                              {!isFeatured && <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />}

                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                                  <Maximize2 size={24} />
                                </div>
                              </div>
                              {isFeatured && (
                                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                                  Featured
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-cream border border-gray-200 rounded-2xl text-gray-400">
                      Images coming soon for {sub.name}...
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            >
              <motion.button
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Product Gallery"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-black/50"
                />

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
                  >
                    Enquire for this Product
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
