
import React, { useState } from 'react';
import { Play, Loader2 } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  category?: string;
}

const VideoPlayer = ({ videoUrl, title = "Vídeo Relacionado", category = "arts" }: VideoPlayerProps) => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  
  // Map of background gradients for different categories
  const categoryBackgrounds: Record<string, string> = {
    arts: "bg-gradient-to-br from-purple-100 to-blue-50 border-purple-200",
    politics: "bg-gradient-to-br from-blue-100 to-gray-50 border-blue-200",
    music: "bg-gradient-to-br from-pink-100 to-purple-50 border-pink-200",
    science: "bg-gradient-to-br from-green-100 to-blue-50 border-green-200",
    literature: "bg-gradient-to-br from-amber-100 to-yellow-50 border-amber-200",
    cinema: "bg-gradient-to-br from-red-100 to-orange-50 border-red-200",
    business: "bg-gradient-to-br from-blue-100 to-cyan-50 border-blue-200",
    sports: "bg-gradient-to-br from-emerald-100 to-green-50 border-emerald-200",
    default: "bg-gradient-to-br from-gray-100 to-white border-gray-200",
  };

  const bgClass = categoryBackgrounds[category.toLowerCase()] || categoryBackgrounds.default;
  
  const handleIframeLoad = () => {
    setLoading(false);
    setPlaying(true);
  };
  
  const playVideo = () => {
    setPlaying(true);
  };

  return (
    <div className={`p-6 backdrop-blur-sm ${bgClass} rounded-lg border shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in`}>
      <h3 className="text-xl font-bold mb-4 text-posthumous-navy font-playfair">{title}</h3>
      <div className="aspect-w-16 aspect-h-9 relative">
        {!playing ? (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 rounded-lg overflow-hidden"
            onClick={playVideo}
          >
            <div className="w-16 h-16 rounded-full bg-posthumous-gold/90 flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
            <img 
              src={`https://i.ytimg.com/vi/${videoUrl.split('/').pop()}/hqdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 -z-10 rounded-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ) : (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <Loader2 className="h-8 w-8 text-posthumous-gold animate-spin" />
              </div>
            )}
            <iframe 
              src={videoUrl} 
              title="Video sobre a biografia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className={`w-full h-[400px] rounded-lg shadow-md border border-gray-100 ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
              onLoad={handleIframeLoad}
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
