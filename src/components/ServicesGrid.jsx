import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaBuilding, FaLeaf, FaShieldAlt } from 'react-icons/fa'

const ServicesGrid = () => {
  const services = [
    {
      icon: <FaHome className="text-4xl text-primary-green" />,
      title: "Residential Pest Control",
      description: "Safe and effective pest solutions for your home.",
      link: "/services#residential"
    },
    {
      icon: <FaBuilding className="text-4xl text-primary-green" />,
      title: "Commercial Pest Solutions",
      description: "Professional pest management for businesses.",
      link: "/services#commercial"
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-green" />,
      title: "Eco-Friendly Treatments",
      description: "Environmentally responsible pest control methods.",
      link: "/services#eco-friendly"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-green" />,
      title: "Pest Prevention Plans",
      description: "Proactive protection to keep pests away.",
      link: "/services#prevention"
    }
  ]

  return (
    <div className="py-16 bg-light-green">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-primary-green font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesGrid