import React from 'react'
import { Link } from 'react-router-dom'

const MobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-4 right-4 z-50">
      <Link
        to="/contact"
        className="bg-primary-green text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-green-700 transition-colors"
      >
        ☎️
      </Link>
    </div>
  )
}

export default MobileCTA