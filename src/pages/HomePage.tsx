import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Headphones, Truck, Package, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface HomePageProps {
  products: Product[];
}

export const HomePage = ({ products }: HomePageProps) => {
  const featuredProducts = products.filter(p => p.isPopular);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const timer = setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="flex-1">
      <Hero products={featuredProducts} />

      {/* Brand Values */}
      <section className="bg-editor-bg py-16 border-b border-editor-border">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-12">
          {[
            { title: 'Authenticity', value: 'Genuine Products', desc: '100% original Bioxcin guaranteed.' },
            { title: 'Expertise', value: 'Guided Selection', desc: 'Personalized product advice.' },
            { title: 'Service', value: 'Reliable Delivery', desc: 'Fast, secure shipping worldwide.' },
            { title: 'Support', value: 'Always Here', desc: 'Dedicated customer assistance.' }
          ].map((v, i) => (
            <div key={i} className="flex flex-col border-l border-editor-border pl-6 first:border-none first:pl-0">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-3">{v.title}</span>
              <h4 className="font-serif italic text-lg mb-1">{v.value}</h4>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-10 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Curated Selection</span>
            <h2 className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em]">Featured <br/><span className="italic">Products</span></h2>
          </div>
          <Link 
            to="/shop" 
            className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity flex items-center gap-2"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="bg-editor-bg border-t border-editor-border py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Why Buy From Us</span>
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light">The Provider Standard</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: 'Authentic Guarantee', desc: 'Every product is 100% genuine Bioxcin, sourced from authorized channels with full traceability.' },
              { icon: Headphones, title: 'Expert Guidance', desc: 'Our knowledgeable team helps you choose the right products for your hair and skin needs.' },
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

      {/* About Us Banner */}
      <section className="relative border-t border-editor-border overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-editor-text/80" />

        <div className="relative max-w-7xl mx-auto px-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 text-white block mb-4">Who We Are</span>
              <h2 className="font-serif text-3xl lg:text-5xl italic font-light leading-tight mb-6 text-white">
                Your Trusted Source for Authentic Bioxcin
              </h2>
              <p className="text-sm leading-relaxed opacity-70 text-white max-w-lg">
                We are an authorized provider dedicated to bringing you genuine, clinically proven Bioxcin formulations with expert guidance and reliable service.
              </p>
            </div>
            <Link
              to="/about"
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold shrink-0"
            >
              <span className="bg-white text-editor-text px-10 py-4 hover:opacity-90 transition-opacity">
                Learn More
              </span>
              <ArrowRight size={16} className="text-white opacity-70 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="max-w-7xl mx-auto px-10 py-24 border-t border-editor-border">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Get In Touch</span>
            <h2 className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-8">
              Contact Us
            </h2>
            <div className="space-y-6 text-sm leading-relaxed opacity-70 max-w-md">
              <p>
                Have questions about a product, need help choosing the right solution, or want to check on your order? Our team is here to help.
              </p>
              <p>
                Reach out and we will get back to you within one business day.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="border border-editor-border bg-white p-10 text-center">
                <h4 className="font-serif italic text-xl mb-3">Thank You</h4>
                <p className="text-sm opacity-60">Your message has been received. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-editor-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-editor-text transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-editor-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-editor-text transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-editor-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-editor-text transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold bg-editor-text text-white px-10 py-4 hover:opacity-80 transition-opacity"
                >
                  Send Message
                  <Send size={14} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
