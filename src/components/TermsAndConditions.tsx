import React from 'react'

const TermsAndConditions: React.FC = () => {
  return (
    <div className="text-sm">
      <h2 className="text-lg font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing and using the services provided by MIG Lawyers & Advisors, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
      </p>

      <h2 className="text-lg font-semibold mb-4">2. Use of Services</h2>
      <p className="mb-4">
        Our services are intended for informational purposes only and do not constitute legal advice. The use of our services does not create an attorney-client relationship.
      </p>

      <h2 className="text-lg font-semibold mb-4">3. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website is the property of MIG Lawyers & Advisors and is protected by copyright laws. You may not reproduce, distribute, or use our content without explicit permission.
      </p>

      <h2 className="text-lg font-semibold mb-4">4. Limitation of Liability</h2>
      <p className="mb-4">
        MIG Lawyers & Advisors is not liable for any damages arising from the use or inability to use our services. We do not guarantee the accuracy, completeness, or usefulness of any information on our website.
      </p>

      <h2 className="text-lg font-semibold mb-4">5. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Australia.
      </p>

      <h2 className="text-lg font-semibold mb-4">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms and Conditions at any time. Your continued use of our services after any changes indicates your acceptance of the modified terms.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default TermsAndConditions