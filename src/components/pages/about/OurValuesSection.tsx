import React from 'react';
import { Leaf, Scissors, Heart, ShieldCheck } from 'lucide-react';

const VALUES = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Sustainability First',
    description: 'We prioritize eco-friendly materials and sustainable practices in every step of our production process to minimize our environmental footprint.'
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Master Craftsmanship',
    description: 'Our garments are meticulously crafted by skilled artisans, ensuring exceptional quality, durability, and a perfect fit.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Ethical Production',
    description: 'We partner only with manufacturers who provide fair wages, safe working conditions, and treat their workers with the utmost respect.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Uncompromising Quality',
    description: 'We source only the finest fabrics and materials, rigorously testing them to ensure they meet our exacting standards for longevity.'
  }
];

export default function OurValuesSection() {
  return (
    <section className="py-20 md:py-32 w-full bg-brand-gray/5 dark:bg-brand-dark/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 font-secondary">Our Core Pillars</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark dark:text-brand-light mb-16">
          What We Stand For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUES.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white dark:bg-brand-dark flex items-center justify-center text-brand-blue mb-6 shadow-sm border border-brand-gray/10">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-dark dark:text-brand-light mb-4">{value.title}</h3>
              <p className="text-brand-dark/70 dark:text-brand-light/70 font-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
