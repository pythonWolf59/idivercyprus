import { Mail, MapPin, Facebook, Instagram} from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs' // Correct import for WhatsApp
import { Link } from 'react-router-dom'

const handleWhatsAppClick1 = () => {
    window.open("https://wa.me/35799689961", "_blank");
  };

const handleWhatsAppClick2 = () => {
    window.open("https://wa.me/35795159569", "_blank");
  };

const openGoogleMap = () => {
    window.open("https://maps.app.goo.gl/QCW73G16T9K7HdeX6?g_st=ipc", "_blank");
  };

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">iDiveCyprus</h3>
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
              {/* WhatsApp Section Div */}
              <div className="flex items-center text-gray-300">
                <BsWhatsapp className="h-5 w-5 mr-3 text-cyan-400" /> {/* Replaced with the new icon */}
                <a 
                  href="https://wa.me/35795159569" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                >
                  +357 951 595 69
                </a>
                
              </div>

              {/* WhatsApp Section Div */}
              <div className="flex items-center text-gray-300">
                <BsWhatsapp className="h-5 w-5 mr-3 text-cyan-400" /> {/* Replaced with the new icon */}
                
                <a 
                    href="https://wa.me/35799689961" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    +357 996 899 61
                  </a>
              </div>
              
              {/* GoogleMap Section Div */}
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                 <a 
                    href="https://maps.app.goo.gl/QCW73G16T9K7HdeX6?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    I Dive Cyprus, Protara 29 Avenue, Shop 4-6, Paralimni 5296, Cyprus
                  </a>
              </div>

              {/* End of Google Map Div */}
            </div>
          </div>
        </div>

          {/* New Logos Section */}
        <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between mt-8 md:mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-gray-400 text-sm mb-2">Platinum Pro Dive Center #AF1396</p>
            <div className="flex space-x-4 items-center">
              <img src="/images/Naui.jpg" alt="NAUI Member" className="h-16 w-auto rounded-lg shadow-lg" />
              <img src="/images/NauiLogo.jpg" alt="NAUI Logo" className="h-16 w-auto rounded-lg shadow-lg" />
              <img src="/images/NauiMember.jpg" alt="NAUI Certificied" className="h-16 w-auto rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm mb-2">PADI Elite Instructors 2024-2025</p>
            <div className="flex space-x-4 items-center">
              <img src="/images/PADI logo.jpeg" alt="PADI Registeration" className="h-16 w-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
          <p className="text-gray-400 text-sm text-center"> IDiveCyprus 2025 All Rights Reserved</p>
      </div>
    </footer>
  )
}