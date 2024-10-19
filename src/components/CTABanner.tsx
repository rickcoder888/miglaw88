import React from 'react'
import { Button } from "@/components/ui/button"

const CTABanner: React.FC = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-foreground">Let our expert team help you navigate your legal challenges.</p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Contact Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner