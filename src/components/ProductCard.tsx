import React from 'react';
import { motion } from 'motion/react';
import { Plus, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-8 editorial-border bg-white flex flex-col group transition-all duration-700 hover:bg-editor-bg"
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-100 mb-8">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        {product.isPopular && (
          <span className="absolute top-4 left-4 bg-editor-text text-white text-[8px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
            Curated
          </span>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] uppercase tracking-widest opacity-50">Reference: {product.id.slice(0, 8)}</span>
          <span className="text-xs font-serif italic">{product.category}</span>
        </div>
        
        <h3 className="font-serif text-2xl italic font-light tracking-tighter uppercase leading-tight mb-4 group-hover:opacity-60 transition-opacity cursor-pointer" onClick={() => onViewDetails(product)}>
          {product.name}
        </h3>
        
        <p className="text-xs leading-relaxed opacity-60 line-clamp-2 mb-8 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-editor-border">
          <span className="text-lg font-light tracking-tighter">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-all flex items-center gap-2"
          >
            Add to Archive <Plus size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
