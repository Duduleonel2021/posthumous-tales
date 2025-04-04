
import React from "react";
import BiographyCard, { BiographyCardProps } from "./BiographyCard";
import { Link } from "react-router-dom";
import { ChevronRight, Palette, Users, Film, Music, Briefcase, BookOpen, Newspaper, Globe, GraduationCap, Beaker, Shield, Heart, Shirt } from "lucide-react";

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  biographies: BiographyCardProps[];
}

const categoryIcons: Record<string, JSX.Element> = {
  "arts": <Palette className="w-5 h-5" />,
  "politics": <Users className="w-5 h-5" />,
  "cinema-tv": <Film className="w-5 h-5" />,
  "music": <Music className="w-5 h-5" />,
  "business": <Briefcase className="w-5 h-5" />,
  "literature": <BookOpen className="w-5 h-5" />,
  "journalism": <Newspaper className="w-5 h-5" />,
  "internet": <Globe className="w-5 h-5" />,
  "education": <GraduationCap className="w-5 h-5" />,
  "science": <Beaker className="w-5 h-5" />,
  "crime": <Shield className="w-5 h-5" />,
  "health": <Heart className="w-5 h-5" />,
  "fashion": <Shirt className="w-5 h-5" />,
  "others": <div className="w-5 h-5" />
};

const CategorySection = ({ title, categorySlug, biographies }: CategorySectionProps) => {
  const icon = categoryIcons[categorySlug] || categoryIcons["others"];
  
  return (
    <section className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-posthumous-navy flex items-center">
          <span className="inline-block w-12 h-1 bg-posthumous-gold mr-3 hidden md:inline-block"></span>
          {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 text-posthumous-gold mr-3 md:hidden" })}
          {title}
        </h2>
        <Link 
          to={`/category/${categorySlug}`}
          className="flex items-center text-posthumous-navy hover:text-posthumous-gold transition-colors duration-300 group font-medium"
        >
          <span className="mr-1">View All</span> 
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {biographies.slice(0, 4).map((biography, index) => (
          <div 
            key={biography.id} 
            className="transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg opacity-0"
            style={{ 
              animationDelay: `${index * 150}ms`,
              animation: 'fadeIn 0.5s ease-out forwards'
            }}
          >
            <BiographyCard {...biography} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
