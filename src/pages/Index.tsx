
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import CategorySection from "@/components/CategorySection";
import TodayDeaths from "@/components/TodayDeaths";
import { featuredBiographies, categoryBiographies } from "@/data/mockData";
import { BookOpen, UserPlus, Search, TrendingUp, Calendar, Users, ArrowRight, Newspaper, Bookmark, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Featured Biography */}
        <div className="bg-white pt-6 pb-8">
          <div className="container mx-auto px-4">
            <FeaturedBiographies biographies={featuredBiographies} />
          </div>
        </div>
        
        {/* Latest Biographies Section - Journal Style */}
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
              {/* Main Feature */}
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
              
              {/* Secondary Features */}
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
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-16">              
              {/* Category Sections */}
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
              {/* Featured Action - Biografia Submission */}
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
              
              {/* Search Module */}
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
                </CardContent>
              </Card>
              
              {/* Today Deaths Module */}
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-6">
                  <TodayDeaths />
                </CardContent>
              </Card>
              
              {/* About Module */}
              <Card className="bg-gradient-to-br from-posthumous-gold/20 to-white overflow-hidden border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-posthumous-navy/10 p-2.5 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-posthumous-navy" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-posthumous-navy">
                      Sobre Nossa Missão
                    </h3>
                  </div>
                  <p className="mb-4 text-posthumous-text leading-relaxed">
                    Explore as vidas e legados de indivíduos notáveis que moldaram nosso mundo. Nossas biografias abrangentes celebram aqueles que fizeram contribuições significativas para artes, ciência, política e muito mais.
                  </p>
                  <p className="text-posthumous-text leading-relaxed">
                    Cada biografia é cuidadosamente pesquisada e apresentada com detalhes enriquecedores, imagens e contexto histórico.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
