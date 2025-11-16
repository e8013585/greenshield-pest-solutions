import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Inspection",
      price: "$99",
      period: "one-time",
      description: "Initial pest inspection and assessment",
      features: [
        "Visual inspection of interior/exterior",
        "Identification of pest species",
        "Treatment recommendations",
        "Written report provided"
      ],
      popular: false
    },
    {
      name: "Monthly Protection",
      price: "$79",
      period: "per month",
      description: "Ongoing pest prevention and monitoring",
      features: [
        "Monthly interior/exterior treatments",
        "Priority scheduling",
        "24/7 customer support",
        "Seasonal adjustments",
        "Guarantee included"
      ],
      popular: true
    },
    {
      name: "Annual Plan",
      price: "$799",
      period: "per year",
      description: "Complete annual pest protection",
      features: [
        "Monthly treatments (12 visits)",
        "2 seasonal deep treatments",
        "Emergency service calls",
        "Priority scheduling",
        "Money-back guarantee"
      ],
      popular: false
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Satisfaction guaranteed. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'border-2 border-primary-green relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-green text-white text-center py-2">
                  <span className="font-bold">MOST POPULAR</span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-green mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center font-bold py-3 px-6 rounded-full transition duration-300 block ${
                    plan.popular 
                      ? 'bg-primary-green hover:bg-green-700 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-dark-black'
                  }`}
                >
                  Select Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-light-green rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Custom Solutions</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have specific needs or a large property? We offer custom quotes for complex 
            pest situations and commercial properties.
          </p>
          <Link
            to="/contact"
            className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Request Custom Quote
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Pricing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                What you see is what you pay. All costs are clearly outlined upfront.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                Not happy with our service? We'll re-treat at no additional cost.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Change or cancel anytime. No long-term contracts required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing