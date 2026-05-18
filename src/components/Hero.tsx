import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface HeroProps {
  products: Product[];
}

export const Hero = ({ products }: HeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  useEffect(() => {
    if (products.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % products.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    if (!products.length) return;
    setActiveIndex(index => (index - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    if (!products.length) return;
    setActiveIndex(index => (index + 1) % products.length);
  };

  return (
    <section className="relative overflow-hidden bg-editor-bg border-b border-editor-border min-h-[680px]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-10 py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-[1fr_520px] gap-16 items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-[1px] w-12 bg-editor-text/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
                Authorized Bioxcin Reseller
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-6xl lg:text-[7.5rem] font-light leading-[0.9] -tracking-[0.04em] mb-12"
            >
              Genuine <span className="italic font-normal">Bioxcin</span><br />
              Catalogue Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm leading-relaxed opacity-60 mb-16 max-w-lg"
            >
              We supply authentic Bioxcin hair care, skin care, and supplement products
              for customers, retailers, and professional buyers who need reliable access
              to the full catalogue with clear product guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex items-center gap-10"
            >
              <Link
                to="/shop"
                className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                <span className="bg-editor-text text-white px-10 py-4 hover:opacity-80 transition-opacity">
                  Browse Catalogue
                </span>
                <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
              </Link>
              <Link to="/about" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline underline-offset-4 decoration-editor-text/20">
                About us
              </Link>
            </motion.div>
          </div>

          {activeProduct && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-white/40" />
              <div className="relative bg-white editorial-border p-6 lg:p-8">
                <div className="relative aspect-[4/3] bg-editor-bg overflow-hidden mb-8">
                  <motion.img
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="w-full h-full object-contain p-6"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest opacity-40 block mb-2">
                      Reseller Highlight
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                      {activeProduct.subCategory}
                    </span>
                  </div>
                  <span className="text-[10px] font-serif italic opacity-50">
                    {activeIndex + 1} / {products.length}
                  </span>
                </div>

                <h2 className="font-serif text-3xl lg:text-4xl italic font-light leading-tight mb-5">
                  {activeProduct.name}
                </h2>
                <p className="text-xs leading-relaxed opacity-60 line-clamp-3 mb-8">
                  {activeProduct.summary || activeProduct.description}
                </p>

                <div className="flex items-center justify-between border-t border-editor-border pt-6">
                  <Link
                    to={`/product/${activeProduct.id}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-opacity flex items-center gap-2"
                  >
                    View Product <ArrowRight size={14} />
                  </Link>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={goToPrevious}
                      className="w-9 h-9 border border-editor-border flex items-center justify-center hover:bg-editor-bg transition-colors"
                      aria-label="Previous featured product"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <button
                      onClick={goToNext}
                      className="w-9 h-9 border border-editor-border flex items-center justify-center hover:bg-editor-bg transition-colors"
                      aria-label="Next featured product"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  {products.map((product, index) => (
                    <button
                      key={product.id}
                      onClick={() => setActiveIndex(index)}
                      className={`h-[2px] flex-1 transition-colors ${index === activeIndex ? 'bg-editor-text' : 'bg-editor-border'
                        }`}
                      aria-label={`Show ${product.name}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
