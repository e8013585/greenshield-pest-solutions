import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="hero-pattern bg-cover h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          GreenShield Pest Solutions
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Eco-Friendly Pest Control That Protects Your Home and Planet
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/services"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-black font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection