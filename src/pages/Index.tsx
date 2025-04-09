
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { PhoneCall, Mail, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  const popularCourses = [
    { title: "BBA", desc: "Bachelor of Business Administration", duration: "3 Years" },
    { title: "MBA", desc: "Master of Business Administration", duration: "2 Years" },
    { title: "BCom", desc: "Bachelor of Commerce", duration: "3 Years" },
    { title: "BCA", desc: "Bachelor of Computer Applications", duration: "3 Years" },
    { title: "MCA", desc: "Master of Computer Applications", duration: "2 Years" },
    { title: "BTech", desc: "Bachelor of Technology", duration: "4 Years" },
    { title: "MTech", desc: "Master of Technology", duration: "2 Years" },
    { title: "BHM", desc: "Bachelor of Hotel Management", duration: "3 Years" }
  ];

  const testimonials = [
    { 
      name: "Priya Sharma", 
      content: "GRV's counselors helped me find the perfect MBA program. Their guidance was invaluable throughout the admission process.",
      college: "IBS Business School" 
    },
    { 
      name: "Rahul Khanna", 
      content: "I was confused about which course to choose after 12th. GRV helped me understand my options and secure admission in a top college.",
      college: "Symbiosis College" 
    },
    { 
      name: "Aisha Patel", 
      content: "The personal attention and detailed guidance from GRV counselors made my college application journey stress-free.",
      college: "Christ University" 
    },
    { 
      name: "Vikram Singh", 
      content: "Thanks to GRV, I got admission in my dream engineering college with a scholarship. Their network of partner colleges is impressive.",
      college: "PES University" 
    }
  ];

  const partnerColleges = [
    "Symbiosis University", "Christ University", "IBS Business School", 
    "Jain University", "PES University", "Manipal University", 
    "NMIMS", "SRM University", "Amity University"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Future Starts Here</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Expert guidance for your educational journey. Find the right college, course, and career path with GRV Educational Consultancy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Book Free Counseling
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Explore Colleges
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About GRV Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">About GRV Educational Consultancy</h2>
            <Separator className="mx-auto w-24 bg-primary" />
            <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
              GRV helps students make informed decisions about their education and future. 
              We provide free counseling and connect you with the best colleges that match your goals and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Free Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personalized guidance from our expert counselors at no cost.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">College Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We connect you with colleges that align with your career goals and preferences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl text-accent-foreground">Application Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete assistance with admission applications and documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.desc}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                  <Badge variant="outline">{course.duration}</Badge>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Colleges */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Colleges</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {partnerColleges.map((college, index) => (
              <Badge key={index} variant="secondary" className="text-base py-2 px-4 font-normal">
                {college}
              </Badge>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="mt-4">
              View All Partner Colleges <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-t-4 border-t-primary">
                      <CardContent className="pt-6">
                        <p className="mb-4 italic text-muted-foreground">"{testimonial.content}"</p>
                        <div className="flex flex-col">
                          <strong className="text-foreground">{testimonial.name}</strong>
                          <span className="text-sm text-muted-foreground">{testimonial.college}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors. We'll help you navigate
            the admission process and find the perfect educational path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Book Free Counseling</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <PhoneCall className="mr-2 h-5 w-5 text-primary" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+91 9876543210</p>
                <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <Mail className="mr-2 h-5 w-5 text-primary" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@grvconsultancy.com</p>
                <p className="text-muted-foreground">support@grvconsultancy.com</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="mr-2 h-5 w-5 text-primary" /> Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">123 Education Street</p>
                <p className="text-muted-foreground">Bangalore, Karnataka 560001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">GRV Educational</h3>
              <p className="text-muted-foreground mb-4">Your trusted partner for educational guidance since 2010.</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">Home</Button></li>
                <li><Button variant="link" className="p-0 h-auto">About Us</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Services</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Colleges</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Popular Courses</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">MBA</Button></li>
                <li><Button variant="link" className="p-0 h-auto">BBA</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Engineering</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Medical</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">FB</Button>
                <Button variant="outline" size="icon" className="rounded-full">IN</Button>
                <Button variant="outline" size="icon" className="rounded-full">TW</Button>
                <Button variant="outline" size="icon" className="rounded-full">YT</Button>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">© 2023 GRV Educational Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-500 hover:bg-green-600 rounded-full h-14 w-14 shadow-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 7a5 5 0 0 1 8 0"></path>
            <path d="M17 7v3"></path>
            <path d="M14 7v3"></path>
            <path d="M10 11v2a2 2 0 0 0 2 2h2"></path>
            <path d="M19 11v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Index;
