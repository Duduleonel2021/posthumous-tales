
import BiographyCard, { BiographyCardProps } from "./BiographyCard";
import { Link } from "react-router-dom";
import { ChevronRight, Palette, Users, Film, Music, Briefcase, BookOpen, Newspaper, Globe, GraduationCap, Flask, Shield, Heart, Shirt } from "lucide-react";

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
  "science": <Flask className="w-5 h-5" />,
  "crime": <Shield className="w-5 h-5" />,
  "health": <Heart className="w-5 h-5" />,
  "fashion": <Shirt className="w-5 h-5" />,
  "others": <div className="w-5 h-5" />
};

const CategorySection = ({ title, categorySlug, biographies }: CategorySectionProps) => {
  const icon = categoryIcons[categorySlug] || categoryIcons["others"];
  
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6 border-b border-posthumous-gold/20 pb-2">
        <div className="flex items-center">
          <div className="bg-posthumous-navy/5 p-2 rounded-full mr-3">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-posthumous-navy">{title}</h2>
        </div>
        <Link 
          to={`/category/${categorySlug}`}
          className="flex items-center text-posthumous-navy hover:text-posthumous-gold transition-colors"
        >
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {biographies.slice(0, 4).map((biography) => (
          <BiographyCard key={biography.id} {...biography} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
