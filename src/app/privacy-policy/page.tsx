import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Brand.',
  description: 'Our privacy policy and data protection practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark pt-10 pb-10">
      <div className="mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-primary font-bold text-brand-dark dark:text-brand-light mb-8">Privacy Policy</h1>

        <div className="font-secondary text-brand-dark/80 dark:text-brand-light/80 leading-relaxed space-y-6">
          <p className="font-bold">Last Updated: September 2026</p>

          <p>
            At Brand. ("we", "our", or "us"), we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website, purchase our products, or interact with our services.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">1. Information We Collect</h2>
          <p>We may collect several different types of information for various purposes to provide and improve our Service to you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information, including but not limited to your Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, and payment details.</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This Usage Data may include information such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
            <li><strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</li>
            <li><strong>Marketing Data:</strong> We collect data related to your preferences in receiving marketing from us and our third parties, and your communication preferences.</li>
          </ul>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">2. How We Use Your Information</h2>
          <p>Brand. uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our Service, including processing your orders and transactions securely.</li>
            <li>To notify you about changes to our Service or products, and to communicate about your orders.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer support and respond to your inquiries promptly and effectively.</li>
            <li>To gather analysis or valuable information so that we can improve our Service, optimize our website layout, and refine our product offerings.</li>
            <li>To monitor the usage of our Service and detect, prevent, and address technical issues or fraudulent activities.</li>
            <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer, unless you have opted not to receive such information.</li>
          </ul>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">3. Data Security and Retention</h2>
          <p>
            The security of your data is of utmost importance to us. We implement a variety of security measures, including SSL encryption and secure server hosting, to maintain the safety of your personal information. All payment transactions are processed through a gateway provider and are not stored or processed on our servers. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
          <p>
            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
          <p>
            We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">5. Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">6. Your Rights (GDPR & CCPA)</h2>
          <p>
            Depending on your location, you may have the right to access, update, or delete the information we have on you. You can usually access and update your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
          </p>
          <p>
            If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights, including the right to request access, correction, or deletion of your personal data, and the right to object to or restrict processing. Please contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">7. Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.
          </p>

          <h2 className="text-2xl font-bold font-primary text-brand-dark dark:text-brand-light mt-12 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us by email at privacy@brand.com, by calling us at 1-800-BRAND-HELP, or by visiting the contact page on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
