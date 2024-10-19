import React from "react"
import { Scale, Users, BookOpen, Award, Briefcase, Globe } from "lucide-react"

interface AboutBox {
  icon: React.ElementType
  title: string
  description: string
}

const aboutBoxes: AboutBox[] = [
  {
    icon: Scale,
    title: "Expert Advice",
    description: "Providing top-notch legal counsel tailored to your needs."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success and satisfaction are our top priorities."
  },
  {
    icon: BookOpen,
    title: "Extensive Knowledge",
    description: "Staying updated with the latest legal developments."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "A history of successful cases and satisfied clients."
  },
  {
    icon: Briefcase,
    title: "Diverse Expertise",
    description: "Comprehensive legal services across multiple practice areas."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International legal insights for a connected world."
  }
]

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              MIG Lawyers & Advisors is a leading law firm dedicated to providing expert legal solutions to individuals and businesses. With years of experience and a team of skilled attorneys, we are committed to delivering personalized and effective legal representation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our firm specializes in various areas of law, including corporate law, intellectual property, real estate, and litigation. We pride ourselves on our client-focused approach and our ability to navigate complex legal challenges.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {aboutBoxes.map((box, index) => (
              <div 
                key={index} 
                className="bg-secondary/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-secondary/20 group"
              >
                <box.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-sm font-semibold mb-1 text-foreground">{box.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About