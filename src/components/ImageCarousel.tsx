
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const slideRef = useRef<HTMLDivElement>(null);

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
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  if (images.length === 0) {
    return null;
  }

  // If there's only one image, display it without carousel controls
  if (images.length === 1) {
    const image = images[0];
    return (
      <div className="overflow-hidden rounded-lg">
        <figure className="relative">
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button variant="secondary" size="sm" className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" /> Ampliar
                  </Button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black/90">
              <div className="p-1">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
          {image.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 px-2">
              {image.caption}
            </figcaption>
          )}
        </figure>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div 
        className="relative"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={slideRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <figure 
                  className="relative cursor-pointer group" 
                  style={{ width: `${100 / images.length}%` }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm" className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" /> Ampliar
                    </Button>
                  </div>
                  {image.caption && (
                    <figcaption className="text-sm text-gray-500 mt-1 px-2 truncate">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black/90">
                <div className="p-1">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  {image.caption && (
                    <p className="text-white/80 p-2 text-center">{image.caption}</p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      
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
    </div>
  );
};

export default ImageCarousel;
