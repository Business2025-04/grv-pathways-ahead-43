
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, PhoneCall, Compass, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Services = () => {
  const mainServices = [
    {
      icon: <Search size={36} />,
      title: "College Selection Guidance",
      description: "We help you find the perfect college based on your career goals, academic background, and preferences.",
      details: [
        "Personalized college recommendations",
        "Information on college rankings and reputation",
        "Insights on campus facilities and environment",
        "Guidance on course curriculum and specializations",
        "Details on faculty expertise and teaching methodology"
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <FileText size={36} />,
      title: "Application & Documentation Help",
      description: "We assist with the entire application process, ensuring all paperwork is complete and accurate.",
      details: [
        "Application form filling assistance",
        "Document verification and organization",
        "Essay and statement of purpose guidance",
        "Scholarship application support",
        "Portfolio preparation for specific courses"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <PhoneCall size={36} />,
      title: "Admission Follow-up",
      description: "We stay in touch with colleges to track your application and ensure a smooth admission process.",
      details: [
        "Regular status updates on your application",
        "Communication with college admission offices",
        "Reminders for important dates and deadlines",
        "Assistance with entrance exam preparations",
        "Interview preparation guidance"
      ],
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Compass size={36} />,
      title: "Career Counseling",
      description: "Our experts provide insights on career paths, industry trends, and skill requirements.",
      details: [
        "Career aptitude assessment",
        "Industry insights and job prospect information",
        "Guidance on required skills and certifications",
        "Internship and placement opportunities",
        "Long-term career planning"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const additionalServices = [
    {
      icon: <BookOpen size={24} />,
      title: "Entrance Exam Guidance",
      description: "Information and preparation tips for various entrance exams required for admissions."
    },
    {
      icon: <Award size={24} />,
      title: "Scholarship Assistance",
      description: "Help identifying and applying for scholarships to make education more affordable."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-grv-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive educational guidance to help you make informed decisions for your future.
          </p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Help You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive services cover every aspect of the college selection and admission process.
            </p>
          </div>
          
          <div className="grid gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="w-20 h-20 bg-grv-blue-light bg-opacity-20 rounded-lg flex items-center justify-center text-grv-blue mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-grv-green mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond the basics to ensure you have all the support you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-grv-blue-light bg-opacity-20 rounded-full flex items-center justify-center text-grv-blue mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              All our services are customized to meet individual student needs and goals.
            </p>
            <Button className="bg-grv-blue hover:bg-grv-blue-dark" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, streamlined approach to finding your perfect educational path.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-grv-blue-light transform -translate-x-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 relative z-10">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="md:hidden w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center mb-4">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                  <p className="text-gray-700">
                    Book a free counseling session where we understand your goals, preferences, and academic background.
                  </p>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center -ml-6">
                    <span className="font-bold">1</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center -mr-6">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center mb-4">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Recommendations</h3>
                  <p className="text-gray-700">
                    Our experts research and provide you with a tailored list of colleges and courses matching your profile.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="md:hidden w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Application Assistance</h3>
                  <p className="text-gray-700">
                    We help you complete applications for your chosen colleges, ensuring all documentation is perfect.
                  </p>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center -ml-6">
                    <span className="font-bold">3</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center -mr-6">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center mb-4">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Admission Follow-up</h3>
                  <p className="text-gray-700">
                    We communicate with colleges, track your application status, and keep you updated throughout the process.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="md:hidden w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center mb-4">
                    <span className="font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Successful Admission & Beyond</h3>
                  <p className="text-gray-700">
                    Once you're admitted, we continue to provide support for a smooth transition to college life.
                  </p>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-grv-blue text-white flex items-center justify-center -ml-6">
                    <span className="font-bold">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-grv-green text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Educational Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our experts and take the first step toward your dream career.
          </p>
          <Button className="bg-white text-grv-green hover:bg-gray-100 transition-colors" asChild>
            <Link to="/contact">Book Free Counseling</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
