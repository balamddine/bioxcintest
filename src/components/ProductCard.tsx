import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-8 editorial-border bg-white flex flex-col group transition-all duration-700 hover:bg-editor-bg"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-neutral-100 mb-8 block">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        
      </Link>
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] uppercase tracking-widest opacity-50">Reference: {product.id.slice(0, 8)}</span>
          <span className="text-xs font-serif italic">{product.category}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-2xl italic font-light tracking-tighter uppercase leading-tight mb-4 group-hover:opacity-60 transition-opacity">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs leading-relaxed opacity-60 line-clamp-2 mb-8 flex-1">{product.summary || product.description}</p>
        
        <div className="mt-auto pt-6 border-t border-editor-border">
          <Link 
            to={`/product/${product.id}`}
            className="text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-all flex items-center gap-2 group/link"
          >
            Learn More 
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
