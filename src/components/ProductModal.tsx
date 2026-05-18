import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShoppingCart, ShieldCheck, Leaf, FlaskConical } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

export const ProductModal = ({ product, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative w-full max-w-6xl bg-editor-bg overflow-hidden flex flex-col lg:flex-row max-h-[90vh] editorial-border shadow-none"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 hover:opacity-50 transition-opacity"
          >
            <X size={20} />
          </button>

          {/* Image Side */}
          <div className="lg:w-1/2 bg-neutral-200 border-r border-editor-border overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 overflow-y-auto flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[9px] uppercase tracking-widest opacity-50">
                04 / {product.category}
              </span>
              <div className="h-[1px] w-12 bg-editor-text/20"></div>
              {product.subCategory && (
                <span className="text-[9px] uppercase tracking-widest font-bold">
                  {product.subCategory}
                </span>
              )}
            </div>

            <h2 className="font-serif text-4xl lg:text-6xl font-light italic leading-tight mb-10">{product.name}</h2>
            
            <div className="flex items-baseline gap-4 mb-10 pb-10 border-b border-editor-border">
              <span className="text-3xl font-light tracking-tighter">${product.price.toFixed(2)}</span>
              <span className="text-neutral-400 text-xs italic">{product.size}</span>
            </div>

            <div className="space-y-12 mb-12">
              <section>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Description</h4>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">{product.description}</p>
              </section>

              <div className="grid md:grid-cols-2 gap-12">
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="text-[11px] font-serif italic border-b border-editor-border pb-1">
                        {ing}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Application</h4>
                  <p className="text-[11px] text-neutral-600 italic leading-relaxed">{product.howToUse}</p>
                </section>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <button 
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full bg-editor-text text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-90 transition-all"
              >
                Add to Archive
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
