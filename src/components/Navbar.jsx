import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 md:px-6 py-2 md:py-3">
        
        <Link to="/">
        {/* Logo */}
          <img src="/images/nav-logo.svg" alt="nav-logo" className="w-20 md:w-24" />
        </Link>

        {/* Menu Items */}
        <ul className="flex gap-3 md:gap-6 text-md md:text-base tracking-wider font-bold">
          <li>
            <Link to="/" className="hover:text-orange-500 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/message" className="hover:text-orange-500 transition-colors duration-300">Message</Link>
          </li>
          <li>
            <Link to="/flavors" className="hover:text-orange-500 transition-colors duration-300">Explore Flavors</Link>
          </li>
          <li>
            <Link to="/nutrients" className="hover:text-orange-500 transition-colors duration-300">Nutrients Info</Link>
          </li>
          <li>
            <Link to="/benefits" className="hover:text-orange-500 transition-colors duration-300">Benefits</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
