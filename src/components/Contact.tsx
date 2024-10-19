import React from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Particles from "@/components/Particles"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/50 to-primary text-primary-foreground relative overflow-hidden">
      <Particles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-secondary" />
            <h3 className="font-semibold mb-2 text-white">Visit Us</h3>
            <p className="text-sm text-gray-200">123 Law St, Cityville, State 12345, AU</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Phone className="h-8 w-8 mx-auto mb-4 text-secondary" />
            <h3 className="font-semibold mb-2 text-white">Call Us</h3>
            <p className="text-sm text-gray-200">(+61) 0419-511-091</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Mail className="h-8 w-8 mx-auto mb-4 text-secondary" />
            <h3 className="font-semibold mb-2 text-white">Email Us</h3>
            <p className="text-sm text-gray-200">info@miglawyers.com</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30 shadow-lg inline-block">
            <p className="text-sm text-gray-800 font-medium max-w-2xl mx-auto font-serif italic">
              Please contact us 24/7, using the contact details above. 
              Our expert Lawyers, Advisors, Consultants and Mediators are ready to assist you with your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact