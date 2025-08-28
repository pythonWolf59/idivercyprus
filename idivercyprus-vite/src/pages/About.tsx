import React from 'react';
import { Shield, Users, Award, Globe, HeartHandshake } from 'lucide-react';

export default function App() {
  const teamImageUrl = "https://images.unsplash.com/photo-1637308110286-e07eaa6ce9c6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const missionImageUrl = "https://imgs.search.brave.com/1LKwZyTucJfA-kZX_JoDMq03OhvxbrVBO5VTTfGFqIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnBhZGkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzA1/L2luc3BpcmluZ19v/Y2Vhbl9xdW90ZV9u/b3RfYWxsX2NsYXNz/cm9vbXMucG5n";

  const benefits = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Premium equipment, strict protocols, and full emergency readiness to ensure a safe diving experience.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Internationally certified instructors (PADI, NAUI, SSI) with thousands of dives behind them.'
    },
    {
      icon: Award,
      title: 'Personal Touch',
      description: 'Small groups, customized experiences, and a welcoming atmosphere for every diver.'
    },
    {
      icon: Globe,
      title: 'World-Class Dive Sites',
      description: 'Explore the legendary Zenobia Wreck, vibrant reefs, and hidden caves in Cyprus.'
    },
    {
      icon: HeartHandshake,
      title: 'Eco Commitment',
      description: 'We promote sustainable practices and protect the ocean as part of our core mission.'
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen font-sans antialiased text-gray-100 relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent animate-gradient-slow"></div>

      {/* Main Content Sections */}
      <div className="relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="flex flex-col text-center md:text-left animate-fade-in-right">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                About iDive<span className="text-cyan-400">Cyprus</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-8">
                Your gateway to the underwater world. We are a team of passionate, certified diving professionals who live and breathe the sea.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Start Your Adventure
              </a>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-slate-700 animate-fade-in-left">
              <img
                src={teamImageUrl}
                alt="Diver exploring underwater"
                className="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </section>
          
          {/* Mission & Values Section */}
          <section className="mb-24 relative p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl bg-slate-800/60 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative z-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To inspire, educate, and connect people with the sea — creating safe, sustainable, and life-changing diving experiences in Cyprus. We believe in protecting the ocean as much as we love exploring it.
                </p>
              </div>
              <div className="order-1 md:order-2 relative overflow-hidden rounded-2xl shadow-xl border-2 border-slate-700">
                <img 
                  src={missionImageUrl} 
                  alt="Our Mission" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </section>

          {/* Why Dive with Us? Section - More Unique Layout */}
          <section>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Dive with Us?</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're not just a dive center. We are your partners in discovery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group rounded-3xl shadow-lg border border-slate-700 p-8 transform-gpu perspective-1000 transition-all duration-500 hover:rotate-y-6 hover:scale-105 bg-slate-900/60 backdrop-blur-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6 transition-all duration-500 group-hover:bg-cyan-500/30 group-hover:scale-110">
                    <benefit.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-gradient-slow { animation: gradient-slow 15s ease infinite; background-size: 200% 200%; }
      `}</style>
    </div>
  );
}
