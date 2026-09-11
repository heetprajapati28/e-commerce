import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-dark text-brand-dark dark:text-brand-light py-16 md:py-10 border-t border-brand-gray/40 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link href="/" className="inline-block">
                <Image src="/logo.webp" alt="Brand Logo" width={180} height={48} className="h-12 w-auto object-contain" />
              </Link>
              <p className="mt-4 text-brand-dark/70 dark:text-brand-light/70 max-w-sm font-secondary">
                Discover our meticulously curated collections of modern fashion and timeless elegance. Elevating your everyday style.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-brand-dark/60 hover:text-brand-blue dark:text-brand-light/60 dark:hover:text-brand-blue transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </Link>
              <Link href="#" className="text-brand-dark/60 hover:text-brand-blue dark:text-brand-light/60 dark:hover:text-brand-blue transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </Link>
              <Link href="#" className="text-brand-dark/60 hover:text-brand-blue dark:text-brand-light/60 dark:hover:text-brand-blue transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </Link>
              <Link href="#" className="text-brand-dark/60 hover:text-brand-blue dark:text-brand-light/60 dark:hover:text-brand-blue transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </Link>
              <Link href="#" className="text-brand-dark/60 hover:text-brand-blue dark:text-brand-light/60 dark:hover:text-brand-blue transition-colors" aria-label="Behance">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5"><path d="M14.88 9.382v-1.46h5.83v1.46h-5.83zm.671 4.542c0-1.895 1.341-3.612 3.666-3.612 2.378 0 3.328 1.83 3.328 3.551 0 .216-.017.58-.017.58H16.03c.123 1.258 1.05 1.848 2.08 1.848 1.066 0 1.637-.48 2.008-1.291h1.79c-.58 1.619-2.031 2.502-3.87 2.502-2.736 0-3.83-1.88-3.83-3.578zm5.556-1.127c-.124-1.03-1.01-1.39-1.745-1.39-1.135 0-1.765.733-1.921 1.39h3.666zm-17.57-4.48h4.636c1.684 0 2.541.69 2.541 1.996 0 .848-.492 1.488-1.332 1.761 1.205.27 1.635 1.135 1.635 2.051 0 1.542-1.285 2.115-3.003 2.115H3.538V8.317zm2.254 3.033h2.365c.677 0 .972-.258.972-.751 0-.466-.279-.752-.942-.752H5.792v1.503zm0 3.385h2.464c.902 0 1.258-.293 1.258-.87 0-.575-.41-.861-1.272-.861H5.792v1.731z" /></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-light mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Collections', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-secondary text-brand-dark/70 hover:text-brand-blue dark:text-brand-light/70 dark:hover:text-brand-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-light mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {['Contact Us', 'FAQ', 'Track Order', 'Size Guide'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-secondary text-brand-dark/70 hover:text-brand-blue dark:text-brand-light/70 dark:hover:text-brand-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-light mb-4">
              Policy
            </h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="font-secondary text-brand-dark/70 hover:text-brand-blue dark:text-brand-light/70 dark:hover:text-brand-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-5 border-t border-brand-gray/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-secondary text-brand-dark/60 dark:text-brand-light/60">
            &copy; {new Date().getFullYear()} Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
