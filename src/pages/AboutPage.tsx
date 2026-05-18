import React from 'react';
import { motion } from 'motion/react';
import { Package, ShieldCheck, HeadphonesIcon, Truck } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="flex-1">
      <section className="bg-editor-bg py-16 border-b border-editor-border">
        <div className="max-w-7xl mx-auto px-10">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Who We Are</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em]">Your <span className="italic">Bioxcin</span> Provider</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
              Bringing Proven Botanical Science to You
            </h2>
            <div className="space-y-6 text-sm leading-relaxed opacity-70">
              <p>
                We are an authorized provider and re-seller of Bioxcin products, dedicated to making clinically proven herbal hair and skin care accessible to everyone. Our mission is simple: connect discerning customers with the authentic, pharmacist-approved formulations they trust.
              </p>
              <p>
                Bioxcin&apos;s proprietary BioComplex B11 technology and liposome delivery systems represent the gold standard in botanical care. We ensure every product in our catalog is sourced directly from verified supply chains, so you receive only genuine, high-quality goods.
              </p>
              <p>
                Whether you are addressing hair loss, seeking healthier skin, or exploring natural supplements, our team is here to guide you to the right solution with honest advice and dependable service.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-neutral-200 aspect-[4/5] overflow-hidden editorial-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
              alt="Bioxcin Products"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-editor-bg border-t border-editor-border py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Why Buy From Us</span>
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light">The Provider Standard</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: 'Authentic Guarantee', desc: 'Every product is 100% genuine Bioxcin, sourced from authorized channels with full traceability.' },
              { icon: HeadphonesIcon, title: 'Expert Guidance', desc: 'Our knowledgeable team helps you choose the right products for your hair and skin needs.' },
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
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop" 
              alt="Research and Development"
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
                As an authorized provider, we are proud to bring these scientifically backed, pharmacist-approved products to our customers with the trust and transparency they deserve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
