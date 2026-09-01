export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  category: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  description?: string;
  details?: string[];
  sizes?: string[];
  colors?: string[];
  additionalImages?: string[];
}

const teeDescription = "Elevate your everyday wardrobe with our signature graphic tee. Spun from long-staple organic cotton, it offers a remarkably soft hand-feel and exceptional breathability. The relaxed silhouette drapes effortlessly, while the custom-milled fabric ensures it maintains its shape wash after wash. Perfect for layering or making a standalone statement.";
const hoodieDescription = "Experience ultimate comfort with our premium heavyweight hoodie. Crafted from custom-knit French terry, it features a brushed interior for unparalleled warmth and softness. The structured drop-shoulder fit provides a modern, relaxed aesthetic, complete with a double-lined hood and robust ribbed trims designed to stand the test of time.";
const outerwearDescription = "A masterclass in tailored outerwear. Constructed from premium, responsibly sourced materials, this piece balances structural integrity with luxurious drape. The meticulous craftsmanship is evident in every detail—from the reinforced seams to the elegant hardware. Designed to transition seamlessly from day to evening, it is an essential investment piece.";
const denimDescription = "Redefine your foundation with our expertly crafted denim. Woven from high-density selvedge denim with a touch of stretch, they offer the perfect equilibrium between rigid authenticity and everyday mobility. Finished with custom hardware and a tailored cut that breaks perfectly over your footwear.";
const shirtDescription = "A masterclass in shirting. Cut from premium poplin cotton, this piece strikes the perfect balance between crisp structure and everyday breathability. Featuring mother-of-pearl buttons, a refined collar, and a tailored yet comfortable fit, it transitions effortlessly from office settings to evening engagements.";
const dressDescription = "Embody effortless elegance with this stunning evening piece. Draped in luxurious, fluid fabric that catches the light beautifully, it features a figure-flattering silhouette and meticulous tailoring. The design marries classic sophistication with modern sensibilities, making it the ultimate statement piece for any gala or formal event.";
const knitwearDescription = "The epitome of cozy luxury. Knitted from a sumptuously soft, premium yarn blend, this piece provides exceptional warmth without the weight. The sophisticated textural stitch and ribbed detailing elevate its visual appeal, making it an indispensable layer for cooler days or breezy evenings.";

const teeDetails = [
  "100% GOTS-certified organic cotton (240 GSM)",
  "Garment-dyed for a rich, nuanced color profile",
  "Pre-shrunk for a consistent fit",
  "Ribbed crew neckline that holds its shape",
  "Machine wash cold inside out, lay flat to dry"
];

const hoodieDetails = [
  "100% Heavyweight Cotton French Terry (450 GSM)",
  "Double-lined hood with tonal drawstrings",
  "Kangaroo pouch pocket with reinforced bartacks",
  "Dropped shoulders for a relaxed silhouette",
  "Machine wash cold, tumble dry low"
];

const outerwearDetails = [
  "Premium heavyweight blend for optimal warmth",
  "Fully lined interior for smooth layering",
  "Tailored fit with structured shoulders",
  "Dry clean only by a specialist"
];

const denimDetails = [
  "14oz Premium Selvedge Denim",
  "98% Cotton, 2% Elastane for mobility",
  "Custom engraved gunmetal hardware",
  "Classic 5-pocket styling",
  "Wash inside out with cold water, hang dry"
];

const shirtDetails = [
  "100% Premium Poplin Cotton",
  "Genuine mother-of-pearl buttons",
  "Classic pointed collar with removable stays",
  "French seams for a clean, durable finish",
  "Machine wash cold on gentle, iron while damp"
];

const dressDetails = [
  "Luxurious fluid drape fabric",
  "Concealed back zip closure",
  "Fully lined for comfort and opacity",
  "Delicate asymmetric hemline",
  "Dry clean only"
];

const knitwearDetails = [
  "Premium Merino Wool & Cashmere blend",
  "Medium weight textural knit",
  "Ribbed cuffs and hem to retain shape",
  "Naturally breathable and temperature regulating",
  "Hand wash cold, lay flat to dry"
];

const standardSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const denimSizes = ["28", "30", "32", "34", "36", "38"];

