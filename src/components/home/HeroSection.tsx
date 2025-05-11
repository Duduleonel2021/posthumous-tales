
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import { featuredBiographies } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white pt-6 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-6">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-posthumous-navy mb-4 leading-tight">
              Explorando a História Através de Personalidades Notáveis
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Conheça as biografias de pessoas que moldaram nossa história e deixaram legados inesquecíveis através dos tempos.
            </p>
            <Button asChild className="bg-posthumous-gold hover:bg-posthumous-navy text-white">
              <Link to="/biografias" className="flex items-center">
                Explorar Todas as Biografias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-posthumous-navy font-medium mb-2">Destaques do Mês</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-posthumous-gold rounded-full mr-2"></span>
                <Link to="/biografia/marie-curie" className="text-posthumous-navy hover:text-posthumous-gold transition-colors">
                  Marie Curie: Pioneira da Radioatividade
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-posthumous-gold rounded-full mr-2"></span>
                <Link to="/biografia/leonardo-da-vinci" className="text-posthumous-navy hover:text-posthumous-gold transition-colors">
                  Leonardo da Vinci: O Homem Vitruviano
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-posthumous-gold rounded-full mr-2"></span>
                <Link to="/biografia/frida-kahlo" className="text-posthumous-navy hover:text-posthumous-gold transition-colors">
                  Frida Kahlo: Arte e Resistência
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <FeaturedBiographies biographies={featuredBiographies} />
      </div>
    </div>
  );
};

export default HeroSection;
