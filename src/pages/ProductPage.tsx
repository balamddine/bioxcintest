import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  products: Product[];
}

export const ProductPage = ({ products }: ProductPageProps) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center py-32">
        <div className="text-center">
          <h2 className="font-serif text-3xl italic mb-4">Product Not Found</h2>
          <p className="text-neutral-500 mb-8">The product you are looking for does not exist.</p>
          <Link 
            to="/shop" 
            className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);

  return (
    <div className="flex-1">
      <section className="bg-editor-bg py-8 border-b border-editor-border">
        <div className="max-w-7xl mx-auto px-10">
          <Link 
            to="/shop" 
            className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Shop
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:w-1/2 bg-neutral-200 overflow-hidden editorial-border"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[9px] uppercase tracking-widest opacity-50">
                {product.category}
              </span>
              <div className="h-[1px] w-12 bg-editor-text/20"></div>
              {product.subCategory && (
                <span className="text-[9px] uppercase tracking-widest font-bold">
                  {product.subCategory}
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl lg:text-6xl font-light italic leading-tight mb-10">{product.name}</h1>
            {product.summary && (
              <p className="text-sm text-neutral-500 leading-relaxed font-light mb-10">{product.summary}</p>
            )}
            
            <div className="flex items-baseline gap-4 mb-10 pb-10 border-b border-editor-border">
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

            <div className="mt-auto pt-8" />
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-editor-bg border-t border-editor-border py-20">
          <div className="max-w-7xl mx-auto px-10">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">You May Also Like</span>
            <h2 className="font-serif text-3xl italic font-light mb-12">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{gap:'8px'}}>
              {relatedProducts.map(product => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="p-8 editorial-border bg-white flex flex-col group transition-all duration-700 hover:bg-editor-bg"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-100 mb-8">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest opacity-50 mb-2">{product.category}</span>
                  <h3 className="font-serif text-xl italic font-light tracking-tighter uppercase leading-tight">{product.name}</h3>

                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