export const PRODUCTS: Product[] = [
  // New Arrivals
  {
    id: '1',
    slug: 'kirtimukha-graphic-tee',
    title: 'Kirtimukha Graphic Tee',
    price: 1499,
    image: '/demo images/Kirtimukha_front_1.jpg',
    category: 'Women / T-Shirts',
    isNewArrival: true,
    description: teeDescription,
    details: teeDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/Kirtimukha_back.jpg', '/demo images/Kirtimukha_front_1.jpg']
  },
  {
    id: '2',
    slug: 'navagunjara-premium-hoodie',
    title: 'Navagunjara Premium Hoodie',
    price: 3499,
    image: '/demo images/Navagunjara_front_1.jpg',
    category: 'Women / Hoodies',
    isNewArrival: true,
    description: hoodieDescription,
    details: hoodieDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/Navagunjara_front_1.jpg', '/demo images/Navagunjara_front_1.jpg']
  },
  {
    id: '3',
    slug: 'nazar-evil-eye-sweatshirt',
    title: 'Nazar Evil Eye Sweatshirt',
    price: 2499,
    image: '/demo images/nazar_front_1.jpg',
    category: 'Women / Sweatshirts',
    isNewArrival: true,
    description: hoodieDescription,
    details: hoodieDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/nazar_back.jpg', '/demo images/nazar_front_1.jpg']
  },
  {
    id: '4',
    slug: 'shasan-classic-oversized-tee',
    title: 'Shasan Classic Oversized Tee',
    price: 1899,
    image: '/demo images/shasan_front.jpg',
    category: 'Women / T-Shirts',
    isNewArrival: true,
    description: teeDescription,
    details: teeDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/shasan_front.jpg', '/demo images/shasan_front.jpg']
  },
  // Best Sellers
  {
    id: 'bs1',
    slug: 'signature-classic-pullover',
    title: 'Signature Classic Pullover',
    price: 3999,
    image: '/demo images/1_951a5697-8208-4322-be24-e9de3bdd8bf7.png',
    category: 'Men / Knitwear',
    isBestSeller: true,
    description: knitwearDescription,
    details: knitwearDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/1_951a5697-8208-4322-be24-e9de3bdd8bf7.png']
  },
  {
    id: 'bs2',
    slug: 'essential-relaxed-fit-denim',
    title: 'Essential Relaxed Fit Denim',
    price: 4999,
    image: '/demo images/2_16766b71-1cfc-4850-8774-22ee4061efb4.png',
    category: 'Women / Denim',
    isBestSeller: true,
    description: denimDescription,
    details: denimDetails,
    sizes: denimSizes,
    additionalImages: ['/demo images/2_16766b71-1cfc-4850-8774-22ee4061efb4.png']
  },
  {
    id: 'bs3',
    slug: 'timeless-wool-coat',
    title: 'Timeless Wool Coat',
    price: 8999,
    image: '/demo images/3_4c2228d4-72bb-491b-aa48-0d4c03c2e185.png',
    category: 'Women / Outerwear',
    isBestSeller: true,
    description: outerwearDescription,
    details: outerwearDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/3_4c2228d4-72bb-491b-aa48-0d4c03c2e185.png']
  },
  {
    id: 'bs4',
    slug: 'everyday-cotton-basic',
    title: 'Everyday Cotton Basic',
    price: 1299,
    image: '/demo images/4_907a1fc9-6ede-49f3-bc21-6c41009c7d76.png',
    category: 'Women / T-Shirts',
    isBestSeller: true,
    description: teeDescription,
    details: teeDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/4_907a1fc9-6ede-49f3-bc21-6c41009c7d76.png']
  },
  // Additional Shop Items
  {
    id: 'shop1',
    slug: 'kirtimukha-back-graphic-tee',
    title: 'Kirtimukha Back Graphic Tee',
    price: 1499,
    image: '/demo images/Kirtimukha_back.jpg',
    category: 'Women / T-Shirts',
    description: teeDescription,
    details: teeDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/Kirtimukha_front_1.jpg', '/demo images/Kirtimukha_back.jpg']
  },
  {
    id: 'shop2',
    slug: 'nazar-back-detail-sweatshirt',
    title: 'Nazar Back Detail Sweatshirt',
    price: 2499,
    image: '/demo images/nazar_back.jpg',
    category: 'Women / Sweatshirts',
    description: hoodieDescription,
    details: hoodieDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/nazar_front_1.jpg', '/demo images/nazar_back.jpg']
  },
  {
    id: 'shop3',
    slug: 'classic-oxford-shirt',
    title: 'Classic Oxford Shirt',
    price: 2999,
    image: '/demo images/DSC_0969.jpg',
    category: 'Unisex / Shirts',
    description: shirtDescription,
    details: shirtDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/DSC_0969.jpg']
  },
  {
    id: 'shop4',
    slug: 'midnight-velvet-gala-dress',
    title: 'Midnight Velvet Gala Dress',
    price: 12999,
    image: '/demo images/DSC_3955_1_1.jpg',
    category: 'Women / Dresses',
    description: dressDescription,
    details: dressDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/DSC_3955_1_1.jpg']
  },
  {
    id: 'shop5',
    slug: 'textured-knit-polo',
    title: 'Textured Knit Polo',
    price: 2299,
    image: '/demo images/DSC_0776.jpg',
    category: 'Unisex / Knitwear',
    description: knitwearDescription,
    details: knitwearDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/DSC_0776.jpg']
  },
  {
    id: 'shop6',
    slug: 'oversized-structured-blazer',
    title: 'Oversized Structured Blazer',
    price: 6999,
    image: '/demo images/IMG_6352.jpg',
    category: 'Women / Outerwear',
    description: outerwearDescription,
    details: outerwearDetails,
    sizes: standardSizes,
    additionalImages: ['/demo images/IMG_6352.jpg']
  }
];
