import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { AIAssistant } from './components/AIAssistant';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { Filter, Leaf, FlaskConical, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Hair Care', 'Skin Care', 'Supplement'];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total: cart.reduce((s, i) => s + i.price * i.quantity, 0) })
      });
      const data = await response.json();
      alert(`Success! Order ID: ${data.orderId}`);
      setCart([]);
      setIsCartOpen(false);
    } catch (e) {
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={setSearchTerm}
      />
      
      <main className="flex-1">
        <Hero />

        {/* Brand Values */}
        <section className="bg-editor-bg py-16 border-b border-editor-border">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-12">
            {[
              { title: 'Source', value: '100% Herbal Solutions', desc: 'No harmful synthetics used.' },
              { title: 'Science', value: 'Liposome System', desc: 'Targeted root penetration.' },
              { title: 'Standard', value: 'Clinically Proven', desc: 'Pharmacist-approved formulas.' },
              { title: 'Support', value: 'Expert Assistance', desc: '24/7 specialist consultation.' }
            ].map((v, i) => (
              <div key={i} className="flex flex-col border-l border-editor-border pl-6 first:border-none first:pl-0">
                <span className="text-[9px] uppercase tracking-widest opacity-40 mb-3">{v.title}</span>
                <h4 className="font-serif italic text-lg mb-1">{v.value}</h4>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Browser */}
        <section className="max-w-7xl mx-auto px-10 py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">Discovery Catalog</span>
              <h2 className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em]">Essential <br/><span className="italic">Herbology</span></h2>
            </div>
            
            <div className="flex gap-12 border-b border-editor-border pb-4 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-widest uppercase transition-all relative ${
                    activeCategory === cat 
                    ? 'font-bold opacity-100 after:absolute after:-bottom-5 after:left-0 after:w-full after:h-[2px] after:bg-editor-text' 
                    : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  onViewDetails={setSelectedProduct}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center flex flex-col items-center gap-4">
              <Filter size={48} className="text-neutral-300" />
              <p className="text-neutral-500">No products found matching your search.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="text-brand-green font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-editor-bg border-t border-editor-border py-10 h-24 flex items-center">
        <div className="max-w-7xl mx-auto px-10 w-full flex items-center justify-between">
          <div className="flex gap-10 items-center">
             <p className="text-[10px] uppercase tracking-[0.1em] opacity-60">© 2026 BIOXCIN LABORATORIES</p>
             <div className="w-[1px] h-3 bg-editor-text/20"></div>
             <p className="text-[10px] uppercase tracking-[0.1em] opacity-60">Complimentary Shipping on all orders</p>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Concierge Online</span>
            </div>
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <AIAssistant products={products} />
    </div>
  );
}
