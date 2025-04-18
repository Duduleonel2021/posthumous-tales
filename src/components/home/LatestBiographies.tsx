
import { Link } from "react-router-dom";
import { Newspaper, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { featuredBiographies } from "@/data/mockData";

const LatestBiographies = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-posthumous-navy flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-posthumous-gold" />
            <span>Últimas Biografias</span>
          </h2>
          <Link to="/biografias" className="text-posthumous-gold hover:text-posthumous-navy transition-colors flex items-center gap-1 font-medium">
            Ver Todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-[350px] md:h-[400px]">
                <img 
                  src={featuredBiographies[0].image} 
                  alt={featuredBiographies[0].name}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Link to={`/categoria/${featuredBiographies[0].category.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="inline-block px-3 py-1 bg-posthumous-gold text-white text-xs font-bold rounded-full mb-2">
                      {featuredBiographies[0].category}
                    </span>
                  </Link>
                  <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-2">
                    <Link to={`/biografia/${featuredBiographies[0].id}`} className="hover:text-posthumous-gold transition-colors">
                      {featuredBiographies[0].name}
                    </Link>
                  </h3>
                  <p className="text-gray-300 line-clamp-2 mb-2">{featuredBiographies[0].summary}</p>
                  <span className="text-sm text-gray-400">{featuredBiographies[0].years}</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            {featuredBiographies.slice(1, 3).map((bio) => (
              <Card key={bio.id} className="overflow-hidden border-0 shadow-md">
                <div className="relative h-[180px]">
                  <img 
                    src={bio.image} 
                    alt={bio.name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Link to={`/categoria/${bio.category.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="inline-block px-2 py-1 bg-posthumous-gold text-white text-xs font-bold rounded-full mb-2">
                        {bio.category}
                      </span>
                    </Link>
                    <h3 className="text-lg font-bold font-playfair">
                      <Link to={`/biografia/${bio.id}`} className="hover:text-posthumous-gold transition-colors">
                        {bio.name}
                      </Link>
                    </h3>
                    <span className="text-xs text-gray-300">{bio.years}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBiographies;
