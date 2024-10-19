import React from "react"
import { Scale, Briefcase, Gavel, Users, FileText, Calculator } from 'lucide-react'

interface TeamMember {
  role: string
  icon: React.ElementType
}

const teamMembers: TeamMember[] = [
  { role: "Senior Lawyers", icon: Scale },
  { role: "Strategic Advisors", icon: Briefcase },
  { role: "Litigation Experts", icon: Gavel },
  { role: "Mediators", icon: Users },
  { role: "Barrister Counsel", icon: FileText },
  { role: "Accountant Consultants", icon: Calculator },
]

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Specialist Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full bg-secondary/10 group-hover:bg-transparent transition-colors duration-300">
                <div className="relative w-16 h-16">
                  <member.icon className="w-16 h-16 text-primary absolute top-0 left-0 transition-all duration-300 group-hover:opacity-0" />
                  <member.icon className="w-16 h-16 text-white absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-foreground group-hover:text-white text-center font-semibold mt-4 transition-colors duration-300">{member.role}</p>
              </div>
              <div className="absolute inset-0 bg-white/20 filter blur-sm scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team