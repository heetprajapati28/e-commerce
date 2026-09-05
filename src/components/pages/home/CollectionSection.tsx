import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const collections = [
  {
    title: 'Kirtimukha',
    image: '/demo images/Kirtimukha_front_1.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    title: 'Navagunjara',
    image: '/demo images/Navagunjara_front_1.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    title: 'Nazar',
    image: '/demo images/nazar_front_1.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Shasan',
    image: '/demo images/shasan_front.jpg',
    span: 'col-span-1 row-span-1',
  }
];

export default function CollectionSection() {
  return (
    <section className="w-full bg-white dark:bg-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="max-w-2xl w-full text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark dark:text-brand-light mb-4">
              Curated Collections
            </h2>
          </div>
          <Button variant="outline" className="w-full md:w-auto" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            View All Collections
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6 min-h-[600px]">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${collection.span} bg-brand-gray/10 min-h-[300px]`}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <p className="text-white/80 font-secondary text-sm font-bold uppercase tracking-widest mb-2">Collection</p>
                  <h3 className="text-3xl font-serif text-white">{collection.title}</h3>
                </div>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
