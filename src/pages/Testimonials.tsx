
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  college?: string;
  quote: string;
  image: string;
  rating: number;
  type: 'student' | 'college';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "BBA Student",
    college: "Excel Business School",
    quote: "I was confused about which college to choose for my BBA. The counselors at GRV took the time to understand my interests and career goals, then recommended the perfect college. Their guidance throughout the admission process was invaluable. I'm now pursuing my dream course!",
    image: "/placeholder.svg",
    rating: 5,
    type: "student"
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "MBA Graduate",
    college: "Summit Management Academy",
    quote: "After completing my graduation, I wanted to pursue an MBA but was overwhelmed by the options. GRV helped me narrow down my choices based on my specialization interests and budget. Their documentation support made the application process stress-free. Highly recommend their services!",
    image: "/placeholder.svg",
    rating: 5,
    type: "student"
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "BCom Student",
    college: "Heritage College of Commerce",
    quote: "The team at GRV was incredibly helpful and responsive. They provided detailed information about different colleges, helped me compare fee structures, and even arranged a campus visit. Thanks to them, I found a college that perfectly matches my requirements.",
    image: "/placeholder.svg",
    rating: 4,
    type: "student"
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "BCA Student",
    college: "Global Technology Institute",
    quote: "I'm from a small town and had limited knowledge about colleges in big cities. GRV's counselors patiently explained all my options, helped with hostel arrangements, and ensured a smooth transition. They truly care about students' future!",
    image: "/placeholder.svg",
    rating: 5,
    type: "student"
  },
  {
    id: 5,
    name: "Dr. Aisha Khan",
    role: "Admissions Director",
    college: "Excel Business School",
    quote: "Our partnership with GRV has been extremely beneficial. They have a thorough understanding of our admission criteria and send us well-matched candidates. Their professional approach and regular communication make the collaboration smooth and effective.",
    image: "/placeholder.svg",
    rating: 5,
    type: "college"
  },
  {
    id: 6,
    name: "Prof. Suresh Kumar",
    role: "Dean of Admissions",
    college: "Global Technology Institute",
    quote: "GRV consistently refers students who are not only academically qualified but also well-suited to our institution's culture. Their detailed counseling ensures students have realistic expectations, leading to higher satisfaction and retention rates.",
    image: "/placeholder.svg",
    rating: 4,
    type: "college"
  },
  {
    id: 7,
    name: "Meera Rajput",
    role: "Admissions Coordinator",
    college: "Heritage College of Commerce",
    quote: "Working with GRV has streamlined our admission process significantly. They handle preliminary screening and documentation efficiently, making our job easier. Their follow-up support for students is commendable.",
    image: "/placeholder.svg",
    rating: 5,
    type: "college"
  }
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'student' | 'college'>('all');
  
  const filteredTestimonials = activeTab === 'all' 
    ? testimonials
    : testimonials.filter(testimonial => testimonial.type === activeTab);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-grv-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What People Say About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from our students and partner colleges about their experience working with GRV.
          </p>
        </div>
      </section>
      
      {/* Testimonials Filter */}
      <section className="py-10">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full max-w-md mx-auto" onValueChange={(value) => setActiveTab(value as 'all' | 'student' | 'college')}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="student">Students</TabsTrigger>
              <TabsTrigger value="college">Colleges</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="py-10">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-grv-blue to-grv-blue-dark text-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-4xl text-grv-blue-light mb-6">
                  <Quote />
                </div>
                <blockquote className="text-xl md:text-2xl mb-6 italic">
                  "GRV's guidance was the turning point in my educational journey. Their personalized approach and genuine care made all the difference."
                </blockquote>
                <div>
                  <p className="font-medium text-lg">Aditya Verma</p>
                  <p className="text-grv-blue-light">MBA Student, Summit Management Academy</p>
                </div>
              </div>
              <div className="hidden md:block bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No testimonials found.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Video Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our students share their experience with GRV Pathways Ahead.
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
            <div className="flex items-center justify-center h-full bg-gray-800 text-white">
              <p className="text-lg">Video Testimonial Placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-grv-green text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied students who found their ideal college through GRV.
          </p>
          <Button className="bg-white text-grv-green hover:bg-gray-100 transition-colors">
            Book Free Counseling
          </Button>
        </div>
      </section>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              {testimonial.college && (
                <p className="text-sm text-grv-blue">{testimonial.college}</p>
              )}
            </div>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full capitalize bg-grv-blue-light bg-opacity-20 text-grv-blue">
            {testimonial.type}
          </span>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        <blockquote className="text-gray-700 italic mb-4 flex-grow">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
