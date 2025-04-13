
interface VideoEmbedProps {
  videoUrl: string;
}

const VideoEmbed = ({ videoUrl }: VideoEmbedProps) => {
  return (
    <div className="my-8">
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
  );
};

export default VideoEmbed;
