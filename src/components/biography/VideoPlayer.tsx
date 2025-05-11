
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  category?: string;
}

const VideoPlayer = ({ videoUrl, title = "Vídeo Relacionado", category = "arts" }: VideoPlayerProps) => {
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
  
  // Category-specific icons or decorations
  const categoryDecorations: Record<string, React.ReactNode> = {
    arts: <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-200 opacity-50"></div>,
    politics: <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-200 opacity-50"></div>,
    music: <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-200 opacity-50"></div>,
    science: <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-200 opacity-50"></div>,
    default: null,
  };
  
  const decoration = categoryDecorations[category.toLowerCase()] || categoryDecorations.default;

  return (
    <div className={`p-6 backdrop-blur-sm ${bgClass} rounded-lg border shadow-md relative overflow-hidden`}>
      {decoration}
      <h3 className="text-xl font-bold mb-4 text-posthumous-navy font-playfair">{title}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src={videoUrl} 
          title="Video sobre a biografia"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-[400px] rounded-lg shadow-md border border-gray-100"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
