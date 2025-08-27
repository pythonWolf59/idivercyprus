import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import Footer from '../components/Footer'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 35.0146337,
  lng: 34.0505644,
};

const googleMapsUrl = 'https://www.google.com/maps/place/Protara+29,+Paralimni+5296,+Cyprus/@35.0146337,34.0505644,17z/';

export default function ContactPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  // ---------- ADDED: local state for showing modal ----------
  const [showSuccess, setShowSuccess] = useState(false);

  // ---------- ADDED: intercept submit, send to Netlify via fetch, reset form, show modal ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // ensure Netlify knows which form it is
    formData.append('form-name', 'contact');

    try {
      // POST to root so Netlify picks it up (same as normal form submit)
      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      // clear fields and show modal
      form.reset();
      setShowSuccess(true);

      // auto-close modal after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to dive into your next adventure? Get in touch with us to book your diving experience or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {/* ✅ Netlify Form — kept attributes, added onSubmit */}
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              {/* Netlify requires hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              <Card className="bg-slate-800/50 border-slate-700 relative">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your diving experience or questions..."
                      rows={6}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Right Side Info (unchanged) */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@idivercyprus.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+357 996 899 61</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">Protara 29, Protaras Cyprus,</p>
                    <p className="text-300">Paralimni 5296 Cyprus</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Hours</h3>
                    <p className="text-gray-300">Mon - Sun: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-700 rounded-lg h-64 overflow-hidden">
                  {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={15}
                    >
                      <MarkerF
                        position={center}
                        onClick={() => window.open(googleMapsUrl, '_blank')}
                      />
                    </GoogleMap>
                  ) : (
                    <div className="text-gray-300 text-center flex items-center justify-center h-full">
                      Loading Map...
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ----------------- Success Modal ----------------- */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center mx-4">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Message Sent!</h3>
              <p className="text-sm text-gray-600 mb-4">Thanks — we received your message and will get back to you soon.</p>
              <Button onClick={() => setShowSuccess(false)} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
