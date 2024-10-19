import React from "react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation'
import Particles from "@/components/Particles"

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 bg-background hero-pattern relative">
      <Particles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-3xl font-bold mb-6 text-foreground font-merriweather italic">
            {['Expert', 'Advice', 'and', 'Solutions', 'for', '...'].map((word, index) => (
              <React.Fragment key={index}>
                <span
                  className="inline-block opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}
                </span>
                {' '}
              </React.Fragment>
            ))}
            <br />
            {['Your', 'Peace', 'of', 'Mind'].map((word, index) => (
              <React.Fragment key={index}>
                <span
                  className="inline-block opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 6) * 0.2}s` }}
                >
                  {word}
                </span>
                {' '}
              </React.Fragment>
            ))}
          </h1>
          <div className="text-xl mb-8 text-foreground italic h-8">
            <TypeAnimation
              sequence={[
                'Your Trusted Partner in Navigating Legal Challenges',
                1000,
                'Expertise You Can Rely On',
                1000,
                'Committed to Your Success',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Get a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero