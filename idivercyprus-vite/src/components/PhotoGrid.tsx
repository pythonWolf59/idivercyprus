import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [activeCard, setActiveCard] = useState(null);

  const experiences = [
    {
      id: 1,
      image: 'https://silentworld.com/wp-content/uploads/2024/12/AdobeStock_49656996-min-scaled.jpeg.webp',
      title: 'Courses',
      description: 'Learn to dive with PADI & NAUI certifications.',
      link: 'https://wa.me/35799689961'
    },
    {
      id: 2,
      image: '/images/Fun Dives.jpg',
      title: 'Fun Dives',
      description: 'Explore Cyprus’s reefs, caves, and wrecks.',
      link: 'https://wa.me/35799689961'
    },
    {
      id: 3,
      image: '/images/cover1.jpeg',
      title: 'Specialty Dives',
      description: 'Deep, wreck, Nitrox, night diving adventures and more.',
      link: 'https://wa.me/35799689961'
    },
    {
      id: 4,
      image: 'https://www.mauiinn.com/wp-content/uploads/2025/02/Woman_Snorkeling.jpg',
      title: 'Snorkeling',
      description: 'Family-friendly fun for non-divers.',
      link: 'https://wa.me/35799689961'
    }
  ];

  const handleTouch = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Diving Experiences</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From beginner courses to advanced specialty dives, we have an adventure for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 transform"
              onTouchStart={() => handleTouch(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white transition-opacity duration-500 ${activeCard === item.id ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`}
              >
                <div 
                  className={`transform transition-transform duration-500 ${activeCard === item.id ? 'translate-y-0' : 'translate-y-8'} md:group-hover:translate-y-0`}
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
              <div className={`absolute inset-x-0 bottom-0 p-6 flex justify-between items-center bg-slate-800/80 backdrop-blur-sm transition-opacity duration-300 ${activeCard === item.id ? 'opacity-0' : 'opacity-100'} md:group-hover:opacity-0`}>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <a href={item.link}>
                  <ArrowRight className="h-6 w-6 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
