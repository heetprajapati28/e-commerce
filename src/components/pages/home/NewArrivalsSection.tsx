import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

import { PRODUCTS } from '@/data/products';

const NEW_ARRIVALS = PRODUCTS.filter(p => p.isNewArrival);

export default function NewArrivalsSection() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 font-secondary">Just Dropped</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark dark:text-brand-light leading-tight">
            New Arrivals
          </h2>
        </div>
        <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
          View All New
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {NEW_ARRIVALS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
