import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function WishlistPage() {
  return (
    <div className="min-h-[calc(100vh-152px)] bg-white dark:bg-brand-dark flex flex-col items-center justify-center p-6 text-center">
      <div className="animate-fade-in-up flex flex-col items-center max-w-lg w-full">
        
        <div className="mb-8 animate-scale-in">
          <Heart className="w-16 h-16 text-brand-dark/20 dark:text-brand-light/20" strokeWidth={1} />
        </div>
        
        <h1 className="font-primary text-4xl sm:text-5xl font-black text-brand-dark dark:text-brand-light mb-6 tracking-tight uppercase">
          Your Wishlist
        </h1>
        
        <p className="font-secondary text-base text-brand-dark/60 dark:text-brand-light/60 mb-10 leading-relaxed">
          Save your favorite items here to keep track of them. You haven't added any items to your wishlist yet.
        </p>

        <Link href="/">
          <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4"/>} iconPosition="right">
            DISCOVER PRODUCTS
          </Button>
        </Link>

      </div>
    </div>
  );
}
