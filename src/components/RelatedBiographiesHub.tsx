
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BiographyCard from "./BiographyCard";

interface RelatedBiography {
  id: string;
  name: string;
  image: string;
  birthYear: number;
  deathYear: number;
  category: string;
  summary: string;
}

interface RelatedBiographiesHubProps {
  categoryName: string;
  relatedBiographies: RelatedBiography[];
}

const RelatedBiographiesHub = ({
  categoryName,
  relatedBiographies
}: RelatedBiographiesHubProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // Only show 3 biographies initially
  const displayedBiographies = showAll ? relatedBiographies : relatedBiographies.slice(0, 3);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all hover:shadow-xl mb-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-playfair font-semibold text-posthumous-navy border-b-2 border-posthumous-gold/30 pb-1">
            More in {categoryName}
          </h3>
        </div>
        <Link to={`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`} className="text-posthumous-gold hover:text-posthumous-darkgold transition-colors flex items-center gap-1 font-medium">
          View Hub <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBiographies.map((biography) => (
          <BiographyCard
            key={biography.id}
            id={biography.id}
            name={biography.name}
            image={biography.image}
            birthYear={biography.birthYear}
            deathYear={biography.deathYear}
            category={biography.category}
            summary={biography.summary}
          />
        ))}
      </div>
      
      {relatedBiographies.length > 3 && (
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="border-posthumous-navy/10 hover:bg-posthumous-gold hover:text-white transition-colors"
          >
            {showAll ? "Show Less" : `See All (${relatedBiographies.length})`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default RelatedBiographiesHub;
