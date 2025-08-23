import { Mail, MapPin, Facebook, Instagram} from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs' // Correct import for WhatsApp
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">iDiverCyprus</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your premier scuba diving experience in Cyprus. Explore the Mediterranean's hidden treasures with our expert team.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1C4FyznXjj/?mibextid=wwXIfr" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/idivecyprus?igsh=MTFjcjkzd2s4Z3h5" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                <span>info@idivercyprus.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BsWhatsapp className="h-5 w-5 mr-3 text-cyan-400" /> {/* Replaced with the new icon */}
                <span>+357 996 899 61</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                <span>Protara 29, Protaras Cyprus, Paralimni 5296 Cyprus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 iDiverCyprus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}