
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="w-14 h-14 bg-grv-cyan bg-opacity-20 rounded-lg flex items-center justify-center text-grv-cyan mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="/colleges" className="inline-flex items-center text-grv-pink hover:text-grv-pink-dark transition-colors font-medium">
          Explore Colleges <ArrowRight size={16} className="ml-1" />
        </a>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
