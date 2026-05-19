import React from 'react';
import { motion } from 'motion/react';
import { Package, ShieldCheck, HeadphonesIcon, Truck, MapPin, Phone, Globe, Building2 } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="flex-1">
      <section className="bg-editor-bg py-16 border-b border-editor-border">
        <div className="max-w-7xl mx-auto px-10">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Who We Are</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em]">Your <span className="italic">Bioxcin</span> Agent in Lebanon</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">About Our Company</span>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-3xl lg:text-4xl italic font-light leading-tight">
                About NextWays
              </h2>
            </div>
            <div className="space-y-6 text-sm leading-relaxed opacity-70">
              <p>
                NextWays SARL is a specialized import, distribution, and wholesale company focused on delivering high-quality dietary supplements, vitamins, and cosmetic products to the local market.
              </p>
              <p>
                Our company is committed to building strong and reliable partnerships with pharmacies, retailers, wholesalers, and healthcare-related businesses by providing carefully selected products that combine quality, safety, and market demand.
              </p>
              <p>
                At NextWays, we believe that successful distribution is built on trust, consistency, and long-term relationships. For this reason, we work closely with international manufacturers and suppliers to ensure dependable sourcing, product authenticity, and continuous availability.
              </p>
              <p>
                We are the exclusive agent for Bioxcin in Lebanon. For wholesale purchases and business inquiries, please contact us directly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white border border-editor-border p-10">
              <h3 className="font-serif italic text-xl mb-6">Our Product Portfolio</h3>
              <ul className="space-y-4 text-sm opacity-70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-editor-text/40 rounded-full" />
                  Dietary supplements and vitamins
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-editor-text/40 rounded-full" />
                  Hair care products and shampoos
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-editor-text/40 rounded-full" />
                  Skincare products and creams
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-editor-text/40 rounded-full" />
                  Natural and cosmetic oils
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-editor-text/40 rounded-full" />
                  Personal care solutions
                </li>
              </ul>
            </div>

            <div className="bg-white border border-editor-border p-10">
              <h3 className="font-serif italic text-xl mb-6">International Partners</h3>
              <ul className="space-y-4 text-sm opacity-70">
                <li className="flex items-center gap-3">
                  <Globe size={14} className="opacity-40" />
                  HC Clover PS – Spain
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={14} className="opacity-40" />
                  Lecifarma – Portugal
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={14} className="opacity-40" />
                  Biota Laboratories – Türkiye
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-editor-bg border-t border-editor-border py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Why Buy From Us</span>
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light">The NextWays Standard</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: 'Authentic Guarantee', desc: 'Every product is 100% genuine Bioxcin, sourced from authorized channels with full traceability.' },
              { icon: Building2, title: 'Wholesale Partner', desc: 'We supply pharmacies, retailers, and wholesalers with competitive pricing and reliable service.' },
              { icon: Truck, title: 'Reliable Delivery', desc: 'Fast, secure shipping with careful packaging to ensure your order arrives in perfect condition.' },
              { icon: Package, title: 'Curated Range', desc: 'We stock the full Bioxcin collection, from hair care essentials to targeted skin solutions.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 border border-editor-border bg-white"
              >
                <item.icon size={32} className="mb-6 opacity-40" />
                <h4 className="font-serif italic text-lg mb-3">{item.title}</h4>
                <p className="text-[11px] leading-relaxed opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-neutral-200 aspect-square overflow-hidden editorial-border order-2 lg:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
              alt="Bioxcin Products"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
              About Bioxcin
            </h2>
            <div className="space-y-6 text-sm leading-relaxed opacity-70">
              <p>
                Bioxcin Laboratories has been at the forefront of botanical pharmacology since 2007. Their Istanbul-based research facility pioneered the BioComplex B11 liposome delivery system, a breakthrough that allows active botanical ingredients to penetrate deeply into hair follicles and skin layers.
              </p>
              <p>
                Every Bioxcin formulation is developed in collaboration with certified pharmacists, dermatologists, and trichologists. The brand holds multiple patents and has published peer-reviewed studies validating the efficacy of its herbal solutions.
              </p>
              <p>
                As the exclusive agent for Bioxcin in Lebanon, NextWays SARL is proud to bring these scientifically backed, pharmacist-approved products to our customers with the trust and transparency they deserve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-editor-bg border-t border-editor-border py-24">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Get in Touch</span>
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light mb-8">
              Wholesale & Business Inquiries
            </h2>
            <p className="text-sm leading-relaxed opacity-70 mb-10 max-w-2xl mx-auto">
              Are you a pharmacy, retailer, or wholesaler interested in carrying Bioxcin products? NextWays SARL offers competitive wholesale pricing, reliable supply chain management, and professional collaboration. Contact us today to discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:+9616426722" 
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-editor-border px-8 py-4 bg-white hover:bg-editor-text hover:text-editor-bg transition-all duration-300"
              >
                <Phone size={14} />
                +961 64 267 22
              </a>
              <a 
                href="tel:+96170379710" 
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest border border-editor-border px-8 py-4 bg-white hover:bg-editor-text hover:text-editor-bg transition-all duration-300"
              >
                <Phone size={14} />
                +961 70 379 710
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
