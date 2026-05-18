import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { products } from './data/products';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100;
      setShowScrollTop(prev => prev === shouldShow ? prev : shouldShow);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="/product/:id" element={<ProductPage products={products} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest border border-editor-border px-5 py-3 bg-white shadow-lg hover:bg-editor-bg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={14} />
        Top
      </button>

      {/* Footer */}
      <footer className="bg-editor-bg border-t border-editor-border py-10 flex items-center">
        <div className="max-w-7xl mx-auto px-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-10 items-center">
             <p className="text-[10px] uppercase tracking-[0.1em] opacity-60">© 2026 Bioxcin Provider</p>
          </div>
          <nav className="flex gap-8 items-center">
            <Link to="/shop" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Shop</Link>
            <Link to="/shop?category=Hair+Care" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Hair Care</Link>
            <Link to="/shop?category=Skin+Care" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Skin Care</Link>
            <Link to="/shop?category=Supplement" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Supplement</Link>
            <Link to="/about" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">About Us</Link>
          </nav>
        </div>
      </footer>

    </div>
  );
}
