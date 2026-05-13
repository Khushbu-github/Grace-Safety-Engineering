import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-green-50/60" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-primary/20"
        >
          <Shield size={120} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] text-accent/20"
        >
          <Hammer size={100} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[20%] text-primary/10"
        >
          <Zap size={80} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted Industrial Partner
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              Complete Industrial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Safety & Power Tools
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed">
              Trusted Supplier of Industrial Safety Equipment, Power Tools, PPE Kits, 
              Abrasives, Welding Machines & Hardware Solutions from the world's leading brands.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link to="/products" className="btn-primary flex items-center gap-2 group">
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-200 pt-12"
          >
            {[
              { label: 'Products', value: '1000+' },
              { label: 'Global Brands', value: '50+' },
              { label: 'Happy Clients', value: '1500+' },
              { label: 'Years Experience', value: '15+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <div className="w-5 h-9 rounded-full border-2 border-gray-300 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary" 
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
