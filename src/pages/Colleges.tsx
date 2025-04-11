
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Award, Building, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface College {
  id: number;
  name: string;
  city: string;
  state: string;
  features: string[];
  courses: string[];
  image: string;
}

const Colleges = () => {
  // Sample data with more colleges
  const colleges: College[] = [
    // Bangalore Colleges
    {
      id: 1,
      name: "Excel Business School",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Direct Admission", "Low Fees", "Good Placements", "Hostel Available"],
      courses: ["BBA", "MBA", "BCom"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Summit Management Academy",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Low Fees", "Good Placements", "AICTE Approved"],
      courses: ["BBA", "MBA", "BHM"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      name: "Raja Rajeswari Medical College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Medical Facilities", "Experienced Faculty", "Hostel Available"],
      courses: ["MBBS", "MD", "MS"],
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      name: "BGS & SJP Medical College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Research Facilities", "Modern Labs", "Hostel Available"],
      courses: ["MBBS", "MD", "MS", "BDS"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      name: "St. Johns Medical College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Premier Institution", "Hospital Attached", "International Recognition"],
      courses: ["MBBS", "MD", "MS", "Nursing"],
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      name: "Vydehi Medical College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Modern Infrastructure", "Specialization Options", "Hostel Available"],
      courses: ["MBBS", "MD", "MS", "Allied Health Sciences"],
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 7,
      name: "Dr. Ambedkar Medical College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Affordable Fees", "Experienced Faculty", "Good Infrastructure"],
      courses: ["MBBS", "MD", "MS"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 8,
      name: "M S Ramaiah Medical College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["High-Tech Facilities", "Research Opportunities", "Hospital Training"],
      courses: ["MBBS", "MD", "MS", "BDS", "MDS"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 9,
      name: "Surya Group of Institutions",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Industry Partnerships", "Practical Training", "Campus Placements"],
      courses: ["BSc", "MSc", "BBA", "MBA"],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 10,
      name: "Sea College",
      city: "Bangalore",
      state: "Karnataka",
      features: ["Modern Campus", "Experienced Faculty", "Industry Exposure"],
      courses: ["BCA", "MCA", "BBA", "MBA"],
      image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    
    // Mangaluru (Mangalapuram) Colleges
    {
      id: 11,
      name: "AJ Medical College",
      city: "Mangaluru",
      state: "Karnataka",
      features: ["Modern Infrastructure", "Experienced Faculty", "Hospital Training"],
      courses: ["MBBS", "MD", "MS"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 12,
      name: "Yenepoya Medical College",
      city: "Mangaluru",
      state: "Karnataka",
      features: ["Research Focus", "International Collaborations", "Modern Facilities"],
      courses: ["MBBS", "MD", "MS", "BDS", "PhD"],
      image: "https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 13,
      name: "KIMS Medical College",
      city: "Mangaluru",
      state: "Karnataka",
      features: ["Established Reputation", "Quality Education", "Hospital Attachment"],
      courses: ["MBBS", "MD", "MS", "Nursing"],
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 14,
      name: "Nitte University",
      city: "Mangaluru",
      state: "Karnataka",
      features: ["Multidisciplinary Programs", "Research Opportunities", "International Standards"],
      courses: ["MBBS", "MD", "MS", "Engineering", "Management"],
      image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 15,
      name: "Father Muller Medical College",
      city: "Mangaluru",
      state: "Karnataka",
      features: ["Century-old Legacy", "Value-based Education", "Clinical Exposure"],
      courses: ["MBBS", "MD", "MS", "Allied Health Sciences"],
      image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 16,
      name: "Manipal Academy of Higher Education",
      city: "Manipal",
      state: "Karnataka",
      features: ["Global Recognition", "Research Excellence", "Industry Partnerships"],
      courses: ["MBBS", "MD", "MS", "Engineering", "Management", "Communication"],
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    
    // Mysore Colleges
    {
      id: 17,
      name: "JSS Medical College",
      city: "Mysore",
      state: "Karnataka",
      features: ["Quality Education", "Research Focus", "Modern Facilities"],
      courses: ["MBBS", "MD", "MS", "BDS"],
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 18,
      name: "AIMS Medical College",
      city: "Mysore",
      state: "Karnataka",
      features: ["Practical Training", "Affordable Fees", "Experienced Faculty"],
      courses: ["MBBS", "BDS", "Nursing", "Physiotherapy"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 19,
      name: "BGS Apollo Medical College",
      city: "Mysore",
      state: "Karnataka",
      features: ["Industry Collaboration", "Modern Infrastructure", "Hospital Training"],
      courses: ["MBBS", "MD", "MS", "Allied Health Sciences"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    
    // Pune and Hyderabad colleges from the original list
    {
      id: 20,
      name: "Global Technology Institute",
      city: "Pune",
      state: "Maharashtra",
      features: ["Direct Admission", "Good Placements", "Lab Facilities", "Hostel Available"],
      courses: ["BCA", "MCA", "B.Tech"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 21,
      name: "Heritage College of Commerce",
      city: "Pune",
      state: "Maharashtra",
      features: ["Low Fees", "Internship Support", "Good Campus"],
      courses: ["BCom", "MCom", "BBA"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 22,
      name: "Innovative Science University",
      city: "Hyderabad",
      state: "Telangana",
      features: ["Research Facilities", "Good Placements", "Hostel Available", "Scholarships"],
      courses: ["B.Tech", "M.Tech", "BCA", "MCA"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 23,
      name: "Central Institute of Arts",
      city: "Hyderabad",
      state: "Telangana",
      features: ["Creative Studios", "Exhibitions", "Renowned Faculty"],
      courses: ["BFA", "MFA", "Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Get unique cities from the colleges array
  const cities = Array.from(new Set(colleges.map(college => college.city)));
  
  // Filter colleges based on search term and active tab
  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = 
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTab = activeTab === "all" || college.city.toLowerCase() === activeTab.toLowerCase();
    
    return matchesSearch && matchesTab;
  });

  // Group colleges by city
  const collegesByCity: Record<string, College[]> = {};
  
  filteredColleges.forEach((college) => {
    if (!collegesByCity[college.city]) {
      collegesByCity[college.city] = [];
    }
    collegesByCity[college.city].push(college);
  });
  
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-grv-blue py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Colleges We Work With</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our network of partner institutions across major cities in India.
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-10 bg-white shadow-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by college name or course..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-grv-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5 w-full md:w-auto min-w-[500px]">
                <TabsTrigger value="all">All Cities</TabsTrigger>
                {cities.slice(0, 4).map((city) => (
                  <TabsTrigger key={city} value={city.toLowerCase()}>{city}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Colleges List */}
      <section className="py-16">
        <div className="container-custom">
          {activeTab === "all" ? (
            // Display colleges grouped by city when "All Cities" tab is active
            Object.keys(collegesByCity).map((city) => (
              <div key={city} className="mb-12">
                <div className="flex items-center mb-6">
                  <MapPin className="text-grv-blue mr-2" size={24} />
                  <h2 className="text-2xl font-bold">{city}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collegesByCity[city].map((college) => (
                    <CollegeCard key={college.id} college={college} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Display filtered colleges when a specific city tab is active
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )}
          
          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No colleges match your search criteria.</p>
              <Button onClick={() => {setSearchTerm(""); setActiveTab("all");}} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* College Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Colleges by Location</h2>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>City</TableHead>
                <TableHead>Number of Colleges</TableHead>
                <TableHead>Popular Courses</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(collegesByCity).map((city) => {
                // Get all courses from colleges in this city
                const allCourses = collegesByCity[city].flatMap(college => college.courses);
                // Count occurrences of each course
                const courseCounts: Record<string, number> = {};
                allCourses.forEach(course => {
                  courseCounts[course] = (courseCounts[course] || 0) + 1;
                });
                // Sort courses by frequency
                const popularCourses = Object.keys(courseCounts)
                  .sort((a, b) => courseCounts[b] - courseCounts[a])
                  .slice(0, 3);
                
                return (
                  <TableRow key={city}>
                    <TableCell className="font-medium">{city}</TableCell>
                    <TableCell>{collegesByCity[city].length}</TableCell>
                    <TableCell>{popularCourses.join(", ")}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-grv-green text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Looking for a Specific College?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We have partnerships with many more colleges across India. Contact us to explore more options.
          </p>
          <Button className="bg-white text-grv-green hover:bg-gray-100 transition-colors" asChild>
            <Link to="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

// College Card Component
const CollegeCard = ({ college }: { college: College }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={college.image} alt={college.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-bold text-lg">{college.name}</h3>
          <div className="flex items-center text-white text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{college.city}, {college.state}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <BookOpen size={16} className="text-grv-blue mr-2" />
            <h4 className="font-medium">Courses</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {college.courses.map((course, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {course}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <Award size={16} className="text-grv-blue mr-2" />
            <h4 className="font-medium">Features</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {college.features.map((feature, index) => (
              <span key={index} className="bg-grv-blue-light bg-opacity-10 text-grv-blue text-xs px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <Button className="w-full mt-4 bg-grv-blue hover:bg-grv-blue-dark" asChild>
          <Link to="/contact">Get Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Colleges;
