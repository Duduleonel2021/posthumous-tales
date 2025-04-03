
import { useState, useEffect } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? biographies.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === biographies.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto rotation for featured biographies
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, biographies.length]);

  if (!biographies.length) return null;

  const biography = biographies[currentIndex];

  return (
    <div className="relative overflow-hidden bg-posthumous-navy rounded-xl shadow-lg">
      <div className="absolute inset-0">
        <img
          src={biography.image}
          alt={biography.name}
          className="object-cover w-full h-full opacity-30 transition-transform duration-1000 ease-out scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-posthumous-navy via-posthumous-navy/70 to-transparent"></div>
      </div>
      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full min-h-[450px] md:min-h-[550px]">
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <Link
            to={`/category/${biography.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-posthumous-gold text-posthumous-navy rounded-md hover:bg-white transition-colors"
          >
            {biography.category}
          </Link>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-3 text-white leading-tight">{biography.name}</h2>
          <p className="text-gray-300 mb-6 text-xl md:text-2xl font-light">{biography.years}</p>
          <p className="text-lg max-w-3xl mb-8 line-clamp-3 md:line-clamp-4 text-gray-200 leading-relaxed">
            {biography.summary}
          </p>
          <Button asChild size="lg" className="bg-posthumous-gold text-posthumous-navy hover:bg-white transition-colors">
            <Link to={`/biography/${biography.id}`} className="font-medium">Read Full Biography</Link>
          </Button>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            {biographies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-posthumous-gold w-6" 
                    : "bg-white bg-opacity-30 hover:bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-3">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full h-10 w-10"
              disabled={isAnimating}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full h-10 w-10"
              disabled={isAnimating}
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
