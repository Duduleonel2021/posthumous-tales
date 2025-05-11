
import CategorySection from "@/components/CategorySection";
import { categoryBiographies } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, TrendingUp, BookOpen } from "lucide-react";

const CategorySections = () => {
  return (
    <div className="lg:col-span-2 space-y-16">
      {/* Featured Editor's Pick Card - more journalistic element */}
      <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-r from-posthumous-navy/5 to-posthumous-gold/5">
        <CardHeader className="border-b border-gray-100 bg-white/50">
          <CardTitle className="flex items-center gap-2 font-playfair text-xl text-posthumous-navy">
            <Newspaper className="h-5 w-5 text-posthumous-gold" />
            Escolha do Editor
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Marie Curie em seu laboratório"
                className="rounded-lg shadow-sm w-full h-48 object-cover mb-4"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-posthumous-gold uppercase tracking-wider">Em Destaque</span>
              <h3 className="text-xl font-bold font-playfair text-posthumous-navy mt-1 mb-2">Marie Curie: Legado Radioativo</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Conheça a história da cientista que revolucionou nosso entendimento da radiação e se tornou a primeira mulher a ganhar um Prêmio Nobel.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                <span>Leitura de 8 minutos</span>
                <span className="mx-2">•</span>
                <BookOpen className="h-3 w-3 mr-1" /> 
                <span>198 leitores esta semana</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CategorySection 
        title="Artes & Cultura" 
        categorySlug="arts" 
        biographies={categoryBiographies.arts} 
      />
      <CategorySection 
        title="Figuras Políticas" 
        categorySlug="politics" 
        biographies={categoryBiographies.politics} 
      />
      <CategorySection 
        title="Pioneiros Científicos" 
        categorySlug="science" 
        biographies={categoryBiographies.science} 
      />
      <CategorySection 
        title="Lendas da Música" 
        categorySlug="music" 
        biographies={categoryBiographies.music} 
      />
    </div>
  );
};

export default CategorySections;
