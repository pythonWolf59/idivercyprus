import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const services = [
    {
      title: 'Beginner Diving Courses',
      description: 'Your first breath underwater! Our certified instructors will guide you through the basics, providing a safe and exciting introduction to the world of scuba diving.',
      image: 'https://divemagazine.com/wp-content/uploads/learning-to-dive-pool-training.jpg'
    },
    {
      title: 'Advanced Training',
      description: 'Ready to go deeper? Expand your skills with courses in navigation, deep diving, and buoyancy control to become a more confident and capable diver.',
      image: 'https://cdn.shopify.com/s/files/1/0647/8859/4941/files/19984166_655613094627181_8507851814630413242_o_33e258e1-1934-42e0-932b-22297a38cd4a_600x600.jpg?v=1704196713'
    },
    {
      title: 'Wreck & Reef Exploration',
      description: 'Explore the sunken treasures of the Mediterranean, from historic shipwrecks to vibrant coral reefs teeming with marine life.',
      image: 'https://images.pexels.com/photos/17941857/pexels-photo-17941857/free-photo-of-a-coral-reef.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Night & Specialty Dives',
      description: 'Witness the sea come alive after dark. Our specialty dives, including night diving and underwater photography, offer a unique perspective on the ocean.',
      image: 'https://www.hurghadadiving.net/mt-content/uploads/2021/03/night-diver-5.jpg'
    }
  ];

  return (
    <div className="bg-slate-900 min-h-screen font-sans antialiased text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Diving Adventures</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From your very first underwater breath to exploring historic shipwrecks, we offer a range of experiences tailored for every passion and skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 rounded-3xl p-0 border border-slate-700 shadow-xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="pt-6 pb-4 px-6 md:pt-8 md:px-8">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <p className="text-gray-300 mb-6">{service.description}</p>
                <a href="/contact">
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                    Explore Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- Technical Diver Training Section --- */}
        <div className="text-center mt-24 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Advance Your Skills</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For those ready to take on a new challenge, our advanced training opens up a world of possibilities.
          </p>
        </div>
        <a 
          href="https://wa.me/35799689961" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group block mt-8 bg-slate-800/50 p-8 rounded-3xl backdrop-blur-sm border border-slate-700 shadow-xl transition-all duration-500 transform hover:scale-[1.01] hover:shadow-cyan-500/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Logo */}
            <img 
              src="/images/TechnicalDiverTraining.jpg" 
              alt="NAUI Technical Diver Training" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-10 transition-transform duration-500 group-hover:scale-110"
            />
            {/* Text Content */}
            <div className="text-white text-center md:text-left max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Technical Diver Training</h2>
              <p className="text-gray-300 mb-4">
                The NAUI Introduction to Technical Diving course (Intro to Tech) introduces recreational divers to the rigors and discipline of technical diving, and is a great preparatory course if you are considering specific technical diver training, such as cave or decompression diving, or are interested in streamlining your equipment configuration for maximum efficiency.
              </p>
              <p className="text-gray-300 mb-4">
                Learn about dive planning, physics and physiology, decompression, decompression associated with technical diving, buoyancy control, and side-mount configuration. The NAUI Technical Equipment Configuration (NTEC) training is also part of the NAUI Intro to Tech course.
              </p>
              <p className="text-gray-400 text-sm font-semibold">
                You must be at least 18 years of age to enroll in the NAUI Introduction to Technical Diving course. You must also be a certified NAUI Scuba Diver and NAUI EANx Diver (or their equivalents), and have at least 25 logged dives with at least 10 EANx dives.
              </p>
            </div>
          </div>
          {/* Call-to-action arrow */}
          <div className="flex justify-center mt-6">
            <ArrowRight className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </a>
      </div>
      {/* A simple placeholder for the Footer component */}
      <div className="text-center py-8 text-gray-400">
        <p>&copy; {new Date().getFullYear()} IDiveCyprus. All rights reserved.</p>
      </div>
    </div>
  );
}
