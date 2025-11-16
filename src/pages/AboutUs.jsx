import React from 'react'

const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About GreenShield Pest Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for eco-friendly pest control in San Joaquin County
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, GreenShield Pest Solutions emerged from a simple idea: 
              protecting homes shouldn't harm the environment. Our founder, Maria Gonzalez, 
              saw a need for truly eco-friendly pest control after struggling to find 
              chemical-free options for her own family.
            </p>
            <p className="text-gray-600 mb-4">
              Since then, we've grown into San Joaquin County's most trusted green pest 
              control company, serving thousands of satisfied customers with our 
              innovative, plant-based treatments and integrated pest management approach.
            </p>
            <p className="text-gray-600">
              Today, our team of certified technicians continues to pioneer new methods 
              that eliminate pests while preserving the health of your family and the planet.
            </p>
          </div>
          <div>
            <img 
              src="/images/team-photo.jpg" 
              alt="GreenShield Pest Solutions Team" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="bg-light-green rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We prioritize eco-friendly methods that protect ecosystems and biodiversity.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Family Safety</h3>
              <p className="text-gray-600">
                Your family's health comes first. We use only non-toxic, child-safe treatments.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of service quality and technician training.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Certifications & Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold">State Certified Pest Control</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold">EPA Safer Choice Partner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold">Green Business Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs