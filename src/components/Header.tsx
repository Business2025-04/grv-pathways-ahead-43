import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Colleges', path: '/colleges' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-grv-blue font-medium' : 'text-foreground hover:text-grv-blue';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/97fd8286-7d49-41ed-90be-8e357795265c.png" 
            alt="Grand Royal Vistara Logo" 
            className="h-12 md:h-14" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`${isActive(item.path)} transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-grv-green hover:bg-grv-green-dark" asChild>
            <Link to="/contact">Book Free Counseling</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col pt-2 pb-4 space-y-3 px-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`py-2 px-4 rounded-md ${isActive(item.path)}`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-grv-green hover:bg-grv-green-dark mt-2 w-full" asChild>
              <Link to="/contact">Book Free Counseling</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
