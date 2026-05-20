import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-editor-bg border-t border-editor-border">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="NextWays SARL" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed opacity-60 max-w-md mb-8">
              Official distributor of BIOXCIN products in Lebanon. Committed to delivering high-quality hair care solutions through a reliable and professional distribution network.
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
              <Link to="/partnership" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Partnership</Link>
            </nav>
          </div>

          {/* Brand */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Brand</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/shop" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Products</Link>
              <Link to="/partnership" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Distribution Partnerships</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-editor-border">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.1em] opacity-40">
            © 2026 Nextways Lebanon. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.1em] opacity-40">Distributed by</span>
            <img src="/logo.png" alt="NextWays SARL" className="h-6 w-auto object-contain opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  );
};
