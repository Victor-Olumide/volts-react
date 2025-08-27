import Link from 'next/link'
import React from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in, provide shipping information, and complete payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through encrypted channels."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the country. Express shipping options are available for 1-2 day delivery. International shipping may take 7-14 business days depending on the destination."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some items like electronics may have different return conditions - please check individual product pages for details."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Customs duties and taxes may apply depending on your country's import regulations."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact our customer service within 48 hours of delivery. We'll arrange for a replacement or refund and may ask for photos of the damaged product."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available 24/7 via email, live chat, and phone. We're here to help with any questions or concerns you may have about our products or services."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and policies.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" > <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button> </Link>

            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
