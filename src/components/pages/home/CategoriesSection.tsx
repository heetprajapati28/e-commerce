import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Men',
    image: '/demo images/IMG_6373.jpg',
    href: '/men',
  },
  {
    title: 'Women',
    image: '/demo images/DSC09583.jpg',
    href: '/women',
  },
  {
    title: 'Kids',
    image: '/demo images/IMG_6372.jpg',
    href: '/kids',
  }
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-white dark:bg-brand-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl w-full text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark dark:text-brand-light mb-4">
              Shop by Category
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 min-h-[500px]">
          {categories.map((category, index) => (
            <a
              href={category.href}
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-brand-gray/10 flex flex-col justify-end min-h-[400px] md:min-h-[500px]"
            >
              <img
                src={category.image}
                alt={`${category.title} category`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative p-8 w-full flex justify-between items-center z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl md:text-5xl font-serif text-white">{category.title}</h3>

                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-brand-dark transition-all duration-500 shadow-lg opacity-0 group-hover:opacity-100">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
