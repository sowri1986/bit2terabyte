import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Shield } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'My Career', href: '/my-career' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#') && location.pathname === '/') {
      // If we're already on the homepage and the link is to a section
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    } else {
      return location.pathname.startsWith(href);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
      isScrolled ? "glass-card backdrop-blur-lg bg-background/70" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 select-none">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Learn, Build & Scale</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => navigateTo(item.href)}
              className={cn(
                "text-sm font-medium py-1 transition-colors",
                isActive(item.href)
                  ? "text-primary link-underline"
                  : "text-foreground/80 hover:text-foreground link-underline"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 p-4 transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => navigateTo(item.href)}
            className={cn(
              "text-xl font-medium transition-colors duration-300",
              isActive(item.href) ? "text-primary" : "hover:text-primary",
              isMobileMenuOpen ? "animate-slide-in" : "",
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
