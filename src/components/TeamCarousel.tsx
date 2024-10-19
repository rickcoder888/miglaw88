import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scale, Briefcase, Gavel, Users, FileText, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TeamMember {
  name: string
  role: string
  icon: React.ElementType
}

const teamMembers: TeamMember[] = [
  { name: "Jane Doe", role: "Senior Lawyers", icon: Scale },
  { name: "John Smith", role: "Strategic Advisors", icon: Briefcase },
  { name: "Emily Brown", role: "Litigation Experts", icon: Gavel },
  { name: "Michael Johnson", role: "Mediators", icon: Users },
  { name: "Sarah Lee", role: "Barrister Counsel", icon: FileText },
  { name: "David Chen", role: "Accountant Consultants", icon: Calculator },
]

const TeamCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-[0_0_200px] min-w-0 px-2">
              <div className="bg-secondary/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-4 h-full flex flex-col items-center justify-center">
                <member.icon className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-sm font-semibold mb-1 text-foreground text-center">{member.name}</h3>
                <p className="text-xs text-muted-foreground text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default TeamCarousel