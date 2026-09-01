'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { animateAddToCart, animateToWishlist } from '@/lib/animations';

interface ProductCardProps {
  id: string;
  slug?: string;
  title: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  additionalImages?: string[];
  description?: string;
  sizes?: string[];
}

export default function ProductCard({ id, slug, title, price, image, category, additionalImages, description, sizes }: ProductCardProps) {
  const productUrl = slug ? `/product/${slug}` : `/product/${id}`;
  
  const allImages = additionalImages?.length ? additionalImages : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div className="group relative flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-brand-gray/10 mb-4">
          <Link href={productUrl} className="absolute inset-0 z-10">
            <span className="sr-only">View {title}</span>
          </Link>
          <img
            src={allImages[currentImageIndex]}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Navigation Arrows (Visible on Hover if multiple images) */}
          {allImages.length > 1 && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="outline" size="icon" onClick={prevImage} className="!w-8 !h-8 rounded-full !bg-white/70 hover:!bg-white !text-brand-dark !border-transparent shadow-sm backdrop-blur-sm transition-all" aria-label="Previous Image">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextImage} className="!w-8 !h-8 rounded-full !bg-white/70 hover:!bg-white !text-brand-dark !border-transparent shadow-sm backdrop-blur-sm transition-all" aria-label="Next Image">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Hover Actions (Top Right) */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={(e) => animateAddToCart(e, allImages[currentImageIndex])}
              className="!bg-white/90 !text-brand-dark !border-transparent hover:!bg-brand-dark hover:!text-white backdrop-blur-sm shadow-sm rounded-full w-10 h-10" 
              aria-label="Add to Cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setIsQuickViewOpen(true)}
              className="!bg-white/90 !text-brand-dark !border-transparent hover:!bg-brand-dark hover:!text-white backdrop-blur-sm shadow-sm rounded-full w-10 h-10" 
              aria-label="Quick View"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={(e) => animateToWishlist(e, allImages[currentImageIndex])}
              className="!bg-white/90 !text-brand-dark !border-transparent hover:!bg-brand-dark hover:!text-white backdrop-blur-sm shadow-sm rounded-full w-10 h-10" 
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-brand-gray dark:text-brand-light/60 font-secondary mb-1">{category}</p>
          <h3 className="text-lg font-serif text-brand-dark dark:text-brand-light font-medium mb-2">
            <Link href={productUrl} className="hover:text-brand-blue transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-brand-dark dark:text-brand-light font-bold font-secondary">
            ₹{price.toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm"
          onClick={() => setIsQuickViewOpen(false)}
        >
          <div 
            className="bg-white dark:bg-[#111111] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border-transparent hover:bg-white text-brand-dark"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </Button>
            
            {/* Quick View Image */}
            <div className="w-full md:w-1/2 bg-brand-gray/10 relative h-64 md:h-auto">
              <img src={allImages[0]} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Quick View Info */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <p className="text-sm font-secondary tracking-widest text-brand-gray dark:text-brand-light/60 uppercase mb-2">
                {category}
              </p>
              <h2 className="font-serif text-3xl text-brand-dark dark:text-brand-light mb-4">{title}</h2>
              <p className="font-secondary text-xl font-medium text-brand-dark dark:text-brand-light mb-6">
                ₹{price.toLocaleString('en-IN')}
              </p>
              
              {/* Sizes */}
              {sizes && sizes.length > 0 && (
                <div className="mb-6">
                  <span className="font-secondary font-medium tracking-wider uppercase text-sm text-brand-dark dark:text-brand-light mb-3 block">Size</span>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-10 px-4 border transition-all duration-300 font-secondary text-sm tracking-wider flex items-center justify-center ${selectedSize === size ? 'border-brand-dark bg-brand-dark text-white dark:border-brand-light dark:bg-brand-light dark:text-brand-dark' : 'border-brand-gray/30 hover:border-brand-dark dark:border-brand-light/30 dark:hover:border-brand-light text-brand-dark dark:text-brand-light'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {description && (
                <p className="font-secondary text-brand-dark/70 dark:text-brand-light/70 mb-8">
                  {description}
                </p>
              )}

              <div className="mt-auto flex flex-col gap-3">
                <Button 
                  className="w-full h-12"
                  onClick={(e) => animateAddToCart(e, allImages[0])}
                >
                  Add to Cart
                </Button>
                <Link href={productUrl} className="w-full">
                  <Button variant="outline" className="w-full h-12 border-brand-gray/30 hover:border-brand-dark dark:border-brand-light/30 dark:hover:border-brand-light">
                    View Full Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
