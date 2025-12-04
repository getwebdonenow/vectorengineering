export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This Privacy Policy explains how
          Vector Engineering UAE collects, uses, and protects your information
          when you access our website or communicate with us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">We may collect:</p>
        <ul className="list-disc ml-6 text-gray-600 mb-4 space-y-1">
          <li>
            Name, email, phone, and company details submitted through forms
          </li>
          <li>Project or service-related details you provide</li>
          <li>
            Basic analytics such as IP address, browser type, and visit activity
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-600 mb-4 space-y-1">
          <li>To respond to inquiries and provide requested services</li>
          <li>To improve site performance and user experience</li>
          <li>To communicate regarding project updates or service details</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          3. Data Security
        </h2>
        <p className="text-gray-600 mb-4">
          We implement reasonable security measures to protect your data, though
          no method of transmission is fully secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          4. Third‑Party Sharing
        </h2>
        <p className="text-gray-600 mb-4">
          Your information is not sold or shared with third parties except when
          necessary to complete a requested service or comply with legal
          requirements.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          5. Updates to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy periodically. Continued use of our
          website constitutes acceptance of the latest version.
        </p>
      </div>
    </div>
  );
}
