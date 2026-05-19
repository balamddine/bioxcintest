import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowUp, MapPin, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { products } from './data/products';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

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
      <ScrollToTop />
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
      <footer className="bg-editor-bg border-t border-editor-border">
        <div className="max-w-7xl mx-auto px-10 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="NextWays SARL" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-sm leading-relaxed opacity-60 max-w-md mb-8">
                Exclusive agent of Bioxcin in Lebanon. A specialized import, distribution, and wholesale company delivering high-quality dietary supplements, vitamins, and cosmetic products.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="opacity-40 mt-0.5 shrink-0" />
                  <span className="text-sm opacity-60">
                    Helou Plaza, Azmi crossroads<br />
                    Tripoli, North Of Lebanon
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="opacity-40 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+9616426722" className="text-sm opacity-60 hover:opacity-100 transition-opacity">+961 64 267 22</a>
                    <a href="tel:+96170379710" className="text-sm opacity-60 hover:opacity-100 transition-opacity">+961 70 379 710</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Navigation</h4>
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Home</Link>
                <Link to="/shop" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Shop</Link>
                <Link to="/shop?category=Hair+Care" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Hair Care</Link>
                <Link to="/shop?category=Skin+Care" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Skin Care</Link>
                <Link to="/shop?category=Supplement" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Supplements</Link>
                <Link to="/about" className="text-sm opacity-60 hover:opacity-100 transition-opacity">About Us</Link>
              </nav>
            </div>

            {/* Brand */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Brand</h4>
              <nav className="flex flex-col gap-4">
                <Link to="/about" className="text-sm opacity-60 hover:opacity-100 transition-opacity">About Bioxcin</Link>
                <Link to="/shop" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Our Products</Link>
                
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-editor-border">
          <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.1em] opacity-40">
              © 2026 NextWays SARL. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.1em] opacity-40">
              Exclusive Bioxcin agent in Lebanon.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
