import React from 'react';

export const metadata = {
  title: 'Shipping Policy | Brand.',
  description: 'Our shipping rates, delivery times, and international shipping policies.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark pt-10 pb-10">
      <div className="mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-primary font-bold text-brand-dark dark:text-brand-light mb-8">Shipping Policy</h1>

        <div className="font-secondary text-brand-dark/80 dark:text-brand-light/80 leading-relaxed space-y-6">
          <p className="font-bold">Last Updated: September 2026</p>

          <p>
            At Brand., we are dedicated to delivering your premium apparel efficiently, securely, and with the utmost care. We partner with the most reliable logistics providers to ensure your order arrives in perfect condition. Please review our shipping practices below to understand how and when your order will be delivered.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">1. Order Processing Time</h2>
          <p>
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped, complete with tracking information. Orders placed after 2:00 PM IST will begin processing the following business day.
          </p>
          <p>
            Please note that during high volume periods, such as sales events, product drops, or holidays, processing times may be slightly delayed. We appreciate your patience during these times. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone to keep you informed.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">2. Domestic Shipping Rates & Delivery Estimates</h2>
          <p>We offer the following shipping options for domestic orders within India. Shipping charges for your order will be calculated and displayed at checkout.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard Shipping:</strong> Free for all orders over ₹5,000. For orders under ₹5,000, a flat rate of ₹150 applies. Estimated delivery time is 3 to 5 business days for metropolitan areas, and 5 to 7 business days for regional areas.</li>
            <li><strong>Express Shipping:</strong> Available for a flat rate of ₹300. Estimated delivery time is 1 to 2 business days for most addresses.</li>
            <li><strong>Same-Day Delivery:</strong> Available in select metropolitan areas (Mumbai, Delhi NCR, Bangalore) for orders placed before 12:00 PM IST. Flat rate of ₹500. Deliveries will occur between 4:00 PM and 9:00 PM.</li>
          </ul>
          <p>Delivery delays can occasionally occur due to unforeseen circumstances such as severe weather or logistical disruptions. We will do our best to communicate these delays.</p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">3. International Shipping</h2>
          <p>
            We proudly offer international shipping to most countries worldwide, including the US, UK, EU, Australia, and the Middle East. Shipping charges for your order will be calculated and displayed at checkout based on the destination and total volumetric weight of the package.
          </p>
          <p>
            <strong>Customs, Duties and Taxes:</strong> Please be aware that your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Brand. is not responsible for these charges if they are applied and are your responsibility as the customer. If you refuse to pay these charges and the package is returned to us, we will deduct the return shipping costs from your refund.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">4. How Do I Check the Status of My Order?</h2>
          <p>
            When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 24-48 hours for the tracking information to become available in the courier's system.
          </p>
          <p>
            You can also log into your Brand. account at any time to check the real-time status of your order. If you haven't received your order within the estimated delivery window after receiving your shipping confirmation email, please contact us at support@brand.com with your name and order number, and we will investigate it for you immediately.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">5. Shipping to P.O. Boxes and APO/FPO Addresses</h2>
          <p>
            Some shipping carriers have limitations around shipping to P.O. Boxes. Currently, our express courier partners cannot deliver to P.O. Boxes. If you provide a P.O. Box, we will ship your order via standard postal service, which may increase delivery times. We currently do not ship to APO/FPO addresses.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">6. Lost, Stolen, or Damaged Packages</h2>
          <p>
            Brand. is not liable for any products damaged or lost during shipping once the package has been handed over to the carrier. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim, as the carrier will need them for inspection.
          </p>
          <p>
            If your tracking states that your package was delivered but you have not received it, please check with neighbors or your building manager first. If it is still missing after 3 business days, please contact our support team and we will assist you in opening an investigation with the carrier.
          </p>
        </div>
      </div>
    </div>
  );
}
