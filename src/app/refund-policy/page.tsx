import React from 'react';

export const metadata = {
  title: 'Refund Policy | Brand.',
  description: 'Our returns and refund policy.',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark pt-10 pb-10">
      <div className="mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-primary font-bold text-brand-dark dark:text-brand-light mb-8">Refund & Return Policy</h1>

        <div className="font-secondary text-brand-dark/80 dark:text-brand-light/80 leading-relaxed space-y-6">
          <p className="font-bold">Last Updated: September 2026</p>

          <p>
            We want you to be completely satisfied with your purchase from Brand. If for any reason you are not satisfied, we will gladly accept returns of unworn, unwashed, or defective merchandise for a full refund or exchange within 14 days of the original delivery date. We believe in the quality of our products and want to ensure a seamless experience for you.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">1. Eligibility for Returns</h2>
          <p>To be eligible for a return, please ensure that your request meets the following conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The item was delivered within the last 14 days.</li>
            <li>The item is in its original, unworn, and unwashed condition with no signs of wear, odor, or damage.</li>
            <li>All original tags, labels, and packaging are intact and securely attached exactly as received.</li>
            <li>The item is not marked as "Final Sale", "Clearance", or "Non-Returnable".</li>
            <li>You have the receipt, order confirmation, or proof of purchase available.</li>
          </ul>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">2. Non-Returnable Items</h2>
          <p>Certain types of items cannot be returned due to hygiene and safety reasons, or their customized nature. These include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Intimates, underwear, bodysuits, and swimwear (if the hygienic liner has been removed or altered).</li>
            <li>Customized, monogrammed, or personalized items tailored specifically for you.</li>
            <li>Gift cards, digital downloads, and promotional items.</li>
            <li>Items purchased during clearance events or designated as "Final Sale" at the time of purchase.</li>
            <li>Accessories such as earrings and hair accessories for hygienic reasons.</li>
          </ul>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">3. The Return Process</h2>
          <p>
            To initiate a return, please log into your account, navigate to your order history, and select "Request Return". Alternatively, you can contact our customer service team at returns@brand.com with your order number and the reason for return. We will provide you with a pre-paid return shipping label and detailed instructions on how and where to send your package.
          </p>
          <p>
            Items sent back to us without first requesting a return will not be accepted. We strongly recommend packaging the items securely to prevent any damage during transit, and keeping the shipping receipt until the refund is processed.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">4. Refunds & Processing Time</h2>
          <p>
            Once we receive and inspect your return, we will notify you via email of the approval or rejection of your refund. If approved, your refund will be processed immediately. A credit will automatically be applied to your original method of payment within 5 to 7 business days, depending on your bank's processing times.
          </p>
          <p>
            Please note that original shipping fees, duties, and taxes are non-refundable. If you receive a refund, the cost of expedited shipping (if applicable) will be deducted from your refund. If your refund is delayed, please first check with your bank or credit card company as it may take some time before your refund is officially posted.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">5. Exchanges</h2>
          <p>
            The fastest way to ensure you get what you want is to return the item you have following our standard return process, and once the return is accepted, make a separate purchase for the new item. We only replace items if they are defective or damaged upon arrival.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">6. Damaged, Defective or Incorrect Items</h2>
          <p>
            Please inspect your order upon reception and contact us immediately (within 48 hours of delivery) if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right. We will cover all return shipping costs for damaged or incorrect items and prioritize your replacement or refund. Please provide photographic evidence of the damage when contacting us.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">7. Late or Missing Refunds</h2>
          <p>
            If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at support@brand.com.
          </p>
        </div>
      </div>
    </div>
  );
}
