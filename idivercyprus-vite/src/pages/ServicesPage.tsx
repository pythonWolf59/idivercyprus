import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Users, Anchor, Moon, Trophy } from 'lucide-react'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: 'Beginner Diving',
      description: 'Perfect for first-time divers. Learn the basics in shallow, calm waters with certified instructors.',
      image: 'https://picsum.photos/id/1084/400/300',
      features: ['PADI Open Water certification', 'Equipment included', 'Small group sizes', '2-day course'],
      price: 'From €299'
    },
    {
      icon: Trophy,
      title: 'Advanced Diving',
      description: 'Take your skills to the next level with deep water dives and advanced techniques.',
      image: 'https://picsum.photos/id/1085/400/300',
      features: ['Advanced Open Water', 'Deep diving specialty', 'Navigation training', 'Drift diving'],
      price: 'From €399'
    },
    {
      icon: Anchor,
      title: 'Wreck Diving',
      description: 'Explore historic shipwrecks and underwater archaeological sites around Cyprus.',
      image: 'https://picsum.photos/id/1086/400/300',
      features: ['Historic wrecks', 'Underwater photography', 'Marine archaeology', 'Expert guides'],
      price: 'From €89'
    },
    {
      icon: Moon,
      title: 'Night Diving',
      description: 'Experience the magic of underwater life after dark with our guided night dives.',
      image: 'https://picsum.photos/id/1087/400/300',
      features: ['Underwater lights provided', 'Nocturnal marine life', 'Safety-focused approach', 'Small groups only'],
      price: 'From €79'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From beginner courses to advanced wreck diving, we offer comprehensive scuba diving experiences for all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </div>
                  <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}