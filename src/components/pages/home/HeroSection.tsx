import { ArrowRight, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col justify-between dark:bg-brand-dark min-h-[calc(100vh-80px)] py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] w-full flex flex-col md:flex-row gap-4 h-auto md:h-[600px] lg:h-[70vh] min-h-[500px]">

        {/* Left Section (Larger) */}
        <div className="relative flex-[2.5] bg-[#9C8F80] rounded-3xl overflow-hidden shadow-lg group w-full min-h-[400px]">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/banner/b1.png"
              alt="Fashion model"
              className="w-full h-full object-cover object-center opacity-90"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Content overlay */}
          <div className="relative h-full flex flex-col justify-end p-8 sm:p-12 md:p-16">
            <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-4">
              New Collection
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-tight max-w-2xl mb-8">
              Rov Lbitriog with tcroopacn <br className="hidden sm:block" /> wedce
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-white text-brand-dark border-transparent hover:bg-gray-100 hover:border-transparent dark:hover:border-transparent dark:bg-white dark:text-brand-dark">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section (Smaller) */}
        <div className="relative flex-1 bg-[#EBEAE5] rounded-3xl overflow-hidden shadow-lg w-full min-h-[300px] md:min-h-full">
          <img
            src="/banner/b2.png"
            alt="Fashion model"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* <div className="w-full mt-auto bg-brand-dark dark:bg-brand-light text-brand-light dark:text-brand-dark py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-6 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase font-primary">
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
          <span>Reflect Fashion</span>
          <span>✦</span>
        </div>
      </div> */}
    </section>
  );
}
