import React from 'react'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <section className="text-center bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission, values, and the team behind our innovative e-commerce platform.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">

          <section className="bg-white rounded-lg shadow-lg p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize online shopping, we are dedicated to providing 
              exceptional products and unparalleled customer service. Our journey began with a simple 
              idea: to create a shopping experience that is both enjoyable and trustworthy.
            </p>
            <p className="text-gray-600">
              Today, we offer a curated selection of high-quality products across various categories, 
              from electronics and fashion to home appliances and books. Every product in our catalog 
              is carefully selected to ensure it meets our strict quality standards.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide customers with access to premium products at competitive prices, 
              delivered with exceptional service and supported by a seamless shopping experience.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>Customer satisfaction above all</li>
              <li>Quality assurance in every product</li>
              <li>Innovation and continuous improvement</li>
              <li>Transparency and trust</li>
              <li>Sustainable business practices</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Fast Shipping</h4>
                <p className="text-gray-600 text-sm">Quick and reliable delivery nationwide</p>
              </article>
              <article className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Quality Products</h4>
                <p className="text-gray-600 text-sm">Carefully curated and tested items</p>
              </article>
              <article className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Round-the-clock customer service</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
