
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import CategorySection from "@/components/CategorySection";
import TodayDeaths from "@/components/TodayDeaths";
import { featuredBiographies, categoryBiographies } from "@/data/mockData";
import { BookOpen, UserPlus, Search, TrendingUp, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white pt-6 pb-12">
          <div className="container mx-auto px-4">
            <FeaturedBiographies biographies={featuredBiographies} />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Trending Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-playfair text-posthumous-navy">
                <span className="border-b-2 border-posthumous-gold pb-1">Em Destaque</span>
              </h2>
              <Link to="/biografias" className="text-posthumous-gold hover:text-posthumous-navy transition-colors flex items-center gap-1 font-medium">
                Ver Todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBiographies.slice(0, 3).map((bio) => (
                <div key={bio.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100">
                  <Link to={`/biografia/${bio.id}`} className="block">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={bio.image} 
                        alt={bio.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                      />
                      <div className="absolute top-0 left-0 m-3">
                        <span className="inline-block px-2 py-1 bg-posthumous-gold text-white text-xs font-bold rounded">
                          Destaque
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/categoria/${bio.category.toLowerCase().replace(/\s+/g, '-')}`}>
                          <span className="text-xs font-medium text-posthumous-navy bg-posthumous-lightgold/50 px-2 py-1 rounded">
                            {bio.category}
                          </span>
                        </Link>
                        <span className="text-xs text-gray-500">{bio.years}</span>
                      </div>
                      <h3 className="text-xl font-bold font-playfair text-posthumous-navy mb-2">
                        {bio.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{bio.summary}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-16">              
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
            
            <div className="space-y-8">
              {/* Search Module */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-posthumous-navy/10 p-2.5 rounded-full mr-3">
                      <Search className="h-5 w-5 text-posthumous-navy" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-posthumous-navy">
                      Encontre Biografias
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Pesquisar biografias..."
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-posthumous-gold/30"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
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
                </div>
              </div>
              
              {/* Today Deaths Module */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <TodayDeaths />
                </div>
              </div>
              
              {/* About Module */}
              <div className="bg-gradient-to-b from-posthumous-navy to-posthumous-darknavy text-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/10 p-2.5 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-posthumous-gold" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold">
                      Sobre Nossa Missão
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-300 leading-relaxed">
                    Explore as vidas e legados de indivíduos notáveis que moldaram nosso mundo. Nossas biografias abrangentes celebram aqueles que fizeram contribuições significativas para artes, ciência, política e muito mais.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Cada biografia é cuidadosamente pesquisada e apresentada com detalhes enriquecedores, imagens e contexto histórico.
                  </p>
                </div>
              </div>
              
              {/* Contribute Module */}
              <div className="bg-gradient-to-br from-posthumous-lightgold to-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-posthumous-navy/10 p-2.5 rounded-full mr-3">
                      <UserPlus className="h-5 w-5 text-posthumous-navy" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-posthumous-navy">
                      Contribua com uma Biografia
                    </h3>
                  </div>
                  <p className="text-posthumous-text mb-6 leading-relaxed">
                    Conhece uma figura notável que merece reconhecimento? Nossa plataforma recebe contribuições de pesquisadores, historiadores e entusiastas.
                  </p>
                  <Button 
                    asChild
                    className="bg-posthumous-navy text-white hover:bg-posthumous-gold transition-colors w-full"
                  >
                    <Link to="/postar-biografia">
                      Enviar uma Biografia
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
