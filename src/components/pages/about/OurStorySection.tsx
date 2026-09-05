import React from 'react';

export default function OurStorySection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/demo images/DSC_5037_edited.jpg" 
              alt="Our Design Studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 font-secondary">Our Story</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark dark:text-brand-light mb-8 leading-tight">
            Born from a passion for craftsmanship.
          </h2>
          <div className="space-y-6 text-lg text-brand-dark/80 dark:text-brand-light/80 font-secondary leading-relaxed">
            <p>
              Founded with a clear vision, our brand emerged from a simple desire: to create clothing that feels as good as it looks. We noticed a gap in the market for high-quality, sustainable fashion that doesn't compromise on style.
            </p>
            <p>
              Every piece in our collection is thoughtfully designed in our studio, where we draw inspiration from both contemporary art and classic silhouettes. We work exclusively with skilled artisans and ethical manufacturers who share our dedication to quality.
            </p>
            <p>
              Our journey is just beginning, and we are committed to continually evolving, innovating, and pushing the boundaries of what modern fashion can be while staying true to our roots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
