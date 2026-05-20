import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, ArrowRight, ShieldCheck, Layers, Handshake, BarChart2, Star, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.4, ease: EASE, delay },
});

export const AboutPage = () => {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="bg-editor-bg py-16 border-b border-editor-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
            Who We Are
          </motion.span>
          <motion.h1
            {...inView(0.12)}
            className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em]"
          >
            About <span className="italic">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="max-w-4xl">
          <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
            Official BIOXCIN Distributor in Lebanon
          </motion.span>
          <motion.h2 {...inView(0.1)} className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
            Official BIOXCIN Distributor in Lebanon
          </motion.h2>
          <motion.div {...inView(0.2)} className="space-y-6 text-sm leading-relaxed opacity-70">
            <p>
              We are the official distributor of BIOXCIN products in Lebanon, committed to delivering high-quality hair care solutions through a reliable and professional distribution network.
            </p>
            <p>
              Our mission is to strengthen the presence of BIOXCIN within the Lebanese market by partnering with pharmacies, cosmetic retailers, and healthcare-related businesses that value quality, authenticity, and customer trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-editor-bg border-t border-editor-border py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
              How We Work
            </motion.span>
            <motion.h2 {...inView(0.1)} className="font-serif text-3xl lg:text-4xl italic font-light">
              Our Approach
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={22} />, title: 'Original Products', desc: 'Supplying original BIOXCIN products with guaranteed authenticity.' },
              { icon: <Layers size={22} />, title: 'Storage & Distribution', desc: 'Maintaining high standards in storage and distribution at every step.' },
              { icon: <Handshake size={22} />, title: 'Partnerships', desc: 'Building sustainable partnerships with pharmacies and retailers.' },
              { icon: <BarChart2 size={22} />, title: 'Brand Development', desc: 'Supporting brand development across the Lebanese market.' },
              { icon: <CheckCircle size={22} />, title: 'Consistency', desc: 'Ensuring product availability and consistency for all partners.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...inView(i * 0.18)}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.09)' }}
                className="flex flex-col items-center text-center p-8 border border-editor-border bg-white cursor-default"
              >
                <motion.span
                  className="opacity-40 mb-4 block"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.4 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, delay: 0.45 + i * 0.18, ease: EASE_SPRING }}
                >
                  {item.icon}
                </motion.span>
                <h4 className="font-serif italic text-lg mb-3">{item.title}</h4>
                <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Network & Our Values */}
      <section className="border-t border-editor-border py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Our Network */}
            <div>
              <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
                Reach
              </motion.span>
              <motion.h2 {...inView(0.1)} className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
                Our Network
              </motion.h2>
              <motion.div {...inView(0.2)} className="space-y-6 text-sm leading-relaxed opacity-70">
                <p>
                  BIOXCIN products are distributed through selected pharmacies and cosmetic stores across Lebanon to ensure proper accessibility and professional market presence.
                </p>
                <p>
                  We continuously work on expanding our retail and pharmacy network while maintaining the highest standards of service and professionalism.
                </p>
              </motion.div>
            </div>

            {/* Our Values */}
            <div>
              <motion.span {...inView(0.1)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
                Principles
              </motion.span>
              <motion.h2 {...inView(0.2)} className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
                Our Values
              </motion.h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Star size={20} />, title: 'Quality', desc: 'We believe that product quality and authenticity are essential for long-term customer trust.' },
                  { icon: <Users size={20} />, title: 'Professionalism', desc: 'We aim to build strong and transparent relationships with our business partners.' },
                  { icon: <TrendingUp size={20} />, title: 'Growth', desc: 'We are committed to supporting the continuous growth of the BIOXCIN brand in Lebanon.' },
                  { icon: <CheckCircle size={20} />, title: 'Reliability', desc: 'We strive to provide consistent product availability and dependable support to our retail partners.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...inView(0.15 + i * 0.18)}
                    whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}
                    className="flex flex-col items-center text-center p-6 border border-editor-border bg-white cursor-default"
                  >
                    <motion.span
                      className="opacity-40 mb-3 block"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.4 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.9, delay: 0.5 + i * 0.18, ease: EASE_SPRING }}
                    >
                      {item.icon}
                    </motion.span>
                    <h4 className="font-serif italic text-lg mb-3">{item.title}</h4>
                    <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Partnerships */}
      <section className="bg-editor-bg border-t border-editor-border py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
              Collaborate
            </motion.span>
            <motion.h2 {...inView(0.1)} className="font-serif text-3xl lg:text-4xl italic font-light">
              Business Partnerships
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Pharmacies', desc: 'Licensed pharmacies looking to expand their hair care and dermatology product range.' },
              { title: 'Cosmetic Stores', desc: 'Beauty and cosmetic retailers focused on premium and professional-grade products.' },
              { title: 'Beauty Retailers', desc: 'Salons, spas, and beauty outlets serving quality-conscious customers.' },
              { title: 'Distribution Channels', desc: 'Wholesale distributors and supply chain partners across Lebanon.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...inView(i * 0.18)}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.09)' }}
                className="flex flex-col items-center text-center p-8 border border-editor-border bg-white cursor-default"
              >
                <h4 className="font-serif italic text-lg mb-3">{item.title}</h4>
                <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...inView(0.5)} className="text-center mt-16">
            <p className="text-sm leading-relaxed opacity-70 mb-8 max-w-2xl mx-auto">
              For partnership inquiries, please contact our business development team.
            </p>
            <Link
              to="/partnership"
              className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              <motion.span
                whileHover={{ opacity: 0.85 }}
                className="bg-editor-text text-white px-10 py-4 transition-opacity"
              >
                Contact Us
              </motion.span>
              <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-editor-bg border-t border-editor-border py-24">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
            Get in Touch
          </motion.span>
          <motion.h2 {...inView(0.1)} className="font-serif text-3xl lg:text-4xl italic font-light mb-8">
            Contact Us
          </motion.h2>
          <motion.div {...inView(0.2)} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="tel:+9616426722"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-editor-border px-8 py-4 bg-white hover:bg-editor-text hover:text-editor-bg transition-colors duration-300"
            >
              <Phone size={14} />
              +961 64 267 22
            </motion.a>
            <motion.a
              href="tel:+96170379710"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-editor-border px-8 py-4 bg-white hover:bg-editor-text hover:text-editor-bg transition-colors duration-300"
            >
              <Phone size={14} />
              +961 70 379 710
            </motion.a>
          </motion.div>
          <motion.div {...inView(0.3)} className="mt-10 flex items-start gap-3 justify-center">
            <MapPin size={16} className="opacity-40 mt-0.5 shrink-0" />
            <span className="text-sm opacity-60">
              Helou Plaza, Azmi crossroads<br />
              Tripoli, North Of Lebanon
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
