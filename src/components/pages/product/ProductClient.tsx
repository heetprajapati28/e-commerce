'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/data/products';
import { ChevronDown, Heart, Share2, ShoppingBag, ChevronLeft, Mail, MessageCircle, Send, MoreHorizontal, ArrowUpRight, Copy, Check } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { Button } from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { animateAddToCart, animateToWishlist } from '@/lib/animations';

interface ProductClientProps {
  product: Product;
  suggestedProducts?: Product[];
}

export default function ProductClient({ product, suggestedProducts }: ProductClientProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(product.image);
  const [openAccordion, setOpenAccordion] = useState<string>('description');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  const allImages = product.additionalImages?.length ? product.additionalImages : [product.image];

  return (
    <div className="py-12 md:py-20 px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Mobile Back Button */}
        <div className="w-full lg:hidden">
          <button
            onClick={() => {
              if (window.history.length > 2) {
                router.back();
              } else {
                router.push('/');
              }
            }}
            className="flex items-center gap-1 text-sm font-secondary font-medium tracking-wider uppercase text-brand-dark/70 hover:text-brand-dark dark:text-brand-light/70 dark:hover:text-brand-light transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5 -ml-1" /> Back
          </button>
        </div>

        {/* Left: Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4 lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)]">
          {/* Main Image */}
          <div className="w-full h-[50vh] min-h-[400px] md:min-h-0 md:h-full bg-brand-gray/10 relative overflow-hidden md:flex-1 shrink-0">
            <img
              src={activeImage}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 flex-shrink-0 hide-scrollbar pb-2 md:pb-0">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-24 md:w-full md:h-32 flex-shrink-0 border-2 overflow-hidden transition-all duration-300 ${activeImage === img ? 'border-brand-dark dark:border-brand-light' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0">

          <p className="text-sm font-secondary tracking-widest text-brand-gray dark:text-brand-light/60 uppercase mb-4">
            {product.category}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark dark:text-brand-light leading-tight mb-4">
            {product.title}
          </h1>
          <p className="font-secondary text-2xl font-medium text-brand-dark dark:text-brand-light mb-8">
            ₹{product.price.toLocaleString('en-IN')}
          </p>

          {/* Sizes */}
          {product.sizes && (
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="font-secondary font-medium tracking-wider uppercase text-sm text-brand-dark dark:text-brand-light">Size</span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-sm font-secondary text-brand-gray hover:text-brand-dark dark:text-brand-light/60 dark:hover:text-brand-light underline transition-colors"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 border transition-all duration-300 font-secondary text-sm tracking-wider flex items-center justify-center ${selectedSize === size ? 'border-brand-dark bg-brand-dark text-white dark:border-brand-light dark:bg-brand-light dark:text-brand-dark' : 'border-brand-gray/30 hover:border-brand-dark dark:border-brand-light/30 dark:hover:border-brand-light text-brand-dark dark:text-brand-light'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-row gap-2 mb-12">
            <Button
              className="flex-1 h-14 text-sm font-bold tracking-wider uppercase group relative overflow-hidden"
              onClick={(e) => animateAddToCart(e, activeImage)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-14 w-14 flex items-center justify-center flex-shrink-0 px-0 group border-brand-gray/30 hover:border-brand-dark dark:border-brand-light/30 dark:hover:border-brand-light"
              onClick={(e) => animateToWishlist(e, activeImage)}
            >
              <Heart className="w-5 h-5 text-brand-dark/70 dark:text-brand-light/70 group-hover:text-brand-dark dark:group-hover:text-brand-light transition-colors" />
            </Button>
            <div className="relative">
              <Button
                variant="outline"
                className="h-14 w-14 flex items-center justify-center flex-shrink-0 px-0 group border-brand-gray/30 hover:border-brand-dark dark:border-brand-light/30 dark:hover:border-brand-light"
                onClick={() => setIsShareOpen(!isShareOpen)}
              >
                <Share2 className="w-5 h-5 text-brand-dark/70 dark:text-brand-light/70 group-hover:text-brand-dark dark:group-hover:text-brand-light transition-colors" />
              </Button>

              {/* Share Popover */}
              {isShareOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsShareOpen(false)}></div>
                  <div className="absolute bottom-full mb-3 right-0 sm:-right-4 w-[320px] bg-white dark:bg-[#1a1a1a] rounded-[24px] shadow-xl border border-brand-gray/10 z-50 overflow-hidden animate-fade-in origin-bottom">
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-2 right-6 sm:right-10 w-4 h-4 bg-white dark:bg-[#1a1a1a] border-b border-r border-brand-gray/10 transform rotate-45"></div>

                    <div className="p-2 relative bg-white dark:bg-[#1a1a1a] z-10">
                      {[
                        { name: 'Linkedin', Icon: LinkedinIcon, iconColor: 'text-[#0077b5]', hoverColor: 'bg-[#0077b5]', url: `https://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== 'undefined' ? window.location.href : ''}` },
                        { name: 'Gmail', Icon: Mail, iconColor: 'text-[#EA4335]', hoverColor: 'bg-[#EA4335]', url: `mailto:?subject=${encodeURIComponent(product.title)}&body=${typeof window !== 'undefined' ? window.location.href : ''}` },
                        { name: 'WhatsApp', Icon: MessageCircle, iconColor: 'text-[#25D366]', hoverColor: 'bg-[#25D366]', url: `https://api.whatsapp.com/send?text=${typeof window !== 'undefined' ? window.location.href : ''}` },
                        { name: 'Facebook', Icon: FacebookIcon, iconColor: 'text-[#1877F2]', hoverColor: 'bg-[#1877F2]', url: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}` },
                        { name: 'Telegram', Icon: Send, iconColor: 'text-[#229ED9]', hoverColor: 'bg-[#229ED9]', url: `https://telegram.me/share/url?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${encodeURIComponent(product.title)}` }
                      ].map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item flex items-center justify-between p-3 rounded-2xl hover:bg-brand-gray/5 dark:hover:bg-brand-gray/10 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <platform.Icon className={`w-6 h-6 ${platform.iconColor}`} />
                            <span className="font-secondary text-[15px] text-brand-dark dark:text-brand-light font-medium">{platform.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-brand-gray/10 dark:bg-brand-gray/20 text-brand-dark/50 dark:text-brand-light/50 group-hover/item:${platform.hoverColor} group-hover/item:text-white transition-colors`}>
                              <MoreHorizontal className="w-4 h-4" />
                            </div>
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-brand-gray/10 dark:bg-brand-gray/20 text-brand-dark/50 dark:text-brand-light/50 group-hover/item:${platform.hoverColor} group-hover/item:text-white transition-colors`}>
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>
                        </a>
                      ))}

                      <div className="flex items-center justify-between p-3 mt-1 pt-4 border-t border-brand-gray/10">
                        <span className="text-xs font-secondary text-brand-dark/40 dark:text-brand-light/40 flex items-center gap-1">
                          Anyone with this link <ChevronDown className="w-3 h-3" />
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                            setIsCopied(true);
                            setTimeout(() => setIsCopied(false), 2000);
                          }}
                          className="px-4 py-1.5 bg-brand-gray/10 dark:bg-brand-gray/20 hover:bg-brand-gray/20 dark:hover:bg-brand-gray/30 rounded-full text-xs font-secondary font-medium text-brand-dark dark:text-brand-light transition-colors flex items-center gap-1.5"
                        >
                          {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {isCopied ? 'copied!' : 'copy link'}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Accordion Details */}
          <div className="border-t border-brand-gray/20">
            {/* Description */}
            <div className="border-b border-brand-gray/20">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
                className="w-full py-6 flex justify-between items-center group"
              >
                <span className="font-secondary font-bold tracking-wider uppercase text-sm text-brand-dark dark:text-brand-light">Description</span>
                <ChevronDown className={`w-5 h-5 text-brand-dark dark:text-brand-light transition-transform duration-300 ${openAccordion === 'description' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 'description' ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-secondary leading-relaxed text-brand-dark/70 dark:text-brand-light/70">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Details */}
            {product.details && (
              <div className="border-b border-brand-gray/20">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
                  className="w-full py-6 flex justify-between items-center group"
                >
                  <span className="font-secondary font-bold tracking-wider uppercase text-sm text-brand-dark dark:text-brand-light">Details</span>
                  <ChevronDown className={`w-5 h-5 text-brand-dark dark:text-brand-light transition-transform duration-300 ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 'details' ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="list-disc pl-5 font-secondary text-brand-dark/70 dark:text-brand-light/70 space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Shipping */}
            <div className="border-b border-brand-gray/20">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                className="w-full py-6 flex justify-between items-center group"
              >
                <span className="font-secondary font-bold tracking-wider uppercase text-sm text-brand-dark dark:text-brand-light">Shipping & Returns</span>
                <ChevronDown className={`w-5 h-5 text-brand-dark dark:text-brand-light transition-transform duration-300 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 'shipping' ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-secondary leading-relaxed text-brand-dark/70 dark:text-brand-light/70 mb-4">
                  Free standard shipping on all orders over ₹5,000.
                </p>
                <p className="font-secondary leading-relaxed text-brand-dark/70 dark:text-brand-light/70">
                  Returns are accepted within 14 days of delivery. Items must be in original condition with tags attached.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Suggested Products Section */}
      {suggestedProducts && suggestedProducts.length > 0 && (
        <div className="mt-24 border-t border-brand-gray/10 pt-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark dark:text-brand-light mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {suggestedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/40 backdrop-blur-sm"
          onClick={() => setIsSizeGuideOpen(false)}
        >
          <div
            className="w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border-transparent hover:bg-white text-brand-dark"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </Button>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/Size Guide.png"
                alt="Size Guide Chart"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
