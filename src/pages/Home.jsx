import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesGrid from '../components/ServicesGrid'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Company Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Trusted Eco-Friendly Pest Control</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At GreenShield Pest Solutions, we protect your home and family using environmentally 
            responsible methods that are safe for people, pets, and the planet.
          </p>
        </div>
      </section>

      <ServicesGrid />
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GreenShield?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Methods</h3>
              <p className="text-gray-600">
                We use organic and sustainable treatments that protect your family and the environment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed Technicians</h3>
              <p className="text-gray-600">
                Our certified professionals have years of experience in effective pest management.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">💯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">
                We stand behind our work with satisfaction guarantees and follow-up services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="py-16 bg-primary-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Protect Your Space Today</h2>
          <p className="text-xl text-light-green mb-8 max-w-2xl mx-auto">
            Don't let pests take over your home or business. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12095550199"
              className="bg-white text-primary-green hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home