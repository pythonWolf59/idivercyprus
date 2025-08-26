import React from 'react';

export default function PhotoGrid() {
  const experiences = [
    {
      id: 1,
      image: 'https://silentworld.com/wp-content/uploads/2024/12/AdobeStock_49656996-min-scaled.jpeg.webp',
      title: 'Courses',
      description: 'Learn to dive with PADI & NAUI certifications.'
    },
    {
      id: 2,
      image: '/images/Fun Dives.jpg',
      title: 'Fun Dives',
      description: 'Explore Cyprus’s reefs, caves, and wrecks.'
    },
    {
      id: 3,
      image: '/images/cover1.jpeg',
      title: 'Specialty Dives',
      description: 'Deep, wreck, Nitrox, night diving adventures and more.'
    },
    {
      id: 4,
      image: 'https://www.mauiinn.com/wp-content/uploads/2025/02/Woman_Snorkeling.jpg',
      title: 'Snorkeling',
      description: 'Family-friendly fun for non-divers.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-800">
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
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-700 hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
