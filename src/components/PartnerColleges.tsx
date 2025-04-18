import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PartnerColleges = () => {
  const partners = [
    "Apollo Medical College",
    "AIMS Medical College",
    "Sea College",
    "KIMS Medical College",
    "Manipal University",
    "AJ Medical College",
    "Mangalore Nursing College",
    "Sreenivas Medical College"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Partner Colleges</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with top institutions across India to provide students with quality education options.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-grv-blue transition-colors">
              <CardContent className="flex items-center justify-center min-h-[100px] p-4">
                <span className="font-medium text-center">{partner}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerColleges;
