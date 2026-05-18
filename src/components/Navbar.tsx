import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (term: string) => void;
}

export const Navbar = ({ cartCount, onOpenCart, onSearch }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-editor-text hover:opacity-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-60 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Biota / Studio
          </div>
          <span className="font-serif text-3xl font-light tracking-tighter text-editor-text">BIOXCIN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <a href="#" className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">Shop</a>
          <a href="#" className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">Categories</a>
          <a href="#" className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">Archive</a>
          <a href="#" className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">About Lab</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <form onSubmit={handleSubmit} className="hidden md:flex items-center border-b border-editor-text/20 py-1">
            <Search size={14} className="text-editor-text/40" />
            <input 
              type="text" 
              placeholder="SEARCH CATALOG"
              className="bg-transparent border-none focus:outline-none ml-2 text-[10px] tracking-widest uppercase w-32"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 group"
          >
            <span className="text-[10px] tracking-widest uppercase group-hover:opacity-50">Archive</span>
            <div className="w-5 h-5 bg-editor-text rounded-full flex items-center justify-center text-[10px] text-white">
              {cartCount}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a href="#" className="text-lg font-medium text-neutral-800">Hair Care</a>
              <a href="#" className="text-lg font-medium text-neutral-800">Skin Care</a>
              <a href="#" className="text-lg font-medium text-neutral-800">Supplements</a>
              <a href="#" className="text-lg font-medium text-neutral-800">About Lab</a>
              <div className="h-px bg-neutral-100 my-2" />
              <div className="flex items-center bg-neutral-100 rounded-lg px-4 py-3">
                <Search size={18} className="text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="bg-transparent border-none focus:outline-none ml-2 text-sm w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
