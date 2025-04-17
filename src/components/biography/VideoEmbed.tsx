
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
      
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default VideoEmbed;
