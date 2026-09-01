import { PRODUCTS } from '@/data/products';
import ProductClient from '@/components/pages/product/ProductClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | Brand.',
    };
  }
  
  return {
    title: `${product.title} | Brand.`,
    description: product.description || `Buy ${product.title} at Brand.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }
  
  // Filter out the current product and take the first 4 for suggestions
  const suggestedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen">
      <ProductClient product={product} suggestedProducts={suggestedProducts} />
    </main>
  );
}
