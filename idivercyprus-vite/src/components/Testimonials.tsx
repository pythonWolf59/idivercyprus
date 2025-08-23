import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      text: 'Amazing experience! The instructors were professional and the dive sites were breathtaking. Highly recommend iDiverCyprus!'
    },
    {
      name: 'Marco Rossi',
      location: 'Rome, Italy',
      rating: 5,
      text: 'Best diving experience in the Mediterranean. The wreck dives were incredible and the team made us feel safe throughout.'
    },
    {
      name: 'Anna Schmidt',
      location: 'Berlin, Germany',
      rating: 5,
      text: 'Perfect for beginners! Patient instructors and beautiful underwater scenery. Will definitely come back next year.'
    }
  ]

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
              className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-slate-600 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}