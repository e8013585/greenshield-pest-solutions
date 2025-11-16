import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "GreenShield solved our ant problem without harmful chemicals. Professional and eco-friendly!"
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: "Fast response and effective treatment. Will definitely use them again."
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      text: "Finally found a pest control company that cares about the environment. Highly recommend!"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials