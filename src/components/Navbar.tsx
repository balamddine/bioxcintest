import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const categories = ['Hair Care', 'Skin Care', 'Supplement'];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleCategoryClick = (cat: string) => {
    setIsDropdownOpen(false);
    navigate(`/shop?category=${encodeURIComponent(cat)}`);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
    setIsMenuOpen(false);
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
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="NextWays SARL" className="h-10  object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <Link to="/shop" className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">Shop</Link>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity flex items-center gap-1"
            >
              Categories <ChevronDown size={12} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-4 bg-white border border-editor-border shadow-lg min-w-[180px] py-2 z-50"
                >
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className="block w-full text-left px-6 py-3 text-[10px] tracking-widest uppercase hover:bg-editor-bg transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link to="/about" className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">About Us</Link>
          <button onClick={handleContactClick} className="text-[10px] tracking-widest uppercase hover:opacity-50 transition-opacity">Contact</button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <form onSubmit={handleSearch} className="hidden md:flex items-center border-b border-editor-text/20 py-1">
            <Search size={14} className="text-editor-text/40" />
            <input 
              type="text" 
              placeholder="SEARCH CATALOG"
              className="bg-transparent border-none focus:outline-none ml-2 text-[10px] tracking-widest uppercase w-32"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
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
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-neutral-800">Shop</Link>
              <div className="h-px bg-neutral-100" />
              <span className="text-xs uppercase tracking-widest opacity-40">Categories</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { handleCategoryClick(cat); setIsMenuOpen(false); }}
                  className="text-lg font-medium text-neutral-800 text-left"
                >
                  {cat}
                </button>
              ))}
              <div className="h-px bg-neutral-100 my-2" />
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-neutral-800">About Us</Link>
              <button onClick={handleContactClick} className="text-lg font-medium text-neutral-800 text-left">Contact</button>
              <div className="h-px bg-neutral-100 my-2" />
              <form onSubmit={handleSearch} className="flex items-center bg-neutral-100 rounded-lg px-4 py-3">
                <Search size={18} className="text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="bg-transparent border-none focus:outline-none ml-2 text-sm w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
