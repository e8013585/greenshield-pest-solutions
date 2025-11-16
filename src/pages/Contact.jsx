import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch for a free consultation or quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Pest Control</option>
                  <option value="commercial">Commercial Pest Solutions</option>
                  <option value="eco-friendly">Eco-Friendly Treatments</option>
                  <option value="prevention">Pest Prevention Plans</option>
                  <option value="inspection">Basic Inspection</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-light-green rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Greenway Blvd<br />
                      Stockton, CA 95202
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <a href="tel:+12095550199" className="text-gray-600 hover:text-primary-green transition-colors">
                      (209) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <a href="mailto:info@greenshieldpest.com" className="text-gray-600 hover:text-primary-green transition-colors">
                      info@greenshieldpest.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday<br />
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-600">Map Placeholder - Google Maps Embed Goes Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact