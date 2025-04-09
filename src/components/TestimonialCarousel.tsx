
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  type: 'student' | 'college';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'BBA Graduate',
    quote: 'GRV guided me to the perfect college for my BBA. Their counseling was personalized and they made the admission process smooth!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    type: 'student'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    role: 'MBA Student',
    quote: 'I was confused about which MBA specialization to choose. The career counselors at GRV provided clarity and helped me secure admission to a top college.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    type: 'student'
  },
  {
    id: 3,
    name: 'Dr. Aisha Khan',
    role: 'Admissions Director, Excel Business School',
    quote: 'Our partnership with GRV has been extremely beneficial. They send us students who are well-matched to our programs, resulting in better retention rates.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    type: 'college'
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    role: 'BCA Student',
    quote: 'The documentation support from GRV was incredible. They handled everything from application forms to scholarship paperwork, allowing me to focus on my studies.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    type: 'student'
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div 
      className="relative py-10" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 overflow-hidden">
          <div className="absolute top-6 left-6 text-grv-blue opacity-20">
            <Quote size={60} />
          </div>
          
          <div className="relative z-10">
            <div className="mb-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
              <div className="ml-auto">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full capitalize bg-grv-blue-light bg-opacity-20 text-grv-blue">
                  {testimonials[activeIndex].type}
                </span>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl italic text-gray-700 mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-grv-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
