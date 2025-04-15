
import { Image } from "lucide-react";

interface VideoEmbedProps {
  videoUrl: string;
  portraitImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

const VideoEmbed = ({ videoUrl, portraitImage }: VideoEmbedProps) => {
  return (
    <div className="my-8 space-y-8">
      {portraitImage && (
        <div className="portrait-image-container">
          <figure className="mx-auto max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={portraitImage.src} 
                alt={portraitImage.alt}
                className="mx-auto h-auto w-full max-w-sm object-cover"
              />
            </div>
            {portraitImage.caption && (
              <figcaption className="mt-3 border-t border-gray-100 pt-3 text-center text-sm text-gray-500 italic">
                {portraitImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
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
