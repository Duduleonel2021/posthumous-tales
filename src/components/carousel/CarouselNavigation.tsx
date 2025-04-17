
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselNavigationProps {
  handlePrevious: () => void;
  handleNext: () => void;
  currentIndex: number;
  totalSlides: number;
  onDotClick: (index: number) => void;
}

const CarouselNavigation = ({ 
  handlePrevious, 
  handleNext, 
  currentIndex,
  totalSlides,
  onDotClick
}: CarouselNavigationProps) => {
  return (
    <>
      <Button 
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={handlePrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-posthumous-gold' : 'bg-gray-300'
            }`}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselNavigation;
