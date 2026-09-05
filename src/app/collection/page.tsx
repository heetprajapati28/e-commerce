import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data/products';

const COLLECTIONS = [
  { id: 'new-arrivals', title: 'New Arrivals', description: 'The latest additions to our curated wardrobe, fresh for the season.' },
  { id: 'best-sellers', title: 'Best Sellers', description: 'Our most loved and highly coveted signature pieces.' },
  { id: 'summer-essentials', title: 'Summer Essentials', description: 'Lightweight fabrics and breathable fits for the warmest days.' },
  { id: 'evening-wear', title: 'Evening Wear', description: 'Sophisticated silhouettes designed for formal events and galas.' },
  { id: 'minimalist-core', title: 'Minimalist Core', description: 'The foundational pieces every wardrobe needs.' },
  { id: 'denim-edition', title: 'The Denim Edition', description: 'Premium selvedge and relaxed fits for everyday mobility.' },
  { id: 'graphic-series', title: 'Graphic Series', description: 'Bold prints and intricate designs that make a statement.' }
];

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-300">
      {/* Collections Grids */}
      <div className="py-20 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full space-y-24 md:space-y-32">
        {COLLECTIONS.map((collection, index) => {
          // Shuffle products so each collection gets different products
          const shuffledProducts = [...PRODUCTS].sort(() => 0.5 - Math.random());
          const collectionProducts = shuffledProducts.slice(0, 4);

          return (
            <section key={collection.id} id={collection.id} className="pt-8 border-t border-brand-gray/10 first:border-t-0 first:pt-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                <div className="max-w-2xl text-center md:text-left w-full">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-dark dark:text-brand-light leading-tight mb-4">
                    {collection.title}
                  </h2>
                  <p className="text-brand-dark/70 dark:text-brand-light/70 font-secondary text-lg">
                    {collection.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {collectionProducts.map((product) => (
                  <ProductCard key={`${collection.id}-${product.id}`} {...product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
