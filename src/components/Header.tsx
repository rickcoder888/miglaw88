import React from 'react';
import { Scale, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { useTheme } from "@/components/theme-provider";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-background'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center flex-shrink-0" onClick={() => scrollToSection('home')}>
              <Scale className="h-8 w-8 text-foreground" />
              <span className="ml-2 text-xl font-bold text-foreground">MIG Lawyers & Advisors</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-foreground hover:text-foreground/80 font-semibold"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
            <Button variant="ghost" onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          <MobileMenu scrollToSection={scrollToSection} />
        </div>
      </nav>
    </header>
  );
};

export default Header;