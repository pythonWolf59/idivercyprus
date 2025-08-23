import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          iDiver<span className="text-cyan-400">Cyprus</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
          Explore the Depths of Cyprus with Us
        </p>
        <Button
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          Book Your Dive
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  )
}