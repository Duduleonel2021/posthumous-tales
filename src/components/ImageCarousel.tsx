
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // swipe right
      handlePrevious();
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const translateValue = currentIndex * -100;
      carouselRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentIndex]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div 
        className="carousel-inner"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-64 md:h-96 object-cover"
            />
            {image.caption && (
              <p className="text-sm text-gray-500 mt-1 px-2">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <Button 
            variant="outline"
            size="icon"
            className="carousel-control carousel-control-prev"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="carousel-control carousel-control-next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-posthumous-gold' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
