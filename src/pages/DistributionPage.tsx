import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Building2, Sparkles, Heart, Truck, ShieldCheck, Award, Users, TrendingUp } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.4, ease: EASE, delay },
});

export const DistributionPage = () => {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="bg-editor-bg py-16 border-b border-editor-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
            Opportunities
          </motion.span>
          <motion.h1
            {...inView(0.1)}
            className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em]"
          >
            Distribution <span className="italic">Partnerships</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="max-w-4xl">
          <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
            Become a Partner
          </motion.span>
          <motion.h2 {...inView(0.08)} className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
            Become a BIOXCIN Retail Partner
          </motion.h2>
          <motion.div {...inView(0.16)} className="space-y-6 text-sm leading-relaxed opacity-70">
            <p>
              We collaborate with pharmacies, cosmetic stores, and professional retail partners across Lebanon to expand access to BIOXCIN products and strengthen the brand&apos;s market presence.
            </p>
            <p>
              Our distribution model is built on professionalism, product quality, and long-term partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-editor-bg border-t border-editor-border py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
              Advantages
            </motion.span>
            <motion.h2 {...inView(0.08)} className="font-serif text-3xl lg:text-4xl italic font-light">
              Why Partner With BIOXCIN?
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'International Hair Care Brand', desc: 'BIOXCIN is recognized for its advanced hair care solutions and botanical formulas.' },
              { title: 'Reliable Product Supply', desc: 'We work to ensure stable product availability and professional distribution support.' },
              { title: 'Professional Market Positioning', desc: 'BIOXCIN products are positioned within the premium hair care and scalp care segment.' },
              { title: 'Business Support', desc: 'We support our partners through product guidance, brand development, and market expansion initiatives.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...inView(i * 0.2)}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.09)' }}
                className="flex flex-col items-center text-center p-8 border border-editor-border bg-white cursor-default"
              >
                <h4 className="font-serif italic text-lg mb-3">{item.title}</h4>
                <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Partner + Our Commitment */}
      <section className="border-t border-editor-border py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Who Can Partner */}
            <div>
              <div className="text-center mb-10">
                <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
                  Eligibility
                </motion.span>
                <motion.h2 {...inView(0.08)} className="font-serif text-3xl lg:text-4xl italic font-light">
                  Who Can Partner With Us?
                </motion.h2>
              </div>
              <div className="grid grid-cols-2 gap-4 auto-rows-fr">
                {[
                  { icon: <Building2 size={22} />, title: 'Pharmacies', desc: 'Retail pharmacies seeking to offer certified hair and scalp care products.' },
                  { icon: <Sparkles size={22} />, title: 'Cosmetic & Beauty Stores', desc: 'Beauty boutiques looking to expand with a premium international brand.' },
                  { icon: <Heart size={22} />, title: 'Healthcare Retailers', desc: 'Health-focused stores aligned with professional product quality standards.' },
                  { icon: <Truck size={22} />, title: 'Beauty Distributors', desc: 'Established distributors with existing beauty and wellness networks.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...inView(0.1 + i * 0.18)}
                    whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}
                    className="flex flex-col items-center text-center p-8 border border-editor-border bg-white h-full cursor-default"
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
                    <h4 className="font-serif italic text-base mb-3">{item.title}</h4>
                    <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Our Commitment */}
            <div>
              <div className="text-center mb-10">
                <motion.span {...inView(0.1)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
                  Promise
                </motion.span>
                <motion.h2 {...inView(0.18)} className="font-serif text-3xl lg:text-4xl italic font-light">
                  Our Commitment
                </motion.h2>
              </div>
              <div className="grid grid-cols-2 gap-4 auto-rows-fr">
                {[
                  { icon: <ShieldCheck size={22} />, title: 'Original Products', desc: 'All BIOXCIN products are 100% authentic, sourced directly from the manufacturer.' },
                  { icon: <Award size={22} />, title: 'Distribution Standards', desc: 'We uphold strict quality controls throughout the entire supply chain.' },
                  { icon: <Users size={22} />, title: 'Sustainable Partnerships', desc: 'We invest in long-term relationships built on trust and mutual growth.' },
                  { icon: <TrendingUp size={22} />, title: 'Retail Growth Support', desc: 'We provide the tools and support to help your retail business expand.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...inView(0.2 + i * 0.18)}
                    whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}
                    className="flex flex-col items-center text-center p-8 border border-editor-border bg-white h-full cursor-default"
                  >
                    <motion.span
                      className="opacity-40 mb-4 block"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.4 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.9, delay: 0.55 + i * 0.18, ease: EASE_SPRING }}
                    >
                      {item.icon}
                    </motion.span>
                    <h4 className="font-serif italic text-base mb-3">{item.title}</h4>
                    <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="max-w-4xl">
          <motion.span {...inView(0)} className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">
            Get Started
          </motion.span>
          <motion.h2 {...inView(0.08)} className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
            Business Inquiries
          </motion.h2>
          <motion.p {...inView(0.16)} className="text-sm leading-relaxed opacity-70 mb-12">
            If you are interested in becoming an authorized BIOXCIN retail partner in Lebanon, our team will be pleased to assist you.
          </motion.p>
          <motion.div {...inView(0.24)} className="flex flex-col sm:flex-row items-start gap-6">
            <motion.a
              href="tel:+9616426722"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-editor-border px-8 py-4 bg-white hover:bg-editor-text hover:text-editor-bg transition-colors duration-300"
            >
              <Phone size={14} />
              Contact Our Team
            </motion.a>
            <motion.a
              href="https://wa.me/96170379710"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-editor-border px-8 py-4 bg-white hover:bg-editor-text hover:text-editor-bg transition-colors duration-300"
            >
              <MessageCircle size={14} />
              WhatsApp Business Inquiry
            </motion.a>
          </motion.div>
        </div>
      </section>      
    </div>
  );
};
