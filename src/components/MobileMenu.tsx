import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const menuItems = ['Home', 'About', 'Services', 'Team', 'Contact']

  const handleItemClick = (item: string) => {
    setIsOpen(false)
    scrollToSection(item.toLowerCase())
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden text-gray-800 hover:text-gray-600">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white">
        <SheetHeader><SheetTitle className="text-gray-800">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          {menuItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="justify-start text-gray-800 hover:text-gray-600 hover:bg-gray-100"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu