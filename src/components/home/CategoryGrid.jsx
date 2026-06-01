import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CATEGORY_ITEMS = [
  {
    name: 'Head Protection',
    desc: 'Helmets, hard hats & ear defenders',
    image: '/assets/headsafety/big3.jpg',
    accent: 'from-emerald-600/80 to-emerald-900/90',
    tag: 'PPE',
    link: '/products?cat=ppe-safety&sub=Helmets'
  },
  {
    name: 'Fire Safety',
    desc: 'Extinguishers, suits & suppression systems',
    image: '/assets/firesafety/big04.jpg',
    accent: 'from-red-600/80 to-red-900/90',
    tag: 'Safety',
    link: '/products?cat=fire-safety&sub=Fire%20Extinguishers'
  },
  {
    name: 'Eye Protection',
    desc: 'Safety glasses, goggles & face shields',
    image: '/assets/eyeprotection/big4.jpg',
    accent: 'from-sky-600/80 to-sky-900/90',
    tag: 'PPE',
    link: '/products?cat=ppe-safety&sub=Safety%20Glasses'
  },
  {
    name: 'Road Safety',
    desc: 'Cones, barricades & reflective gear',
    image: '/assets/roadsafety/roadsafety (6).jpg',
    accent: 'from-amber-600/80 to-amber-900/90',
    tag: 'Industrial',
    link: '/products?cat=industrial-safety&sub=Traffic%20Cones'
  },
  {
    name: 'Safety Shoes',
    desc: 'Steel toe, anti-slip & chemical resistant',
    image: '/assets/safetyshoes/safetyshoes (1).jpg',
    accent: 'from-violet-600/80 to-violet-900/90',
    tag: 'PPE',
    link: '/products?cat=ppe-safety&sub=Safety%20Shoes'
  },
  {
    name: 'Hand Gloves',
    desc: 'Cut resistant, chemical & electrical gloves',
    image: '/assets/handgloves/handgloves (1).jpg',
    accent: 'from-teal-600/80 to-teal-900/90',
    tag: 'PPE',
    link: '/products?cat=ppe-safety&sub=Hand%20Gloves'
  },
  {
    name: 'Fall Protection',
    desc: 'Harnesses, lanyards & anchor systems',
    image: '/assets/fallprotection/big1.jpg',
    accent: 'from-orange-600/80 to-orange-900/90',
    tag: 'Industrial',
    link: '/products?cat=ppe-safety&sub=Safety%20Harness'
  },
  {
    name: 'Body Protection',
    desc: 'Hi-vis vests, coveralls & chemical suits',
    image: '/assets/bodyprotection/bodyprotection (1).jpg',
    accent: 'from-lime-600/80 to-lime-900/90',
    tag: 'PPE',
    link: '/products?cat=ppe-safety&sub=Body%20Protection'
  },
  {
    name: 'Respiratory',
    desc: 'Respirators, masks & air purifying units',
    image: '/assets/faceprotection/big01.jpg',
    accent: 'from-cyan-600/80 to-cyan-900/90',
    tag: 'PPE',
    link: '/products?cat=ppe-safety&sub=Respirators'
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CategoryGrid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-3">
              What We Supply
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Browse By <span className="text-primary">Category</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors shrink-0"
          >
            View all products
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CATEGORY_ITEMS.map((item, idx) => (
            <motion.div key={item.name} variants={cardVariants}>
              <Link
                to={item.link}
                className="group relative flex flex-col justify-end h-56 rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Always-on dark base overlay */}
                <div className="absolute inset-0 bg-gray-950/40" />

                {/* Coloured gradient overlay — slides up on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.accent} transition-opacity duration-400 ${hovered === idx ? 'opacity-100' : 'opacity-60'
                    }`}
                />

                {/* Tag pill */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>

                {/* Arrow button */}
                <div
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${hovered === idx
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                    }`}
                >
                  <ArrowUpRight size={15} className="text-white" />
                </div>

                {/* Text content */}
                <div className="relative z-10 p-4">
                  <h3 className="text-white font-black text-base leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p
                    className={`text-white/70 text-xs leading-snug transition-all duration-300 ${hovered === idx
                      ? 'opacity-100 max-h-10'
                      : 'opacity-0 max-h-0'
                      } overflow-hidden`}
                  >
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/products"
              className="group flex flex-col items-center justify-center h-56 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors duration-300 gap-3"
            >
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                <ArrowUpRight size={20} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-gray-400 group-hover:text-primary font-bold text-sm transition-colors duration-300 text-center px-4">
                All Products
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
