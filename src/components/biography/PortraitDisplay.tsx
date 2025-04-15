
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

interface PortraitDisplayProps {
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  fullName: string;
  birthYear: number;
  deathYear: number;
  category: string;
}

const PortraitDisplay = ({ 
  image, 
  fullName, 
  birthYear, 
  deathYear, 
  category 
}: PortraitDisplayProps) => {
  return (
    <Card className="mx-auto max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm mb-8">
      <CardContent className="p-3">
        <figure className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={image.src} 
              alt={image.alt || `Retrato de ${fullName}`}
              className="mx-auto h-auto w-full max-w-sm object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-white/80 p-1.5 rounded-md">
              <Image className="h-5 w-5 text-posthumous-gold" />
            </div>
          </div>
          <figcaption className="mt-3 border-t border-gray-100 pt-3 text-center text-sm text-gray-500 italic">
            {image.caption || `${fullName} (${birthYear}-${deathYear || 'presente'}) - ${category}`}
          </figcaption>
        </figure>
      </CardContent>
    </Card>
  );
};

export default PortraitDisplay;
