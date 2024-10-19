import React from "react"
import { Briefcase, Gavel, FileText, Building, Users, Shield, Lightbulb, Calculator } from "lucide-react"

const Services: React.FC = () => {
  const services = [
    { icon: Briefcase, title: "Corporate Law", description: "Expert advice on business structures, contracts, and compliance." },
    { icon: Gavel, title: "Litigation", description: "Skilled representation in court for various legal disputes." },
    { icon: FileText, title: "Intellectual Property", description: "Protection for your ideas, inventions, and creative works." },
    { icon: Building, title: "Real Estate Law", description: "Guidance on property transactions, leases, and disputes." },
    { icon: Users, title: "Family Law", description: "Compassionate support for divorce, custody, and family matters." },
    { icon: Shield, title: "Criminal Defense", description: "Strong defense against criminal charges and investigations." },
    { icon: Lightbulb, title: "Strategic Advisory", description: "Legal insights to support your business strategy and growth." },
    { icon: Calculator, title: "Taxation Law", description: "Expert guidance on tax compliance and dispute resolution." },
  ]

  return (
    <section id="services" className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-secondary hover:scale-105">
              <service.icon className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-base font-semibold mb-1 text-foreground">{service.title}</h3>
              <p className="text-xs text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services