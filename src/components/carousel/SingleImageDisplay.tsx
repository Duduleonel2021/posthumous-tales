
import React from 'react';
import { Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SingleImageDisplayProps {
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
}

const SingleImageDisplay = ({ image }: SingleImageDisplayProps) => {
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
};

export default SingleImageDisplay;
