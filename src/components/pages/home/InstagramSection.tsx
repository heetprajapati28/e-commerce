'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const INSTA_POSTS = [
  { id: 1, image: '/demo images/IMG_6352.jpg', likes: '1.2k', comments: '45' },
  { id: 2, image: '/demo images/IMG_6367.jpg', likes: '890', comments: '23' },
  { id: 3, image: '/demo images/IMG_6369.jpg', likes: '2.1k', comments: '112' },
  { id: 4, image: '/demo images/IMG_6371.jpg', likes: '1.5k', comments: '67' },
  { id: 5, image: '/demo images/IMG_6372.jpg', likes: '3.4k', comments: '210' },
  { id: 6, image: '/demo images/IMG_6373.jpg', likes: '945', comments: '34' }
];

function InstaCard({ post }: { post: typeof INSTA_POSTS[0] }) {
  return (
    <a
      href="#"
      className="group relative aspect-square overflow-hidden bg-brand-gray/10 rounded-xl block w-full"
    >
      <img
        src={post.image}
        alt="Instagram post"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-white font-bold font-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 fill-white text-white">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center gap-2 text-white font-bold font-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 fill-white text-white">
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
          <span>{post.comments}</span>
        </div>
      </div>
    </a>
  );
}

export default function InstagramSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 items per slide on mobile
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(INSTA_POSTS.length / itemsPerSlide);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="py-20 md:py-32 w-full border-t border-brand-gray/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark dark:text-brand-light flex items-center justify-center md:justify-start gap-4 mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10 text-brand-dark dark:text-brand-light">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @brand_official
            </h2>
            
            {/* Mobile controls */}
            <div className="flex md:hidden gap-2">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-brand-gray/30 flex items-center justify-center hover:bg-brand-gray/10 text-brand-dark dark:text-brand-light transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-brand-gray/30 flex items-center justify-center hover:bg-brand-gray/10 text-brand-dark dark:text-brand-light transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <Button variant="outline" className="w-full md:w-auto shrink-0 rounded-full px-8 mt-4 md:mt-0">
            Follow Us
          </Button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {INSTA_POSTS.map((post) => (
            <InstaCard key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile Slideshow */}
        <div className="md:hidden relative overflow-hidden -mx-4 px-4 pb-4">
          <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full shrink-0 flex gap-4 pr-4">
                {INSTA_POSTS.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map(post => (
                   <div key={post.id} className="w-1/2">
                     <InstaCard post={post} />
                   </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-brand-dark dark:bg-brand-light' : 'w-2 bg-brand-gray/30 dark:bg-brand-gray/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
