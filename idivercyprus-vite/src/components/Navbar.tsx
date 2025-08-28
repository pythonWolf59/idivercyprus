import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Waves } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <Waves className="h-8 w-8" />
            <span className="text-xl font-bold">iDiveCyprus</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive('/services') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive('/') ? 'text-cyan-400 bg-slate-700' : 'text-white hover:text-cyan-400 hover:bg-slate-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive('/about') ? 'text-cyan-400 bg-slate-700' : 'text-white hover:text-cyan-400 hover:bg-slate-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive('/services') ? 'text-cyan-400 bg-slate-700' : 'text-white hover:text-cyan-400 hover:bg-slate-700'
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive('/contact') ? 'text-cyan-400 bg-slate-700' : 'text-white hover:text-cyan-400 hover:bg-slate-700'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
