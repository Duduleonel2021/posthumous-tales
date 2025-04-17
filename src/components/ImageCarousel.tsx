
import { useState, useRef, useEffect } from 'react';
import SingleImageDisplay from './carousel/SingleImageDisplay';
import CarouselSlide from './carousel/CarouselSlide';
import CarouselNavigation from './carousel/CarouselNavigation';

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
    return <SingleImageDisplay image={images[0]} />;
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
            <CarouselSlide 
              key={index} 
              image={image} 
              width={`${100 / images.length}%`} 
            />
          ))}
        </div>
      </div>
      
      <CarouselNavigation 
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentIndex={currentIndex}
        totalSlides={images.length}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
};

export default ImageCarousel;
