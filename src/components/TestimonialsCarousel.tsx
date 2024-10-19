import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: number
  name: string
  position: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Tech Innovations",
    content: "MIG Lawyers provided exceptional legal advice for our startup. Their expertise in corporate law was invaluable."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Real Estate Developer",
    content: "I've worked with many law firms, but MIG Lawyers stands out for their professionalism and attention to detail."
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Entrepreneur",
    content: "The team at MIG Lawyers helped me navigate complex IP issues. Their guidance was crucial to my business success."
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "CFO, Global Enterprises",
    content: "MIG Lawyers' tax expertise saved our company significant resources. Their strategic advice was spot-on."
  }
]

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-900 py-16 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Client Testimonials</h2>
        <div className="relative bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700">
          <Quote className="absolute top-3 left-3 h-6 w-6 text-gray-500 opacity-25 transform rotate-180" />
          <div className="text-center px-8">
            <p className="text-base mb-3 text-gray-300 relative italic">
              "{testimonials[currentIndex].content}"
            </p>
            <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
          </div>
          <Quote className="absolute bottom-3 right-3 h-6 w-6 text-gray-500 opacity-25" />
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <Button variant="ghost" onClick={prevTestimonial} className="p-1 text-white hover:text-gray-300">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <Button variant="ghost" onClick={nextTestimonial} className="p-1 text-white hover:text-gray-300">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCarousel