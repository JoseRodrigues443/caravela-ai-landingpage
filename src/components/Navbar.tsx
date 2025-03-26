
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Caravela AI</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-caravela-teal transition-colors">
              {t.nav.features}
            </a>
            <a href="#integrations" className="text-sm font-medium hover:text-caravela-teal transition-colors">
              {t.nav.integrations}
            </a>
            <a href="#" className="text-sm font-medium hover:text-caravela-teal transition-colors">
              {t.nav.about}
            </a>

            <div className="flex items-center space-x-2 ml-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } glass shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-caravela-teal transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.features}
          </a>
          <a
            href="#integrations"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-caravela-teal transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.integrations}
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-caravela-teal transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.about}
          </a>
          <div className="px-3 py-2">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
