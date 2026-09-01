'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem('newsletter_seen');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('newsletter_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-brand-dark w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row">

        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">

          <div className="text-center md:text-left">
            {/* Logo */}
            <span className="font-primary text-3xl font-bold tracking-tight text-brand-dark dark:text-brand-light leading-none block mb-8">
              Brand<span className="text-brand-blue">.</span>
            </span>

            {!submitted ? (
              <>
                <h2 className="font-primary text-4xl md:text-5xl font-bold text-brand-dark dark:text-brand-light mb-4">
                  Join the club
                </h2>

                <p className="text-brand-dark/80 dark:text-brand-light/80 font-secondary text-lg mb-8 max-w-sm mx-auto md:mx-0">
                  Subscribe and Get an Extra <span className="font-bold underline decoration-brand-blue decoration-2 underline-offset-2">25% Off</span> on your first purchase.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    className="w-full bg-brand-light dark:bg-brand-dark/50 border border-brand-gray/30 focus:border-brand-blue rounded-xl px-4 py-4 outline-none transition-colors font-secondary text-brand-dark dark:text-brand-light placeholder:text-brand-dark/50 dark:placeholder:text-brand-light/50"
                  />
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Subscribe
                  </Button>
                </form>

                <p className="mt-6 text-xs font-secondary text-brand-dark/50 dark:text-brand-light/50">
                  By signing up, you agree to{' '}
                  <Link href="#" className="underline hover:text-brand-dark dark:hover:text-brand-light">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link href="#" className="underline hover:text-brand-dark dark:hover:text-brand-light">Terms of Use</Link>.
                </p>
              </>
            ) : (
              <div className="py-12">
                <h3 className="font-secondary text-2xl font-bold text-brand-blue mb-4">
                  Welcome to the club!
                </h3>
                <p className="text-brand-dark/70 dark:text-brand-light/70 font-secondary text-lg">
                  Check your email for your 25% off code.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full hidden md:block">
          <Image
            src="/demo images/Navagunjara_front_1.jpg"
            alt="Fashion model wearing luxury shoes"
            fill
            className="object-cover"
          />

          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 bg-white/90 hover:bg-white text-black transition-colors rounded-full shadow-md z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Close Button (visible only when image is hidden) */}
        <button
          onClick={handleClose}
          className="md:hidden absolute top-4 right-4 p-2 text-brand-dark/50 hover:text-brand-dark dark:text-brand-light/50 dark:hover:text-brand-light transition-colors rounded-full bg-brand-gray/10"
        >
          <X className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}
