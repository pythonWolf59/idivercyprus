import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, Anchor, Moon, Trophy } from 'lucide-react';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: 'Beginner Diving Courses',
      description: 'Your first breath underwater! Our certified instructors will guide you through the basics, providing a safe and exciting introduction to the world of scuba diving.',
      image: 'https://divemagazine.com/wp-content/uploads/learning-to-dive-pool-training.jpg'
    },
    {
      icon: Trophy,
      title: 'Advanced Training',
      description: 'Ready to go deeper? Expand your skills with courses in navigation, deep diving, and buoyancy control to become a more confident and capable diver.',
      image: 'https://cdn.shopify.com/s/files/1/0647/8859/4941/files/19984166_655613094627181_8507851814630413242_o_33e258e1-1934-42e0-932b-22297a38cd4a_600x600.jpg?v=1704196713'
    },
    {
      icon: Anchor,
      title: 'Wreck & Reef Exploration',
      description: 'Explore the sunken treasures of the Mediterranean, from historic shipwrecks to vibrant coral reefs teeming with marine life.',
      image: 'https://images.pexels.com/photos/17941857/pexels-photo-17941857/free-photo-of-a-coral-reef.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: Moon,
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
            <Card key={index} className="bg-slate-800/50 rounded-3xl p-0 border border-slate-700 shadow-xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <CardHeader className="pt-6 pb-4 px-6 md:pt-8 md:px-8">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">{service.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 md:px-8 md:pb-8">
                <CardDescription className="text-gray-300 mb-6">{service.description}</CardDescription>
                <Link to="/contact">
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                    Explore Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
