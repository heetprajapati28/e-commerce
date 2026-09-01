import React from 'react';
import ShopClient from '@/components/pages/shop/ShopClient';
import { PRODUCTS } from '@/data/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | Brand.',
  description: 'Discover our complete collection of modern fashion and timeless elegance.',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-brand-dark">
      <ShopClient products={PRODUCTS} />
    </main>
  );
}
