import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F6EFD2]">
      {}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E43636] shadow-lg">
        <div className="w-full px-8 py-4">
          <div className="flex justify-center items-center space-x-16">
            <Link to="/" className="text-[#F6EFD2] hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105 no-underline cursor-pointer">
              Home
            </Link>
            <Link to="/imagecheck" className="text-[#F6EFD2] hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105 no-underline cursor-pointer">
              Imagecheck
            </Link>
            <Link to="/video-check" className="text-[#F6EFD2] hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105 no-underline cursor-pointer">
              Video Check
            </Link>
            <Link to="/about" className="text-[#F6EFD2] hover:text-white font-semibold text-lg transition-all duration-300 hover:scale-105 no-underline cursor-pointer">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area*/}
      <div className="w-full pt-24 min-h-screen bg-[#F6EFD2]">
        {/* Add content here */}
      </div>
    </div>
  )
}

export default Home
