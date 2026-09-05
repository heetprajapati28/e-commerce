import React from 'react';

export default function AboutHeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/demo images/DSC09583.jpg"
          alt="About Us Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/80 font-bold tracking-widest uppercase text-sm mb-6 font-secondary">Our Journey</p>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Redefining Modern Elegance
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-secondary">
          We believe in creating timeless pieces that empower you to express your unique style with confidence and grace.
        </p>
      </div>
    </section>
  );
}
