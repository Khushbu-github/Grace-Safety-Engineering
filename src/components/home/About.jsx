import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Cog, Zap, Disc, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const cards = [
    { title: 'Safety Equipment', icon: Shield, desc: 'Premium PPE, Helmets, Gloves & Body Protection.' },
    { title: 'Power Tools', icon: Hammer, desc: 'Heavy-duty drills, grinders & industrial tools.' },
    { title: 'Industrial Hardware', icon: Cog, desc: 'Hardware accessories, bench vices & chains.' },
    { title: 'Welding Solutions', icon: Zap, desc: 'Certified welding machines & safety gear.' },
    { title: 'Abrasives', icon: Disc, desc: 'Cutting wheels, grinding discs & abrasives.' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              About Grace Safety <br />
              <span className="text-gray-400">Engineering</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Grace Safety Engineering is a multi-brand industrial safety and engineering supplier located in Bangalore. 
              The company supplies industrial safety equipment, PPE products, power tools, welding machines, abrasives, 
              measuring instruments, hardware tools, and industrial accessories from trusted global brands.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Multi-Brand Industrial Supplier',
                'Bangalore Based Global Reach',
                'Safety Certified Equipment',
                'Fast Delivery & Bulk Supply'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <CheckCircle2 className="text-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary">Learn More</Link>
          </motion.div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-8 flex flex-col justify-between ${idx === 0 ? 'sm:col-span-2 bg-primary/10 border-primary/20' : ''}`}
              >
                <div>
                  <div className={`p-4 rounded-xl inline-block mb-6 ${idx === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}>
                    <card.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
