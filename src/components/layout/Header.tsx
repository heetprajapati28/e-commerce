'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, Search, User, ShoppingBag, ChevronDown, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PRODUCTS } from '@/data/products';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBumping, setIsBumping] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isWishlistBumping, setIsWishlistBumping] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchResults = PRODUCTS.filter(p => {
    if (!searchQuery.trim()) return false;
    const lowerQuery = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery);
  }).slice(0, 5);

  useEffect(() => {
    const handleBump = () => {
      setCartCount(prev => prev + 1);
      setIsBumping(true);
      setTimeout(() => setIsBumping(false), 300);
    };
    const handleWishlistBump = () => {
      setWishlistCount(prev => prev + 1);
      setIsWishlistBumping(true);
      setTimeout(() => setIsWishlistBumping(false), 300);
    };

    window.addEventListener('cart-bump', handleBump);
    window.addEventListener('wishlist-bump', handleWishlistBump);

    return () => {
      window.removeEventListener('cart-bump', handleBump);
      window.removeEventListener('wishlist-bump', handleWishlistBump);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-brand-dark border-b border-brand-gray/20 flex flex-col transition-colors duration-300">

        {/* Announcement Bar */}
        <div className="group bg-brand-dark dark:bg-brand-light text-white dark:text-brand-dark overflow-hidden py-2 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] font-secondary flex items-center border-b border-white/10 dark:border-brand-dark/10 cursor-pointer">
          <div className="animate-marquee inline-flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="mx-4 sm:mx-8">
                FIRST ORDER OFFER: FLAT 5% OFF | CODE: AHANKARNEW5
              </span>
            ))}
          </div>
        </div>

        {/* Top Tier */}
        <div className="flex h-20 items-center justify-between px-6 lg:px-8 border-b border-brand-gray/10">
          <div className="flex-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex flex-col items-center justify-center group hidden md:flex">
              <Image src="/logo.webp" alt="Brand Logo" width={150} height={40} className="h-10 w-auto object-contain" priority />
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-3">
            <Button variant="outline" size="icon" id="header-wishlist-icon" className="relative" onClick={() => router.push('/wishlist')}>
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white dark:border-brand-dark transition-transform duration-300 ${isWishlistBumping ? 'scale-150 bg-red-600' : 'scale-100'}`}
                >
                  {wishlistCount}
                </span>
              )}
            </Button>
            <Button variant="outline" size="icon">
              <User className="w-5 h-5" />
            </Button>

            <Button variant="outline" size="icon" id="header-cart-icon" className="relative" onClick={() => router.push('/cart')}>
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-blue text-[10px] font-bold text-white border-2 border-white dark:border-brand-dark transition-transform duration-300 ${isBumping ? 'scale-150 bg-green-500' : 'scale-100'}`}
                >
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="hidden lg:flex h-[72px] items-center justify-between px-6 lg:px-8">

          {/* Left Side Actions */}
          <div className="flex items-center gap-3">

            {/* Categories Dropdown */}
            <div className="relative group">
              <Button variant="outline" icon={<ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />} iconPosition="right">
                Categories
              </Button>
              <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-white dark:bg-brand-dark border border-brand-gray/10 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                {['Men', 'Women', 'Kids', 'Accessories', 'Footwear'].map(cat => (
                  <Link key={cat} href={`/category/${cat.toLowerCase()}`} className="block px-4 py-2.5 text-sm font-medium text-brand-dark/80 hover:text-brand-blue hover:bg-brand-gray/5 dark:text-brand-light/80 dark:hover:text-brand-blue transition-colors">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Collections Dropdown */}
            <div className="relative group">
              <Button variant="outline" icon={<ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />} iconPosition="right" onClick={() => router.push('/collection')}>
                Collections
              </Button>
              <div className="absolute top-[calc(100%+0.5rem)] left-0 w-56 bg-white dark:bg-brand-dark border border-brand-gray/10 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <Link href="/collection#new-arrivals" className="block px-4 py-2.5 text-sm font-medium text-brand-dark/80 hover:text-brand-blue hover:bg-brand-gray/5 dark:text-brand-light/80 dark:hover:text-brand-blue transition-colors">
                  New Arrivals
                </Link>
                <Link href="/collection#best-sellers" className="block px-4 py-2.5 text-sm font-medium text-brand-dark/80 hover:text-brand-blue hover:bg-brand-gray/5 dark:text-brand-light/80 dark:hover:text-brand-blue transition-colors">
                  Best Sellers
                </Link>
                <div className="my-1 border-t border-brand-gray/10"></div>
                {[
                  { name: 'Summer Essentials', id: 'summer-essentials' },
                  { name: 'Evening Wear', id: 'evening-wear' },
                  { name: 'Minimalist Core', id: 'minimalist-core' },
                  { name: 'The Denim Edition', id: 'denim-edition' },
                  { name: 'Graphic Series', id: 'graphic-series' },
                ].map(item => (
                  <Link key={item.id} href={`/collection#${item.id}`} className="block px-4 py-2.5 text-sm font-medium text-brand-dark/80 hover:text-brand-blue hover:bg-brand-gray/5 dark:text-brand-light/80 dark:hover:text-brand-blue transition-colors">
                    {item.name}
                  </Link>
                ))}
                <div className="my-1 border-t border-brand-gray/10"></div>
                <Link href="/sale" className="block px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10 transition-colors">
                  Sale
                </Link>
              </div>
            </div>

            <div
              className="relative flex items-center ml-2 group"
              onFocus={() => setShowSearchResults(true)}
              onBlur={(e) => {
                // Delay hiding slightly to allow clicks on links to register
                setTimeout(() => setShowSearchResults(false), 150);
              }}
            >
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                className="pl-6 pr-12 py-2.5 border border-brand-gray/30 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] bg-transparent outline-none focus:border-brand-dark dark:focus:border-brand-light transition-colors w-[280px] text-brand-dark dark:text-brand-light placeholder:text-brand-dark/40 dark:placeholder:text-brand-light/40 font-secondary"
              />
              <Search className="w-4 h-4 absolute right-5 text-brand-dark/60 dark:text-brand-light/60 pointer-events-none" />

              {/* Search Dropdown */}
              {showSearchResults && searchQuery.trim() && (
                <div className="absolute top-[calc(100%+0.5rem)] right-0 w-full md:w-[320px] bg-white dark:bg-[#1a1a1a] border border-brand-gray/10 rounded-xl shadow-lg z-50 py-2 overflow-hidden">
                  {searchResults.length > 0 ? (
                    <div className="flex flex-col">
                      <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-gray border-b border-brand-gray/10">
                        Products
                      </div>
                      {searchResults.map(product => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-brand-gray/5 dark:hover:bg-brand-gray/10 transition-colors border-b border-brand-gray/5 last:border-0"
                          onClick={() => {
                            setShowSearchResults(false);
                            setSearchQuery('');
                          }}
                        >
                          <img src={product.image} alt={product.title} className="w-12 h-16 object-cover rounded-md bg-brand-gray/10" />
                          <div className="flex flex-col flex-1">
                            <span className="text-sm font-bold text-brand-dark dark:text-brand-light line-clamp-1 font-primary">{product.title}</span>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-brand-gray mt-1">{product.category}</span>
                            <span className="text-sm font-medium mt-1 text-brand-dark/80 dark:text-brand-light/80 font-secondary">₹{product.price.toLocaleString('en-IN')}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center flex flex-col items-center justify-center gap-2">
                      <Search className="w-6 h-6 text-brand-gray/40 mb-2" />
                      <span className="text-sm text-brand-dark/70 dark:text-brand-light/70 font-medium">No results found for "{searchQuery}"</span>
                      <span className="text-xs text-brand-gray">Try checking your spelling or use more general terms</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Links (Men, Women, Collection) */}
          <div className="flex items-center gap-2">
            {['Men', 'Women', 'Shop', 'Collection'].map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Button
                  key={item}
                  variant={isActive ? 'primary' : 'outline'}
                  onClick={() => router.push(href)}
                >
                  {item}
                </Button>
              );
            })}
          </div>

        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-dark/20 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-brand-dark pb-12 shadow-xl border-r border-brand-gray/10">
            <div className="flex px-6 pt-6 pb-2 justify-between items-center border-b border-brand-gray/10">
              <Image src="/logo.webp" alt="Brand Logo" width={120} height={32} className="h-8 w-auto object-contain md:hidden" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-4 px-4 py-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-secondary text-sm font-medium transition-colors ${isActive
                      ? 'bg-brand-blue/10 text-brand-blue font-bold'
                      : 'text-brand-dark dark:text-brand-light hover:bg-brand-gray/10'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

            <div className="mt-8 px-4 flex flex-col gap-3 border-t border-brand-gray/10 pt-8">
              <Button variant="primary" className="w-full justify-center" onClick={() => { setIsMenuOpen(false); router.push('/login'); }}>
                Sign In
              </Button>
              <Button variant="outline" className="w-full justify-center" onClick={() => { setIsMenuOpen(false); router.push('/register'); }}>
                Create Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
