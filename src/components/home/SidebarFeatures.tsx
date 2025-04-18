
import { Link } from "react-router-dom";
import { FileText, Search, Users, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TodayDeaths from "@/components/TodayDeaths";

const SidebarFeatures = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-posthumous-navy to-posthumous-darknavy text-white overflow-hidden border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-white/10 p-2.5 rounded-full mr-3">
              <FileText className="h-5 w-5 text-posthumous-gold" />
            </div>
            <h3 className="font-playfair text-xl font-bold">
              Contribua com uma Biografia
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Conhece uma figura histórica notável? Compartilhe seu conhecimento enviando uma biografia para nossa plataforma.
          </p>
          <Button 
            asChild
            className="w-full bg-posthumous-gold text-posthumous-navy hover:bg-white transition-colors"
          >
            <Link to="/enviar-biografia">
              Enviar uma Biografia
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-posthumous-navy/10 p-2.5 rounded-full mr-3">
              <Search className="h-5 w-5 text-posthumous-navy" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-posthumous-navy">
              Encontre Biografias
            </h3>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-500">Navegar por</h4>
            <Link 
              to="/biografias" 
              className="flex items-center w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-navy/5 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
            >
              <Users className="h-4 w-4 mr-2 text-posthumous-navy" />
              Índice Alfabético
            </Link>
            <Link 
              to="/categoria/politics" 
              className="flex items-center w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-navy/5 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
            >
              <TrendingUp className="h-4 w-4 mr-2 text-posthumous-navy" />
              Categorias Populares
            </Link>
            <Link 
              to="/mortes-neste-dia" 
              className="flex items-center w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-navy/5 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
            >
              <Calendar className="h-4 w-4 mr-2 text-posthumous-navy" />
              Mortes Neste Dia
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-0 shadow-md">
        <CardContent className="p-6">
          <TodayDeaths />
        </CardContent>
      </Card>
    </div>
  );
};

export default SidebarFeatures;
