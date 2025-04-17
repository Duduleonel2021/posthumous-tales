
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
}

const VideoPlayer = ({ videoUrl, title = "Vídeo Relacionado" }: VideoPlayerProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src={videoUrl} 
          title="Video sobre a biografia"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-[400px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
