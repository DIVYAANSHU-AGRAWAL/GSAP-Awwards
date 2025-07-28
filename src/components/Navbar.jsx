import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'  // For hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        
        {/* Logo */}
        <Link to="/">
          <img src="/images/nav-logo.svg" alt="nav-logo" className="w-20 md:w-24" />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">        {/* hidden on large screens */}
          {menuOpen ? (
            <X className="w-7 h-7 cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-base font-bold tracking-wide">
          <li><Link to="/" className="hover:text-orange-500 duration-300">Home</Link></li>
          <li><Link to="/message" className="hover:text-orange-500 duration-300">Message</Link></li>
          <li><Link to="/flavors" className="hover:text-orange-500 duration-300">Explore Flavors</Link></li>
          <li><Link to="/nutrients" className="hover:text-orange-500 duration-300">Nutrients Info</Link></li>
          <li><Link to="/benefits" className="hover:text-orange-500 duration-300">Benefits</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 py-4 bg-white shadow-md font-semibold text-base">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/message" onClick={() => setMenuOpen(false)}>Message</Link></li>
          <li><Link to="/flavors" onClick={() => setMenuOpen(false)}>Explore Flavors</Link></li>
          <li><Link to="/nutrients" onClick={() => setMenuOpen(false)}>Nutrients Info</Link></li>
          <li><Link to="/benefits" onClick={() => setMenuOpen(false)}>Benefits</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
