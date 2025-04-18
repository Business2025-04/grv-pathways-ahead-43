import React from 'react';
import { Link } from 'react-router-dom';
import { Book, BookOpen, GraduationCap, Building, Users, Stethoscope, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import PartnerColleges from '@/components/PartnerColleges';

const Index = () => {
  const courses = [
    {
      title: "MBBS",
      description: "Bachelor of Medicine and Bachelor of Surgery for aspiring doctors.",
      icon: <Stethoscope size={28} />,
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MBA",
      description: "Master's in Business Administration for advancing your management career.",
      icon: <GraduationCap size={28} />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "BSc Nursing",
      description: "Bachelor of Science in Nursing for healthcare professionals.",
      icon: <Heart size={28} />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "BCA",
      description: "Bachelor of Computer Applications for IT and software careers.",
      icon: <BookOpen size={28} />,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-grv-blue to-grv-blue-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Your Future Starts Here
            </h1>
            <p className="text-xl mb-8 text-grv-blue-light animate-slide-up">
              Personalized educational guidance to help you find the right college and build a successful career.
            </p>
            <Button className="bg-grv-green text-white hover:bg-grv-green-dark px-8 py-6 text-lg rounded-md shadow-lg" asChild>
              <Link to="/contact">Book Free Counseling</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* About GRV Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="GRV Counseling" className="rounded-xl shadow-lg w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About GRV Pathways Ahead</h2>
              <p className="text-lg text-gray-700 mb-6">
                GRV is a leading educational consultancy helping students navigate the complex world of higher education. 
                We provide expert guidance on college selection, admission processes, and career planning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-grv-blue-light bg-opacity-20 flex items-center justify-center text-grv-blue flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Personalized Approach</h3>
                    <p className="text-gray-600">We understand each student's unique needs and aspirations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-grv-blue-light bg-opacity-20 flex items-center justify-center text-grv-blue flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Expert Counselors</h3>
                    <p className="text-gray-600">Our team consists of experienced education professionals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-grv-blue-light bg-opacity-20 flex items-center justify-center text-grv-blue flex-shrink-0">
                    <Building size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Wide Network</h3>
                    <p className="text-gray-600">Partnerships with top colleges across major cities in India.</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-grv-blue hover:bg-grv-blue-dark" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most in-demand courses that can jumpstart your career. We'll help you find the perfect college for your chosen path.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard 
                key={index}
                title={course.title}
                description={course.description}
                icon={course.icon}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Partner Colleges */}
      <PartnerColleges />
      
      {/* CTA Section */}
      <section className="py-16 bg-grv-green text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Talk to our expert counselors and get personalized guidance for your education journey. It's completely free!
          </p>
          <Button className="bg-white text-grv-green hover:bg-gray-100 transition-colors text-lg px-8 py-6" asChild>
            <Link to="/contact">Book Your Free Counseling Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
