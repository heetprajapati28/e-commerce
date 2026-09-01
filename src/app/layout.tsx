import type { Metadata } from "next";
import { Averia_Serif_Libre, DM_Sans } from "next/font/google";
import "./globals.css";

const averia = Averia_Serif_Libre({
  weight: "400",
  variable: "--font-averia",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand. | Luxury Fashion & Apparel",
  description: "Discover our meticulously curated collections of modern fashion and timeless elegance.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import NewsletterModal from "@/components/layout/NewsletterModal";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${averia.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen font-primary">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <NewsletterModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
