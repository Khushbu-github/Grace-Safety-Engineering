import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/home/HeroCarousel';
import CategoryGrid from '../components/home/CategoryGrid';
import OurPrinciples from '../components/home/OurPrinciples';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <CategoryGrid />
      <OurPrinciples />
      
      <Testimonials />
      
      {/* Why Choose Us - Inline Implementation */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose <span className="text-primary">Us?</span></h2>
            <p className="text-gray-400">The preferred choice for industries in Bangalore.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Genuine Products', desc: '100% authentic multi-brand tools & safety gear.' },
              { title: 'Safety Certified', desc: 'Equipment meeting international safety standards.' },
              { title: 'Reliable Support', desc: 'Expert guidance and fast customer response.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="text-2xl font-black">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
