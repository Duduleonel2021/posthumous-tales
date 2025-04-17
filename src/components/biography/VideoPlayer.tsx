
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
}

const VideoPlayer = ({ videoUrl, title = "Vídeo Relacionado" }: VideoPlayerProps) => {
  return (
    <div className="p-6 backdrop-blur-sm bg-white/50 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-posthumous-navy">{title}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src={videoUrl} 
          title="Video sobre a biografia"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-[400px] rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
