import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Globe, HeartHandshake } from 'lucide-react';

export default function AboutUs() {
  const teamImageUrl = "https://images.unsplash.com/photo-1637308110286-e07eaa6ce9c6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
    <div className="relative min-h-screen font-sans antialiased text-gray-100">
      {/* Full-page Background Image using a fixed img tag */}
      <img
        src={teamImageUrl}
        alt="Diver exploring underwater"
        className="fixed inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm -z-10"></div>

      {/* Main Content Sections */}
      <div className="relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <section className="text-center mb-16 px-4 md:px-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
              About iDive<span className="text-cyan-400">Cyprus</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 animate-fade-in-up-delay">
              Your Gateway to the Underwater World
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-16">
            <div className="bg-slate-900/60 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Welcome to iDive Cyprus</h2>
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                We’re a team of passionate, certified diving professionals who live and breathe the sea. From your very first breath underwater to advanced adventures, we’re here to make every dive in Cyprus safe, unforgettable, and fun.
              </p>
            </div>
          </section>

          {/* Why Dive with Us? Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Dive with Us?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group rounded-3xl shadow-lg border border-slate-700 p-6 md:p-8 hover:transform hover:-translate-y-2 transition-all duration-300 bg-slate-900/60 backdrop-blur-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6 group-hover:bg-cyan-500/30 transition-colors">
                    <benefit.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-slate-900/60 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To inspire, educate, and connect people with the sea — creating safe, sustainable, and life-changing diving experiences in Cyprus.
              </p>
            </div>
          </section>

          {/* Final Call to Action Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dive in with us, and discover the magic beneath the waves.
            </h2>
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Adventure
            </Link>
          </section>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fadeIn 0.8s ease-out 0.3s forwards; }
      `}</style>
    </div>
  );
}
