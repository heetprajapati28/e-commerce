import HeroSection from "@/components/pages/home/HeroSection";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import CollectionSection from "@/components/pages/home/CollectionSection";
import NewArrivalsSection from "@/components/pages/home/NewArrivalsSection";
import BestSellersSection from "@/components/pages/home/BestSellersSection";
import LookbookSection from "@/components/pages/home/LookbookSection";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import InstagramSection from "@/components/pages/home/InstagramSection";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white dark:bg-brand-dark flex-col">
      <HeroSection />
      <CollectionSection />
      <NewArrivalsSection />
      <CategoriesSection />
      <BestSellersSection />
      <LookbookSection />
      <TestimonialsSection />
      <InstagramSection />
    </main>
  );
}
