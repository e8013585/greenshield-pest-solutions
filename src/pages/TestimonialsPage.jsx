import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Modesto, CA",
      rating: 5,
      date: "March 2023",
      text: "GreenShield solved our ant problem without harmful chemicals. The technician was professional and explained everything clearly. Professional and eco-friendly!",
      service: "Residential Pest Control"
    },
    {
      name: "Mike Rodriguez",
      location: "Stockton, CA",
      rating: 5,
      date: "February 2023",
      text: "We've been using GreenShield for our restaurant for over a year now. Their commercial pest solutions are reliable and they always arrive on time. Fast response and effective treatment!",
      service: "Commercial Pest Solutions"
    },
    {
      name: "Jennifer Lee",
      location: "Manteca, CA",
      rating: 5,
      date: "January 2023",
      text: "Finally found a pest control company that cares about the environment. They used plant-based treatments for our rodent problem and it worked perfectly. Highly recommend!",
      service: "Eco-Friendly Treatments"
    },
    {
      name: "Robert Chen",
      location: "Lodi, CA",
      rating: 5,
      date: "December 2022",
      text: "Their prevention plan saved us from a major termite infestation. The monthly inspections give us peace of mind knowing our home is protected.",
      service: "Pest Prevention Plans"
    },
    {
      name: "Lisa Thompson",
      location: "Tracy, CA",
      rating: 5,
      date: "November 2022",
      text: "I was skeptical about eco-friendly pest control, but GreenShield proved me wrong. They eliminated our spider problem completely with safe, natural methods.",
      service: "Residential Pest Control"
    },
    {
      name: "David Wilson",
      location: "Turlock, CA",
      rating: 5,
      date: "October 2022",
      text: "As a property manager, I appreciate their detailed reports and flexible scheduling. They handle multiple units efficiently and professionally.",
      service: "Commercial Pest Solutions"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-gray-600">
            Hear what our satisfied customers have to say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <FaQuoteLeft className="text-primary-green opacity-20 absolute -top-2 -left-2 text-4xl" />
                <p className="text-gray-600 italic pl-6">{testimonial.text}</p>
              </div>
              
              <div className="border-t pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-gray-500 mt-1">{testimonial.service} • {testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-light-green rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have you worked with GreenShield Pest Solutions? We'd love to hear about your experience!
          </p>
          <button className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage