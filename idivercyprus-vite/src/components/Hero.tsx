import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const heroImageUrl = "/images/hero.jpeg";

const handleWhatsAppClick = () => {
    window.open("https://wa.me/35799689961", "_blank");
  };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          iDive<span className="text-cyan-400">Cyprus</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 text-gray-200 animate-fade-in-up-delay">
          “Discover the Magic of Cyprus Underwater”
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 animate-fade-in-up-delay-2">
          Dive into crystal-clear waters, explore the legendary Zenobia Wreck, and experience the vibrant marine life of the Mediterranean with iDive Cyprus.
        </p>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 animate-fade-in-up-delay-3"
        >
          Book Your Dive
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#why-choose-us" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fadeIn 0.8s ease-out 0.3s forwards; }
        .animate-fade-in-up-delay-2 { animation: fadeIn 0.8s ease-out 0.6s forwards; }
        .animate-fade-in-up-delay-3 { animation: fadeIn 0.8s ease-out 0.9s forwards; }
      `}</style>
    </section>
  );
}
