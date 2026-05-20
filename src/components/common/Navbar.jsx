import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../../data/constants';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products', hasMegaMenu: true },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      {/* ── Top info strip ── */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 36, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-primary overflow-hidden"
          >
            <div className="container mx-auto px-6 h-9 flex items-center justify-between">
              <div className="flex items-center gap-6 text-white/90 text-xs font-medium">
                <a href="tel:+919740700207" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone size={11} />
                  +91 97407 00207
                </a>
                <a href="mailto:sham.graysafetyeng@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail size={11} />
                  sham.graysafetyeng@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                <MapPin size={11} />
                <span className="hidden md:block">Jigani, Bangalore – 560105</span>
                <span className="md:hidden">Bangalore</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main navbar ── */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100 py-2'
            : 'bg-white py-3'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src={logoImg}
              alt="Grace Safety"
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMegaMenu && setMegaMenuOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`relative flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/8'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                  {/* Active underline dot */}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                            Product Categories
                          </p>
                          <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                            {CATEGORIES.map((cat) => (
                              <Link
                                key={cat.id}
                                to="/products"
                                className="group flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary font-medium transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-primary transition-colors shrink-0" />
                                {cat.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {CATEGORIES.length} categories · 100+ products
                          </span>
                          <Link
                            to="/products"
                            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                          >
                            View all <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919740700207"
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors px-3 py-2"
            >
              <Phone size={15} />
              <span className="hidden xl:block">+91 97407 00207</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-px"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold transition-colors ${
                        isActive(link.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile contact strip */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <a
                    href="tel:+919740700207"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Phone size={16} className="text-primary" />
                    +91 97407 00207
                  </a>
                  <Link
                    to="/contact"
                    className="bg-primary text-white font-bold text-sm px-5 py-3.5 rounded-xl text-center hover:bg-primary-dark transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
