import React from 'react';
import { Star } from 'lucide-react';

export default function App() {
  const testimonials = [
    {
      name: 'Maria A.',
      location: 'TripAdvisor Reviewer',
      rating: 5,
      text: 'Perfect for beginners. My son and I wanted to try diving for the first time. The instructor was very professional and patient with us. He took time to explain everything and made us feel safe and confident throughout the entire experience. It was a beautiful dive and a fantastic memory.',
      link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d2718334-Reviews-I_Dive_Cyprus-Protaras_Paralimni_Famagusta_District.html'
    },
    {
      name: 'Michael V.',
      location: 'TripAdvisor Reviewer',
      rating: 5,
      text: 'This was a truly incredible experience. The instructor was very knowledgeable and passionate about diving, which made the whole trip so much better. We saw some amazing marine life and had a fantastic time. Thank you for an unforgettable adventure!',
      link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d2718334-Reviews-I_Dive_Cyprus-Protaras_Paralimni_Famagusta_District.html'
    },
    {
      name: 'Mark G.',
      location: 'TripAdvisor Reviewer',
      rating: 5,
      text: 'Simply the best! I\'ve been on many dive trips and this was one of the most professional and enjoyable. The gear was top-notch and the dive sites were stunning. The team is friendly and highly experienced. I will definitely be back on my next visit to Cyprus.',
      link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d2718334-Reviews-I_Dive_Cyprus-Protaras_Paralimni_Famagusta_District.html'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Divers Say</h2>
          <p className="text-xl text-gray-300">Real experiences from our satisfied customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-slate-700/50 p-6 rounded-3xl backdrop-blur-sm border border-slate-600/50 transform hover:scale-105 transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-slate-600 pt-4">
                <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-2">Read more reviews on TripAdvisor</p>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g667803-d2718334-Reviews-I_Dive_Cyprus-Protaras_Paralimni_Famagusta_District.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://static.tacdn.com/img2/brand_refresh_2025/logos/wordmark.svg"
              alt="TripAdvisor Logo"
              className="h-10 w-auto bg-white rounded-md p-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
