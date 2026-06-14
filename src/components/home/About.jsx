import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Cog, Zap, Disc, CheckCircle2, ArrowRight, Users, Award, Package, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner1.jpg';
import banner3 from '../../assets/banner3.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { icon: Clock, value: '20+', label: 'Years of Experience (Since 2006)' },
  { icon: Package, value: '500+', label: 'Products Supplied' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Award, value: '100%', label: 'Genuine Products' },
];

const offerings = [
  { title: 'Safety Equipment', icon: Shield, desc: 'Premium PPE — helmets, gloves, harnesses and body protection from globally certified manufacturers.' },
  { title: 'Power Tools', icon: Hammer, desc: 'Heavy-duty drills, grinders, impact drivers and industrial power tools from top brands like Bosch & DeWalt.' },
  { title: 'Industrial Hardware', icon: Cog, desc: 'Bench vices, chains, fasteners, hardware accessories and general industrial consumables.' },
  { title: 'Welding Solutions', icon: Zap, desc: 'Certified welding machines, electrodes, safety curtains and complete welding accessory kits.' },
  { title: 'Abrasives & Cutting', icon: Disc, desc: 'Cutting wheels, grinding discs, flap discs and coated abrasives for every surface and material.' },
  { title: 'Measuring Instruments', icon: Cog, desc: 'Vernier calipers, micrometers, gauges and precision instruments for accurate shop-floor measurement.' },
];

const values = [
  { title: 'Quality First', desc: 'Every product we stock is sourced from certified, reputable manufacturers with documented quality standards.' },
  { title: 'Customer-Centric', desc: 'From a single item to bulk supply, we tailor our service around the specific needs of each client.' },
  { title: 'Safety Compliance', desc: 'We only supply equipment that meets or exceeds relevant national and international safety standards.' },
  { title: 'Fast Fulfilment', desc: 'Reliable inventory management and strong supplier relationships ensure timely order delivery.' },
];

const About = () => {
  return (
    <div className="overflow-hidden pt-24">

      {/* ── 1. Hero intro ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                About Grace Safety <br />
                <span className="text-gray-400">Engineering</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Grace Safety Engineering is a multi-brand industrial safety and engineering supplier
                headquartered in Bangalore, Karnataka. Established with the sole purpose of providing
                the regional and national market with quality Personal Protective Equipment (PPE) and
                industrial tools, we have grown into one of the most trusted safety equipment suppliers
                in South India.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                We supply industrial safety equipment, PPE products, power tools, welding machines,
                abrasives, measuring instruments, hardware tools and industrial accessories from
                trusted global brands — all under one roof.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Multi-Brand Industrial Supplier',
                  'Bangalore Based · Pan-India Reach',
                  'ISI / CE Safety Certified Equipment',
                  'Fast Delivery & Bulk Supply Available',
                  'Expert Guidance from Trained Staff',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Right — cards grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {offerings.slice(0, 4).map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`glass-card p-6 flex flex-col ${idx === 0 ? 'sm:col-span-2 bg-primary/5 border-primary/20' : ''}`}
                >
                  <div className={`p-3 rounded-xl inline-block mb-4 ${idx === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Stats banner ── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner1})` }}
        />
        <div className="absolute inset-0 bg-gray-900/75" />

        <div className="relative container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mx-auto mb-4">
                  <s.icon size={24} />
                </div>
                <p className="text-4xl font-black text-white mb-1">{s.value}</p>
                <p className="text-gray-300 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Our story split ── */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src={banner3}
                alt="Grace Safety Engineering team"
                className="w-full h-[480px] object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-100">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">ISO Certified</p>
                  <p className="text-gray-400 text-xs">Products & Processes</p>
                </div>
              </div>
            </motion.div>

            {/* Right text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Built on a Commitment to <span className="text-primary">Industrial Safety</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Grace Safety Engineering was founded in Bengaluru with a clear vision — to be the
                one-stop shop for fire, welding and safety solutions in the region. Over the years,
                we have built strong partnerships with leading global manufacturers and grown our
                catalogue to cover every major safety and industrial tool category.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Located in Jigani, Anekal Taluk — the heart of Bangalore's industrial corridor — we
                are strategically positioned to serve manufacturing plants, construction sites,
                warehouses, and corporate campuses across Karnataka and beyond.
              </p>

              {/* Values */}
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, idx) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Full product range ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              A Complete Range of <span className="text-primary">Industrial Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              From the first line of defence in PPE to precision measuring tools, we supply everything
              an industrial facility needs to operate safely and efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass-card flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Browse All Products <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Why choose us — dark CTA strip ── */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${banner1})` }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why Grace Safety?</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Your Trusted Safety Partner <br className="hidden md:block" />
              in Bangalore
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              We combine genuine products, expert knowledge and fast service to deliver an unmatched
              industrial supply experience. Whether you need a single helmet or a complete site safety
              kit — we have you covered.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
