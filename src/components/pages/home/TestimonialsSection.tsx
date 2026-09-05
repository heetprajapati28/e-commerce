'use client';
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Fashion Editor',
    content: "The quality of the pieces is simply unmatched. I've worn the minimalist core collection to fashion week and received countless compliments. It's rare to find such attention to detail.",
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Creative Director',
    content: "Brand has managed to perfectly balance contemporary design with timeless elegance. The silhouettes are structured beautifully and the fabrics feel incredibly premium against the skin.",
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Verified Buyer',
    content: "I purchased the Midnight Velvet look for a gala and it was an absolute showstopper. The fit was perfect right out of the box. Absolutely worth the investment.",
    rating: 5
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-brand-light dark:bg-brand-dark/50 p-8 sm:p-10 rounded-3xl border border-brand-gray/10 hover:border-brand-gray/30 transition-colors duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-brand-dark text-brand-dark dark:fill-brand-light dark:text-brand-light" />
          ))}
        </div>
        <p className="text-lg md:text-xl text-brand-dark dark:text-brand-light/90 leading-relaxed mb-8">
          "{testimonial.content}"
        </p>
      </div>
      <div>
        <p className="font-bold text-brand-dark dark:text-brand-light font-secondary">{testimonial.name}</p>
        <p className="text-sm text-brand-gray dark:text-brand-light/60 font-secondary mt-1">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
      <div className="text-center md:text-left mx-auto mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <div>
          <p className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 font-secondary">Word on the street</p>
          <h2 className="text-4xl md:text-5xl text-brand-dark dark:text-brand-light">
            What our community says
          </h2>
        </div>
        
        {/* Mobile controls */}
        <div className="flex md:hidden gap-4">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-brand-gray/30 flex items-center justify-center hover:bg-brand-gray/10 text-brand-dark dark:text-brand-light transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-brand-gray/30 flex items-center justify-center hover:bg-brand-gray/10 text-brand-dark dark:text-brand-light transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Mobile Slideshow */}
      <div className="md:hidden relative overflow-hidden -mx-4 px-4 pb-4">
        <div 
          className="flex transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="w-full shrink-0 pr-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-brand-dark dark:bg-brand-light' : 'w-2 bg-brand-gray/30 dark:bg-brand-gray/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
