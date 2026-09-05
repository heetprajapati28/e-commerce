import React from 'react';
import AboutHeroSection from '@/components/pages/about/AboutHeroSection';
import OurStorySection from '@/components/pages/about/OurStorySection';
import OurValuesSection from '@/components/pages/about/OurValuesSection';

export const metadata = {
  title: 'About Us | E-Commerce',
  description: 'Learn about our story, values, and commitment to quality and sustainability.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen bg-white dark:bg-brand-dark flex-col">
      <AboutHeroSection />
      <OurStorySection />
      <OurValuesSection />
    </main>
  );
}
