import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
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

      {/* Main Content Area */}
      <div className="w-full pt-24 min-h-screen bg-[#F6EFD2] px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#000000] mb-6">
            About TrueLens
          </h1>
          <p className="text-xl text-[#000000] opacity-80 max-w-3xl mx-auto">
            Your trusted platform for detecting AI-generated content in images and videos
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#E43636]">
          <h2 className="text-3xl font-bold text-[#000000] mb-6">Our Mission</h2>
          <p className="text-lg text-[#000000] leading-relaxed mb-4">
            In today's digital age, distinguishing between real and AI-generated content has become increasingly challenging. 
            TrueLens is dedicated to providing accurate, reliable detection tools that help users identify AI-generated 
            images and videos with confidence.
          </p>
          <p className="text-lg text-[#000000] leading-relaxed">
            We believe in transparency and truth in digital media, empowering users to make informed decisions about 
            the content they encounter online.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#E43636]">
          <h2 className="text-3xl font-bold text-[#000000] mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-[#E2DDB4] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#000000]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">Image Analysis</h3>
              <p className="text-[#000000] opacity-80">
                Upload your images and get instant analysis to determine if they're AI-generated or authentic
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E2DDB4] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#000000]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">Video Detection</h3>
              <p className="text-[#000000] opacity-80">
                Analyze video content frame by frame to identify AI-generated sequences and deepfakes
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#E43636]">
          <h2 className="text-3xl font-bold text-[#000000] mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#E43636] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">Upload</h3>
              <p className="text-[#000000] opacity-80">
                Simply upload your image or video file through our secure platform
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E43636] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">Analyze</h3>
              <p className="text-[#000000] opacity-80">
                Our advanced AI algorithms analyze the content for generation artifacts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E43636] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#000000] mb-2">Results</h3>
              <p className="text-[#000000] opacity-80">
                Get detailed results with confidence scores and explanations
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#E43636]">
          <h2 className="text-3xl font-bold text-[#000000] mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-[#E2DDB4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-[#000000]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#000000]">High Accuracy</h3>
                <p className="text-[#000000] opacity-80">Advanced detection algorithms with proven accuracy rates</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-[#E2DDB4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-[#000000]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#000000]">Fast Processing</h3>
                <p className="text-[#000000] opacity-80">Quick analysis with results in seconds</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-[#E2DDB4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-[#000000]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#000000]">Privacy First</h3>
                <p className="text-[#000000] opacity-80">Your files are processed securely and never stored</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-[#E2DDB4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-[#000000]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#000000]">Multiple Formats</h3>
                <p className="text-[#000000] opacity-80">Support for various image and video formats</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#E2DDB4] rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[#000000] mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-[#000000] opacity-80 mb-6">
            Try our AI detection tools today and experience the difference
          </p>
          <div className="space-x-4">
            <Link to="/imagecheck" className="inline-block bg-[#E43636] text-[#F6EFD2] px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 no-underline">
              Check Images
            </Link>
            <Link to="/video-check" className="inline-block bg-[#E43636] text-[#F6EFD2] px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 no-underline">
              Check Videos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
