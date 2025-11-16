import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: "residential",
      title: "Residential Pest Control",
      image: "/images/residential.jpg",
      description: "Comprehensive pest solutions for your home, from ants to rodents. Our eco-friendly treatments ensure your family's safety while effectively eliminating pests.",
      features: [
        "Interior and exterior inspections",
        "Targeted treatment plans",
        "Child and pet-safe products",
        "Follow-up visits included"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Pest Solutions",
      image: "/images/commercial.jpg",
      description: "Professional pest management for restaurants, offices, warehouses, and retail spaces. We understand the importance of maintaining a pest-free environment for your business.",
      features: [
        "Customized commercial plans",
        "Health department compliance",
        "Flexible scheduling",
        "Detailed reporting"
      ]
    },
    {
      id: "eco-friendly",
      title: "Eco-Friendly Treatments",
      image: "/images/eco-treatment.jpg",
      description: "Plant-based and organic pest control solutions that work with nature, not against it. Our treatments break down naturally while providing powerful pest elimination.",
      features: [
        "Organic botanical ingredients",
        "Biodegradable formulas",
        "Non-toxic to humans and pets",
        "Sustainable packaging"
      ]
    },
    {
      id: "prevention",
      title: "Pest Prevention Plans",
      image: "/images/prevention.jpg",
      description: "Proactive protection to stop pests before they become a problem. Our prevention programs include regular inspections and barrier treatments.",
      features: [
        "Seasonal treatment schedules",
        "Exclusion techniques",
        "Habitat modification advice",
        "24/7 emergency support"
      ]
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-green font-semibold">Safe. Effective. Green.</p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-light-green rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every pest problem is unique. Contact us for a personalized assessment and treatment plan 
            tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services