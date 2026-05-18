import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Beaker } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-editor-bg py-24 lg:py-32 border-b border-editor-border">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
              Spring / Summer 2024 Collection
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-8xl font-light leading-[0.9] -tracking-[0.03em] mb-10">
            The Art of <br/><span className="italic font-normal">Botanical</span> <br/>Living
          </h1>
          <p className="text-sm leading-relaxed opacity-70 mb-12 max-w-md">
            A meticulously curated range of herbal solutions designed for modern health and skin. Focusing on liposome technology, natural form, and clinical longevity.
          </p>
          <div className="flex items-center gap-8">
            <button className="px-10 py-4 bg-editor-text text-white text-[10px] uppercase tracking-widest hover:opacity-80 transition-opacity">
              Explore Collection
            </button>
            <div className="h-[1px] w-12 bg-editor-text/30"></div>
            <span className="text-[9px] uppercase tracking-widest opacity-50">Learn Science</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] relative z-10 bg-neutral-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop" 
              alt="Scientific Botanical Skincare"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-10 -right-10 text-[120px] font-serif italic text-editor-text/5 select-none -z-10 tracking-tighter">
            Nature
          </div>
        </motion.div>
      </div>
    </section>
  );
};
