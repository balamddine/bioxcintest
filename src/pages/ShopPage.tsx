import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, X, ChevronLeft, ChevronRight, CheckSquare, Square } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface ShopPageProps {
  products: Product[];
}

interface CategoryNode {
  name: string;
  subCategories: string[];
}

export const ShopPage = ({ products }: ShopPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || '';
  const [searchTerm, setSearchTerm] = useState(urlSearch);
  const [checkedSubs, setCheckedSubs] = useState<Set<string>>(new Set());
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const lastAppliedCategory = useRef<string | null>(null);

  // Build category hierarchy from products
  const categoryTree = useMemo<CategoryNode[]>(() => {
    const map = new Map<string, Set<string>>();
    products.forEach(p => {
      if (!map.has(p.category)) {
        map.set(p.category, new Set());
      }
      if (p.subCategory) {
        map.get(p.category)!.add(p.subCategory);
      }
    });
    return Array.from(map.entries()).map(([name, subs]) => ({
      name,
      subCategories: Array.from(subs).sort(),
    }));
  }, [products]);

  // Sync category URL param to checked subcategories
  useEffect(() => {
    if (urlCategory === lastAppliedCategory.current) return;
    if (!urlCategory || categoryTree.length === 0) return;

    const cat = categoryTree.find(c => c.name === urlCategory);
    if (cat) {
      setCheckedSubs(new Set(cat.subCategories));
      lastAppliedCategory.current = urlCategory;
    } else {
      lastAppliedCategory.current = null;
    }
  }, [urlCategory, categoryTree]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subCategory?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchSub = checkedSubs.size === 0 || (p.subCategory && checkedSubs.has(p.subCategory));

      return matchSearch && matchSub;
    });
  }, [checkedSubs, searchTerm, products]);

  const toggleCategory = (catName: string, subCategories: string[]) => {
    const allChecked = subCategories.every(sub => checkedSubs.has(sub));
    const next = new Set(checkedSubs);
    if (allChecked) {
      subCategories.forEach(sub => next.delete(sub));
    } else {
      subCategories.forEach(sub => next.add(sub));
    }
    setCheckedSubs(next);
  };

  const toggleSubCategory = (sub: string) => {
    const next = new Set(checkedSubs);
    if (next.has(sub)) {
      next.delete(sub);
    } else {
      next.add(sub);
    }
    setCheckedSubs(next);
  };

  const checkAllSubCategories = (subCategories: string[]) => {
    const next = new Set(checkedSubs);
    subCategories.forEach(sub => next.add(sub));
    setCheckedSubs(next);
  };

  const clearFilters = () => {
    setCheckedSubs(new Set());
    setSearchTerm('');
    setSearchParams({});
  };

  const checkAllFilters = () => {
    const allSubs = new Set<string>();
    categoryTree.forEach(cat => {
      cat.subCategories.forEach(sub => allSubs.add(sub));
    });
    setCheckedSubs(allSubs);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    const newParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newParams.set('search', value.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const isCategoryChecked = (subCategories: string[]) =>
    subCategories.length > 0 && subCategories.every(sub => checkedSubs.has(sub));

  const isCategoryIndeterminate = (subCategories: string[]) => {
    const checkedCount = subCategories.filter(sub => checkedSubs.has(sub)).length;
    return checkedCount > 0 && checkedCount < subCategories.length;
  };

  const activeFilterCount = checkedSubs.size + (searchTerm ? 1 : 0);

  const FilterContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`${isMobile ? '' : 'w-full'} flex flex-col gap-2`}>
      {/* Search */}
      <div>
        <label className="text-[10px] uppercase tracking-[0.3em] opacity-40 block mb-3">Search</label>
        <div className="flex items-center border border-editor-border bg-white px-3 py-2">
          <Search size={14} className="text-editor-text/40 shrink-0" />
          <input
            type="text"
            placeholder="Search catalog..."
            className="bg-transparent border-none focus:outline-none ml-2 text-[11px] tracking-wider w-full"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button onClick={() => handleSearchChange('')} className="hover:opacity-60">
              <X size={12} className="text-editor-text/40" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="text-[10px] uppercase tracking-[0.3em] opacity-40">Categories</label>
          <div className="flex items-center gap-3">
            <button
              onClick={checkAllFilters}
              className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline underline-offset-2"
            >
              Check All
            </button>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline underline-offset-2"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {categoryTree.map(cat => {
            const catChecked = isCategoryChecked(cat.subCategories);
            const catIndeterminate = isCategoryIndeterminate(cat.subCategories);
            const checkedCount = cat.subCategories.filter(sub => checkedSubs.has(sub)).length;

            return (
              <div key={cat.name} className="border border-editor-border bg-white">
                {/* Category Header */}
                <div className="w-full flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleCategory(cat.name, cat.subCategories)}
                      className="shrink-0 focus:outline-none"
                    >
                      {catChecked ? (
                        <CheckSquare size={16} className="text-editor-text" />
                      ) : catIndeterminate ? (
                        <div className="w-4 h-4 border border-editor-text bg-editor-text flex items-center justify-center">
                          <div className="w-2 h-[2px] bg-white" />
                        </div>
                      ) : (
                        <Square size={16} className="text-editor-text/40" />
                      )}
                    </button>
                    <span className="text-[11px] uppercase tracking-widest font-medium">{cat.name}</span>
                    <span className="text-[10px] opacity-40">({checkedCount}/{cat.subCategories.length})</span>
                  </div>
                </div>

                {/* Subcategories — always visible */}
                <div className="px-4 pb-3 pt-1 flex flex-col gap-2">
                  <button
                    onClick={() => checkAllSubCategories(cat.subCategories)}
                    className="text-left text-[9px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline underline-offset-2 mb-1"
                  >
                    Check All
                  </button>
                  {cat.subCategories.map(sub => (
                    <label
                      key={sub}
                      className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity py-1"
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubCategory(sub);
                        }}
                        className="shrink-0 focus:outline-none"
                      >
                        {checkedSubs.has(sub) ? (
                          <CheckSquare size={14} className="text-editor-text" />
                        ) : (
                          <Square size={14} className="text-editor-text/40" />
                        )}
                      </button>
                      <span className="text-[11px] tracking-wide">{sub}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1">
      {/* Fixed Desktop Sidebar */}
      <aside
        className={`hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-editor-bg border-r border-editor-border z-30 flex-col pt-28 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute right-3 top-28 p-1.5 hover:bg-editor-border/50 rounded transition-colors"
          aria-label="Collapse sidebar"
        >
          <ChevronLeft size={16} className="opacity-40" />
        </button>
        <div
          className="flex-1 overflow-y-auto px-6 pb-6 pt-2
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:bg-editor-border/40
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-editor-text/30
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:border-2
            [&::-webkit-scrollbar-thumb]:border-solid
            [&::-webkit-scrollbar-thumb]:border-transparent
            [&::-webkit-scrollbar-thumb]:bg-clip-padding
            hover:[&::-webkit-scrollbar-thumb]:bg-editor-text/50"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.25) rgba(0,0,0,0.06)' }}
        >
          <FilterContent />
        </div>
      </aside>

      {/* Sidebar Expand Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`hidden lg:flex fixed left-0 top-28 z-40 items-center gap-2 text-[10px] uppercase tracking-widest border border-editor-border border-l-0 px-3 py-2.5 bg-white shadow-sm hover:bg-editor-bg transition-all duration-300 ${
          isSidebarOpen ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        aria-label="Expand sidebar"
      >
        <ChevronRight size={14} />
        Filters
      </button>

      {/* Hero Banner */}
      <section className={`relative overflow-hidden border-b border-editor-border ${isSidebarOpen ? 'lg:pl-64' : ''}`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/shop_bg.webp)' }}
        />
        <div className="absolute inset-0 bg-editor-text/75" />
        <div className="relative max-w-7xl mx-auto px-10 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 text-white block mb-4">Discovery Catalog</span>
            <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[0.9] -tracking-[0.03em] text-white">
              The <span className="italic">Shop</span>
            </h1>
            <p className="text-sm leading-relaxed opacity-60 text-white mt-6 max-w-md">
              Browse our complete collection of authentic Bioxcin products. Filter by category and subcategory to find the perfect solution for your hair and skin needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`max-w-7xl mx-auto px-10 py-20 ${isSidebarOpen ? 'lg:pl-64' : ''}`}>
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-8">
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold border border-editor-border px-6 py-3 bg-white"
          >
            <Filter size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-editor-text text-white w-5 h-5 rounded-full flex items-center justify-center text-[9px]">
                {activeFilterCount}
              </span>
            )}
          </button>
          <span className="text-[10px] uppercase tracking-widest opacity-40">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* Mobile Filters Drawer */}
        <AnimatePresence>
          {isMobileFiltersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden mb-10 border border-editor-border bg-editor-bg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Filters</span>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <X size={16} className="opacity-40" />
                </button>
              </div>
              <FilterContent isMobile />
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          {/* Products */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] uppercase tracking-widest opacity-40">
                {filteredProducts.length} Products
              </span>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline underline-offset-2"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{gap:"8px"}}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center flex flex-col items-center gap-4">
                <Filter size={48} className="text-neutral-300" />
                <p className="text-neutral-500">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-brand-green font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
