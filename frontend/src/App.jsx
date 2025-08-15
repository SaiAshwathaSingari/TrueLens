import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Imagecheck from './pages/Imagecheck/Imagecheck'
import VideoCheck from './pages/VideoCheck/VideoCheck'
import About from './pages/About/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imagecheck" element={<Imagecheck />} />
          <Route path="/video-check" element={<VideoCheck />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
