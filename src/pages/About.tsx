import React from 'react';
import { Award, CheckCircle, Users, BookOpen, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: <Users size={32} />,
      title: "Student-Centered",
      description: "We put students' needs and goals at the center of everything we do."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Excellence",
      description: "We strive for excellence in our guidance and support services."
    },
    {
      icon: <Award size={32} />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in our operations and advice."
    },
    {
      icon: <Heart size={32} />,
      title: "Compassion",
      description: "We approach each student's journey with empathy and understanding."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Knowledge",
      description: "We stay updated with the latest in education trends and opportunities."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Accountability",
      description: "We take responsibility for the guidance we provide and its outcomes."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-grv-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About GRV Pathways Ahead</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are dedicated to helping students find their perfect educational path and build successful careers.
          </p>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                At GRV Pathways Ahead, our mission is to empower students to make informed decisions about their educational journey and career path. 
                We believe that every student deserves personalized guidance that aligns with their unique talents, interests, and aspirations.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We strive to build bridges between students and quality educational institutions, creating opportunities for growth and success. 
                Our goal is to simplify the complex process of college selection and admission, making quality education accessible to all.
              </p>
              <Button className="bg-grv-blue hover:bg-grv-blue-dark">Book Free Counseling</Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-grv-green-light rounded-lg z-0"></div>
              <img src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="GRV Mission" className="rounded-lg shadow-lg relative z-10 w-full" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-grv-blue-light rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Us Unique */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes GRV Unique</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach to educational guidance sets us apart and ensures the best outcomes for our students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-grv-blue-light bg-opacity-20 rounded-full flex items-center justify-center text-grv-blue mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose GRV */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GRV</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive support throughout your educational journey.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Reasons to partner with us:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Free expert counseling with no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Access to a wide network of top colleges across India</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Personalized course and college recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Complete assistance with application and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Regular follow-ups during the admission process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Post-admission support and career guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-grv-green mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>Special scholarships and fee concessions through our partner network</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-grv-green hover:bg-grv-green-dark">Contact Us Today</Button>
              </div>
              <div className="bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center min-h-[400px]"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-grv-blue text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Start Your Educational Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our experts and take the first step toward a successful future.
          </p>
          <Button className="bg-white text-grv-blue hover:bg-gray-100 transition-colors">
            Book Free Counseling
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
