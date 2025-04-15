
import { Image } from "lucide-react";
import PortraitDisplay from './PortraitDisplay';

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
      
      <div>
        <h3 className="text-xl font-bold mb-4">Vídeo Relacionado</h3>
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
    </div>
  );
};

export default VideoEmbed;
