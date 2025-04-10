
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, image }) => {
  return (
    <Card className="card-hover overflow-hidden">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={`${title} course`} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="w-14 h-14 bg-grv-blue-light bg-opacity-20 rounded-lg flex items-center justify-center text-grv-blue mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/colleges" className="inline-flex items-center text-grv-blue hover:text-grv-blue-dark transition-colors font-medium">
          Explore Colleges <ArrowRight size={16} className="ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
