import { Shield, Users, Award, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'PADI certified instructors with years of experience ensuring your safety underwater.'
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Personalized attention with small group sizes for the best diving experience.'
    },
    {
      icon: Award,
      title: 'Expert Guides',
      description: 'Local knowledge and expertise to show you the best diving spots in Cyprus.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Multiple daily departures and custom scheduling to fit your vacation plans.'
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose iDiverCyprus?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over a decade of experience in Cyprus waters, we provide safe, memorable, and professional diving experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <feature.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}