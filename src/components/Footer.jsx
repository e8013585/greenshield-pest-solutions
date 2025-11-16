import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GreenShield Pest Solutions</h3>
            <p className="mb-4 text-gray-300">
              Eco-friendly pest control that protects your home and planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-light-green transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-light-green transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-light-green transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-light-green transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-light-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-light-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-light-green transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-light-green transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-light-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Greenway Blvd</li>
              <li>Stockton, CA 95202</li>
              <li><a href="tel:+12095550199" className="hover:text-light-green transition-colors">(209) 555-0199</a></li>
              <li><a href="mailto:info@greenshieldpest.com" className="hover:text-light-green transition-colors">info@greenshieldpest.com</a></li>
              <li>Mon-Sat: 8AM - 6PM</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe for pest prevention tips and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-dark-black rounded-l focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-primary-green hover:bg-green-700 px-4 py-2 rounded-r transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GreenShield Pest Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer