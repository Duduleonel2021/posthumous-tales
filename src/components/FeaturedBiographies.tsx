
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
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === biographies.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Auto rotation for featured biographies
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, biographies.length]);

  if (!biographies.length) return null;

  const biography = biographies[currentIndex];

  return (
    <div className="relative overflow-hidden bg-posthumous-navy rounded-xl shadow-xl">
      <div className="absolute inset-0">
        <img
          src={biography.image}
          alt={biography.name}
          className="object-cover w-full h-full opacity-20 transition-transform duration-1000 ease-out scale-105"
          style={{ 
            filter: "blur(1px)",
            transform: isAnimating ? "scale(1.15)" : "scale(1.05)"
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-posthumous-navy via-posthumous-navy/80 to-transparent"></div>
      </div>
      <div className="relative z-10 p-6 md:p-14 flex flex-col h-full min-h-[480px] md:min-h-[550px]">
        <div className={`transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <div className="mb-4 flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <span className="text-white/70 text-sm uppercase tracking-wider font-medium">Em Destaque</span>
              <span className="w-1 h-1 bg-posthumous-gold rounded-full inline-block"></span>
              <Link
                to={`/categoria/${biography.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-posthumous-gold text-sm font-medium hover:text-white transition-colors uppercase tracking-wider"
              >
                {biography.category}
              </Link>
            </div>
          </div>
          <h2 className="text-3xl md:text-6xl font-playfair font-bold mb-4 text-white leading-tight">{biography.name}</h2>
          <p className="text-gray-300 mb-4 text-lg md:text-xl font-light">{biography.years}</p>
          <p className="text-lg max-w-3xl mb-7 md:mb-10 line-clamp-3 md:line-clamp-4 text-gray-200 leading-relaxed font-inter">
            {biography.summary}
          </p>
          <Button asChild size="lg" className="bg-posthumous-gold text-posthumous-navy hover:bg-white transition-colors font-medium px-8 py-6 text-base rounded-md shadow-lg hover:shadow-xl">
            <Link to={`/biografia/${biography.id}`}>Ler Biografia Completa</Link>
          </Button>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            {biographies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-10 h-2 bg-posthumous-gold rounded-full" 
                    : "w-2 h-2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full"
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full h-10 w-10 transition-transform duration-300 hover:scale-105"
              disabled={isAnimating}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full h-10 w-10 transition-transform duration-300 hover:scale-105"
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
