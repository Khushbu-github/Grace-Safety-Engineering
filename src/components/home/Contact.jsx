import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-gray-900">
              Ready to Secure <br />
              <span className="text-primary">Your Workspace?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-lg">
              Contact us today for bulk inquiries, product technical specs, or a custom quote for your industrial needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-gray-100 border border-gray-200 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold mb-1">Our Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-gray-100 border border-gray-200 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold mb-1">Call Us</h4>
                  <div className="flex flex-col gap-1">
                    {CONTACT_INFO.phones.map(p => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-gray-500 hover:text-primary transition-colors text-sm">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-gray-100 border border-gray-200 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold mb-1">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-500 hover:text-primary transition-colors text-sm">{CONTACT_INFO.email}</a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 rounded-3xl overflow-hidden border border-gray-200 opacity-80 hover:opacity-100 transition-all duration-500">
              <iframe 
                src={CONTACT_INFO.mapsEmbed}
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 border-gray-100 bg-white shadow-xl"
          >
            <h3 className="text-2xl font-black mb-8">Send an Enquiry</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary outline-none transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Product Interest</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:border-primary outline-none transition-colors appearance-none">
                  <option>Safety Equipment</option>
                  <option>Power Tools</option>
                  <option>Abrasives</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary outline-none transition-colors" placeholder="How can we help you?" />
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.phones[0].replace(/\s|\+/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 p-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 hover:scale-110 transition-transform active:scale-95 flex items-center gap-2 group"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-sm">Chat with Us</span>
      </a>
    </section>
  );
};

export default Contact;
