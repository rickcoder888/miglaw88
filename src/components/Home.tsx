import React from "react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Team from "@/components/Team"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import Contact from "@/components/Contact"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <TestimonialsCarousel />
      <Contact />
    </div>
  )
}

export default Home