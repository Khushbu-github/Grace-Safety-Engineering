import React from 'react';
import { CONTACT_INFO, CATEGORIES } from '../../data/constants';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={logoImg} alt={CONTACT_INFO.company} className="h-16 md:h-20 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-gray-900 leading-none font-outfit uppercase tracking-tight">
                  Grace Safety <span className="text-primary italic">Engineering</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">
                  {CONTACT_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Trusted supplier of industrial safety equipment and engineering tools across Bangalore and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-800 font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/products" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Products</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-gray-800 font-bold mb-8">Categories</h4>
            <ul className="space-y-4">
              {CATEGORIES.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <Link to="/products" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{cat.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-800 font-bold mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>{CONTACT_INFO.address}</li>
              {CONTACT_INFO.phones.map(p => <li key={p}>{p}</li>)}
              <li>{CONTACT_INFO.email}</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Grace Safety Engineering. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
