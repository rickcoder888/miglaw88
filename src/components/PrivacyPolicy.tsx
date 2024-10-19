import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="text-sm">
      <h2 className="text-lg font-semibold mb-4">1. Information Collection</h2>
      <p className="mb-4">
        We collect personal information that you provide directly to us, such as your name, email address, and phone number when you contact us or use our services.
      </p>

      <h2 className="text-lg font-semibold mb-4">2. Use of Information</h2>
      <p className="mb-4">
        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
      </p>

      <h2 className="text-lg font-semibold mb-4">3. Information Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in our operations, or as required by law.
      </p>

      <h2 className="text-lg font-semibold mb-4">4. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-lg font-semibold mb-4">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us.
      </p>

      <h2 className="text-lg font-semibold mb-4">6. Changes to Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default PrivacyPolicy