
import React from 'react';
import ImageCarousel from '@/components/ImageCarousel';

interface BiographyGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const BiographyGallery = ({ images }: BiographyGalleryProps) => {
  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4">Galeria de Imagens</h3>
      <ImageCarousel images={images} />
    </div>
  );
};

export default BiographyGallery;
