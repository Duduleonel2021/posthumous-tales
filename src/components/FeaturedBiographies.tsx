
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface FeaturedBiography {
  id: string;
  name: string;
  image: string;
  years: string;
  category: string;
  summary: string;
}

interface FeaturedBiographiesProps {
  biographies: FeaturedBiography[];
}

const FeaturedBiographies = ({ biographies }: FeaturedBiographiesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? biographies.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === biographies.length - 1 ? 0 : prev + 1));
  };

  if (!biographies.length) return null;

  const biography = biographies[currentIndex];

  return (
    <div className="relative overflow-hidden bg-posthumous-navy text-white rounded-lg">
      <div className="absolute inset-0">
        <img
          src={biography.image}
          alt={biography.name}
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full min-h-[400px] md:min-h-[500px]">
        <div>
          <Link
            to={`/category/${biography.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-posthumous-gold text-posthumous-navy rounded-full"
          >
            {biography.category}
          </Link>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">{biography.name}</h2>
          <p className="text-gray-300 mb-4">{biography.years}</p>
          <p className="text-lg max-w-3xl mb-6 line-clamp-3 md:line-clamp-4">
            {biography.summary}
          </p>
          <Button asChild className="bg-posthumous-gold text-posthumous-navy hover:bg-posthumous-lightgold">
            <Link to={`/biography/${biography.id}`}>Read Full Biography</Link>
          </Button>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            {biographies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-posthumous-gold" : "bg-white bg-opacity-30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              className="bg-white/10 border-white/20 hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              className="bg-white/10 border-white/20 hover:bg-white/20"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBiographies;
