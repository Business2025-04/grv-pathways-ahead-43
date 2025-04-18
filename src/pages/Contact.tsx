import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);
        
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-grv-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help you with any questions about our educational guidance services.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about our services or need personalized guidance? Reach out to us through any of the following channels or fill out the form.
              </p>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 rounded-full bg-grv-blue-light bg-opacity-20 flex items-center justify-center text-grv-blue flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <p className="text-gray-700">+91 9074565694</p>
                      <p className="text-gray-700">+91 9188357614</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 rounded-full bg-grv-blue-light bg-opacity-20 flex items-center justify-center text-grv-blue flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <p className="text-gray-700">grandroyalvistara3@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 rounded-full bg-grv-blue-light bg-opacity-20 flex items-center justify-center text-grv-blue flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-700">
                        123 Education Lane<br />
                        Koramangala, Bangalore<br />
                        Karnataka, India - 560034
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Office Hours</h3>
                <p className="text-gray-700">Monday to Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
            
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-grv-blue hover:bg-grv-blue-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2">●</span> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Are your counseling services free?</h3>
                <p className="text-gray-700">
                  Yes, all our initial counseling sessions are completely free with no hidden charges.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How do you earn if your services are free?</h3>
                <p className="text-gray-700">
                  We have partnerships with colleges who pay us when students enroll through our services.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Do you help with scholarship applications?</h3>
                <p className="text-gray-700">
                  Yes, we provide assistance with identifying and applying for relevant scholarships.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How long does the admission process take?</h3>
                <p className="text-gray-700">
                  The timeline varies by college, but with our assistance, the process typically takes 2-4 weeks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
