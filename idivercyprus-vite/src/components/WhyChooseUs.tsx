import { Shield, Users, Award, Clock, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Check,
      title: 'PADI & NAUI Certified',
      description: 'Internationally recognized training & safety standards.'
    },
    {
      icon: Check,
      title: 'All Levels Welcome',
      description: 'From beginners to advanced divers.'
    },
    {
      icon: Check,
      title: 'World-Class Dive Sites',
      description: 'Wrecks, caves, and more.'
    },
    {
      icon: Check,
      title: 'Eco-Friendly Diving',
      description: 'Protecting marine life with sustainable practices.'
    },
    {
      icon: Check,
      title: 'Trusted & Experienced Team',
      description: 'Thousands of dives, countless happy divers.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Dive with Us?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over two decades of experience in Cyprus waters, we provide safe, memorable, and professional diving experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:transform hover:-translate-y-2 transition-all duration-300"
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
  );
}
