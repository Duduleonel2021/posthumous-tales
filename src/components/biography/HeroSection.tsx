
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
  title: string;
  publishDate: string;
  category: string;
}

const HeroSection = ({ heroImage, title, publishDate, category }: HeroSectionProps) => {
  return (
    <div 
      className="w-full h-[40vh] md:h-[50vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
        <div className="text-white relative z-10 animate-fade-in">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-posthumous-gold" /> 
              Publicado em {publishDate}
            </span>
            <span>•</span>
            <Link 
              to={`/categoria/${category.toLowerCase()}`}
              className="bg-posthumous-gold/30 text-white px-3 py-1 rounded-full hover:bg-posthumous-gold/50 transition-colors"
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
