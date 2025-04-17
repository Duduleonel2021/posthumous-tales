
import React from 'react';
import { Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CarouselSlideProps {
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  width: string;
}

const CarouselSlide = ({ image, width }: CarouselSlideProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <figure 
          className="relative cursor-pointer group" 
          style={{ width }}
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
  );
};

export default CarouselSlide;
