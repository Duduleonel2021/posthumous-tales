
import React from 'react';
import PortraitDisplay from './PortraitDisplay';
import VideoPlayer from './VideoPlayer';

interface VideoEmbedProps {
  videoUrl: string;
  portraitImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  fullName?: string;
  birthYear?: number;
  deathYear?: number;
  category?: string;
}

const VideoEmbed = ({ 
  videoUrl, 
  portraitImage,
  fullName = "",
  birthYear = 0,
  deathYear,
  category = ""
}: VideoEmbedProps) => {
  // Category-specific background images
  const categoryBackgrounds: Record<string, string> = {
    "Ciência": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Política": "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Artes": "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Literatura": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Música": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Cinema": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Esportes": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "Negócios": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  };

  // Default background if category not found
  const defaultBackground = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80";
  
  // Get the appropriate background
  const backgroundImage = categoryBackgrounds[category] || defaultBackground;

  return (
    <div className="my-8 space-y-8">
      {portraitImage && fullName && (
        <PortraitDisplay 
          image={portraitImage}
          fullName={fullName}
          birthYear={birthYear}
          deathYear={deathYear}
          category={category}
        />
      )}
      
      <div className="relative">
        {/* Category-specific background */}
        <div 
          className="absolute inset-0 rounded-lg opacity-10 bg-cover bg-center" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        
        <div className="relative z-10">
          <VideoPlayer videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
