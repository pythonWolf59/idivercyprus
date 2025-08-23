import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PhotoGrid />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  )
}