import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Procurement Manager, TechBuild Infra',
    content: 'Grace Safety Engineering has been our go-to partner for PPE and industrial tools. Their commitment to authentic products and fast delivery is unmatched in Bangalore.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anand Sharma',
    role: 'Site Supervisor, Apex Constructions',
    content: 'We source all our heavy-duty power tools and safety gear from them. The quality is always top-notch, and their team provides excellent technical guidance.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    role: 'Operations Head, MetalWorks India',
    content: 'Very reliable supplier. Whether it is a bulk order for safety shoes or specialized welding equipment, they always deliver on time with competitive pricing.',
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">What Our Clients <span className="text-primary">Say</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the professionals who trust us with their industrial safety and engineering needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card relative flex flex-col h-full group"
            >
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                <Quote size={48} />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto border-t border-gray-100 pt-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
