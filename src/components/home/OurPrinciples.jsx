import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ThumbsUp, Headphones } from 'lucide-react';
import banner3 from '../../assets/banner3.png';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Safety',
    desc: 'Customer safety is our top priority',
    step: 'Step 01',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction',
    desc: 'Customer demands are carefully analyzed',
    step: 'Step 02',
  },
  {
    icon: Headphones,
    title: 'Service',
    desc: 'Customer service to ensure excellence',
    step: 'Step 03',
  },
];

const OurPrinciples = () => {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex items-center px-8 md:px-16 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            {/* Label */}
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
              How We Work In Three Easy Steps
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
              We At Grace Safety Keep In Mind{' '}
              <span className="text-primary">The 3S Of Our Principal</span>
            </h2>

            {/* Body */}
            <p className="text-gray-500 text-sm leading-relaxed mb-12">
              All aimed at our wide range of retail and corporate customers. It has been the
              primary driving force of Grace Safety Engineering for years and we continue to
              keep these principles in mind in the coming years — making sure to meet every
              element of our customers' requirements.
            </p>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {pillars.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <p.icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base font-black text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{p.desc}</p>

                  {/* Step line */}
                  <div className="flex items-center gap-2">
                    <span className="block w-5 h-px bg-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {p.step}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: Banner Image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[45%] relative min-h-[340px] lg:min-h-0"
        >
          <img
            src={banner3}
            alt="Grace Safety Engineering team at work"
            className="w-full h-full object-cover"
          />
          {/* Subtle left-edge gradient so it blends into the cream section */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default OurPrinciples;
