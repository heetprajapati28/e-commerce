import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function LookbookSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 border-b border-brand-gray/20 pb-8">
        <div className="max-w-2xl w-full text-center md:text-left">
          <p className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 font-secondary">Editorial</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-dark dark:text-brand-light leading-none">
            The Lookbook
          </h2>
        </div>
        <div className="flex gap-4 items-center w-full md:w-auto">
          <Button variant="outline" className="w-full" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Explore All Looks
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
        {/* Sticky Left Column - Featured Image */}
        <div className="lg:w-1/2 lg:sticky lg:top-32 lg:h-[calc(100vh-160px)]">
          <div className="relative w-full h-[60vh] lg:h-full rounded-[2rem] overflow-hidden bg-brand-gray/10 group">
            <img
              src="/demo images/DSC09583.jpg"
              alt="Featured Look"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

            {/* Overlay Text */}
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mb-2 block font-secondary">Look 01</span>
                <h3 className="text-3xl font-serif">Urban Nomad</h3>
              </div>
              <Button variant="outline" className="!bg-white/20 !border-white/30 !text-white hover:!bg-white hover:!text-brand-dark backdrop-blur-md">
                Shop The Look
              </Button>
            </div>
          </div>
        </div>

        {/* Scrolling Right Column - Secondary Images */}
        <div className="lg:w-1/2 flex flex-col gap-8 lg:gap-32 pt-8 lg:pt-32 pb-8">

          {/* Look 02 */}
          <div className="relative group flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3 aspect-[3/4] rounded-3xl overflow-hidden bg-brand-gray/10 relative">
              <img
                src="/demo images/DSC_0969.jpg"
                alt="Look 02"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <span className="text-brand-gray dark:text-brand-light/60 text-xs font-bold uppercase tracking-widest mb-2 font-secondary">Look 02</span>
              <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-4">Midnight Velvet</h3>
              <p className="text-sm font-secondary text-brand-dark/70 dark:text-brand-light/70 mb-6">
                Rich textures and dark tones perfectly balanced for evening elegance.
              </p>
              <a href="#" className="text-sm font-bold uppercase tracking-widest text-brand-blue hover:text-brand-dark dark:hover:text-brand-light transition-colors flex items-center gap-2">
                Shop Items <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Look 03 */}
          <div className="relative group flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-2/3 aspect-[4/5] rounded-3xl overflow-hidden bg-brand-gray/10 relative">
              <img
                src="/demo images/DSC_5037_edited.jpg"
                alt="Look 03"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center md:text-right">
              <span className="text-brand-gray dark:text-brand-light/60 text-xs font-bold uppercase tracking-widest mb-2 font-secondary">Look 03</span>
              <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-4">Minimalist Core</h3>
              <p className="text-sm font-secondary text-brand-dark/70 dark:text-brand-light/70 mb-6">
                Back to basics with structured silhouettes and neutral palettes.
              </p>
              <a href="#" className="text-sm font-bold uppercase tracking-widest text-brand-blue hover:text-brand-dark dark:hover:text-brand-light transition-colors flex items-center md:justify-end gap-2">
                Shop Items <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Look 04 */}
          <div className="relative group flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3 aspect-[3/4] rounded-3xl overflow-hidden bg-brand-gray/10 relative">
              <img
                src="/demo images/Navagunjara_front_1.jpg"
                alt="Look 04"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <span className="text-brand-gray dark:text-brand-light/60 text-xs font-bold uppercase tracking-widest mb-2 font-secondary">Look 04</span>
              <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-4">Navagunjara Edit</h3>
              <p className="text-sm font-secondary text-brand-dark/70 dark:text-brand-light/70 mb-6">
                Discover the intricate details and vibrant colors of our latest collection.
              </p>
              <a href="#" className="text-sm font-bold uppercase tracking-widest text-brand-blue hover:text-brand-dark dark:hover:text-brand-light transition-colors flex items-center gap-2">
                Shop Items <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
