'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/data/products';
import { Filter, X, ChevronDown } from 'lucide-react';

interface ShopClientProps {
  products: Product[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique filters from data
  const genders = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      const parts = p.category.split(' / ');
      if (parts[0]) set.add(parts[0].trim());
    });
    return Array.from(set);
  }, [products]);

  const types = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      const parts = p.category.split(' / ');
      if (parts[1]) set.add(parts[1].trim());
    });
    return Array.from(set);
  }, [products]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const parts = p.category.split(' / ');
      const gender = parts[0]?.trim() || '';
      const type = parts[1]?.trim() || '';

      const matchesGender = selectedGenders.length === 0 || selectedGenders.includes(gender);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(type);

      return matchesGender && matchesType;
    }).sort((a, b) => {
      if (sortOrder === 'price-low') return a.price - b.price;
      if (sortOrder === 'price-high') return b.price - a.price;
      return 0; // 'featured' keeps default order
    });
  }, [products, selectedGenders, selectedTypes, sortOrder]);

  const toggleGender = (gender: string) => {
    setSelectedGenders(prev => prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]);
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="mt-2 relative w-full h-[30vh] md:h-[40vh] overflow-hidden flex items-center justify-center">
        <img
          src="/demo images/DSC09583.jpg"
          alt="Shop Collection"
          className="absolute rounded-3xl inset-0 w-full h-full object-cover p-2"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight uppercase tracking-widest drop-shadow-lg">
            Shop
          </h1>
        </div>
      </div>

      <div className="py-12 md:py-16 px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between md:justify-end items-center md:items-end mb-12">
          {/* Sort and Mobile Filter Toggle */}
          <div className="flex justify-between w-full md:w-auto items-center gap-4">
            <button
              className="md:hidden flex items-center gap-2 font-secondary font-bold text-sm uppercase tracking-wider text-brand-dark dark:text-brand-light"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            <div className="relative group">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none bg-transparent font-secondary font-bold text-sm uppercase tracking-wider text-brand-dark dark:text-brand-light border-b border-brand-dark/20 dark:border-brand-light/20 pb-1 pr-6 focus:outline-none focus:border-brand-dark dark:focus:border-brand-light cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-0 text-brand-dark dark:text-brand-light pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className={`fixed inset-0 z-[100] bg-white dark:bg-brand-dark p-6 overflow-y-auto transform transition-transform duration-300 md:sticky md:top-40 md:h-[calc(100vh-10rem)] md:z-10 md:translate-x-0 md:bg-transparent md:dark:bg-transparent md:p-0 md:w-64 md:flex-shrink-0 md:pr-8 ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center md:hidden mb-10 pb-4 border-b border-brand-gray/20">
              <h2 className="font-serif text-2xl text-brand-dark dark:text-brand-light">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2 text-brand-dark/60 hover:text-brand-dark dark:text-brand-light/60 dark:hover:text-brand-light transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-10">
              {/* Gender Filter */}
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-brand-dark dark:text-brand-light mb-4 font-secondary">Department</h3>
                <ul className="space-y-3">
                  {genders.map(gender => (
                    <li key={gender} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`gender-${gender}`}
                        checked={selectedGenders.includes(gender)}
                        onChange={() => toggleGender(gender)}
                        className="w-4 h-4 rounded border-brand-gray text-brand-blue focus:ring-brand-blue"
                      />
                      <label htmlFor={`gender-${gender}`} className="ml-3 font-secondary text-brand-dark/80 dark:text-brand-light/80 cursor-pointer hover:text-brand-blue transition-colors">
                        {gender}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-brand-dark dark:text-brand-light mb-4 font-secondary">Category</h3>
                <ul className="space-y-3">
                  {types.map(type => (
                    <li key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="w-4 h-4 rounded border-brand-gray text-brand-blue focus:ring-brand-blue"
                      />
                      <label htmlFor={`type-${type}`} className="ml-3 font-secondary text-brand-dark/80 dark:text-brand-light/80 cursor-pointer hover:text-brand-blue transition-colors">
                        {type}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <h3 className="   text-2xl text-brand-dark dark:text-brand-light mb-2">No products found</h3>
                <p className="font-secondary text-brand-dark/70 dark:text-brand-light/70">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => { setSelectedGenders([]); setSelectedTypes([]); }}
                  className="mt-6 font-secondary font-bold text-sm uppercase tracking-wider text-brand-blue hover:text-brand-dark dark:hover:text-brand-light transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
