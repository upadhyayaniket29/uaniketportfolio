import { cn } from "@/lib/utils";
import { Menu, X, Home, User, Code, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-sm" : "py-4"
      )}
    >
      <div className="container flex items-center justify-center">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden absolute left-4 p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Logo for mobile */}
        <div className="md:hidden">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Aniket </span>{" "}
              Portfolio
            </span>
          </a>
        </div>
        
        {/* Desktop navbar - centered */}
        <div className="hidden md:flex bg-background/40 backdrop-blur-md rounded-full px-6 py-2 shadow-sm border border-foreground/10">
          <a
            className="mr-6 text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Aniket </span>{" "}
              Portfolio
            </span>
          </a>
          
          <div className="flex space-x-6">
            {navItems.map((item, key) => {
              const Icon = item.icon;
              return (
                <a
                  key={key}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Mobile navbar - fullscreen */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => {
              const Icon = item.icon;
              return (
                <a
                  key={key}
                  href={item.href}
                  className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};