
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

const Index = () => {
  const popularCourses = [
    { title: "BBA", desc: "Bachelor of Business Administration", duration: "3 Years" },
    { title: "MBA", desc: "Master of Business Administration", duration: "2 Years" },
    { title: "BCom", desc: "Bachelor of Commerce", duration: "3 Years" },
    { title: "BCA", desc: "Bachelor of Computer Applications", duration: "3 Years" }
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
    }
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
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Book Free Counseling
            </Button>
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

      {/* Testimonials */}
      <section className="py-16 px-6">
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="border-t-4 border-t-accent">
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
          <Button size="lg" className="bg-primary hover:bg-primary/90">Book Free Counseling</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">GRV Educational Consultancy</h3>
            <p className="text-muted-foreground mb-4">Your trusted partner for educational guidance</p>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm">About</Button>
              <Button variant="ghost" size="sm">Services</Button>
              <Button variant="ghost" size="sm">Colleges</Button>
              <Button variant="ghost" size="sm">Contact</Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">© 2025 GRV Educational Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
