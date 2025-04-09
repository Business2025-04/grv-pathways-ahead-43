
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grv-blue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GRV Pathways Ahead</h3>
            <p className="mb-4 text-gray-200">
              Helping students find their perfect college match with personalized guidance and support.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-grv-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-grv-green-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-grv-green-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-grv-green-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-grv-green-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-grv-green-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-grv-green-light transition-colors">Services</Link></li>
              <li><Link to="/colleges" className="hover:text-grv-green-light transition-colors">Colleges</Link></li>
              <li><Link to="/testimonials" className="hover:text-grv-green-light transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-grv-green-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/colleges" className="hover:text-grv-green-light transition-colors">BBA</Link></li>
              <li><Link to="/colleges" className="hover:text-grv-green-light transition-colors">MBA</Link></li>
              <li><Link to="/colleges" className="hover:text-grv-green-light transition-colors">BCom</Link></li>
              <li><Link to="/colleges" className="hover:text-grv-green-light transition-colors">BCA</Link></li>
              <li><Link to="/colleges" className="hover:text-grv-green-light transition-colors">Engineering</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>info@grvpathways.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Education Lane, Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} GRV Pathways Ahead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
