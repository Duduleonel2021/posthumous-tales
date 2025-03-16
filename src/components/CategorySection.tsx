
import BiographyCard, { BiographyCardProps } from "./BiographyCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  biographies: BiographyCardProps[];
}

const CategorySection = ({ title, categorySlug, biographies }: CategorySectionProps) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-posthumous-navy">{title}</h2>
        <Link 
          to={`/category/${categorySlug}`}
          className="flex items-center text-posthumous-navy hover:text-posthumous-gold"
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
