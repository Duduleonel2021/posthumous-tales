
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import CategorySection from "@/components/CategorySection";
import TodayDeaths from "@/components/TodayDeaths";
import { featuredBiographies, categoryBiographies } from "@/data/mockData";
import { BookOpen, UserPlus, Search, TrendingUp, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white py-6">
          <div className="container mx-auto px-4">
            <FeaturedBiographies biographies={featuredBiographies} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-16">              
              <CategorySection 
                title="Arts & Culture" 
                categorySlug="arts" 
                biographies={categoryBiographies.arts} 
              />
              
              <CategorySection 
                title="Political Figures" 
                categorySlug="politics" 
                biographies={categoryBiographies.politics} 
              />
              
              <CategorySection 
                title="Scientific Pioneers" 
                categorySlug="science" 
                biographies={categoryBiographies.science} 
              />
              
              <CategorySection 
                title="Musical Legends" 
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
                      Find Biographies
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search biographies..."
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-posthumous-gold/30"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-500">Browse by</h4>
                    <Link 
                      to="/biographies" 
                      className="flex items-center w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-navy/5 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
                    >
                      <Users className="h-4 w-4 mr-2 text-posthumous-navy" />
                      Alphabetical Index
                    </Link>
                    <Link 
                      to="/category/politics" 
                      className="flex items-center w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-navy/5 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
                    >
                      <TrendingUp className="h-4 w-4 mr-2 text-posthumous-navy" />
                      Popular Categories
                    </Link>
                    <Link 
                      to="/deaths-on-this-day" 
                      className="flex items-center w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-navy/5 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
                    >
                      <Calendar className="h-4 w-4 mr-2 text-posthumous-navy" />
                      Deaths on This Day
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
              <div className="bg-posthumous-navy text-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/10 p-2.5 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-posthumous-gold" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold">
                      About Our Mission
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-300 leading-relaxed">
                    Explore the lives and legacies of remarkable individuals who have shaped our world. Our comprehensive biographies celebrate those who have made significant contributions to arts, science, politics, and more.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Each biography is carefully researched and presented with rich detail, imagery, and historical context.
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
                      Contribute a Biography
                    </h3>
                  </div>
                  <p className="text-posthumous-text mb-6 leading-relaxed">
                    Know about a notable figure who deserves recognition? Our platform welcomes contributions from researchers, historians, and enthusiasts.
                  </p>
                  <Button 
                    asChild
                    className="bg-posthumous-navy text-white hover:bg-posthumous-gold transition-colors w-full"
                  >
                    <Link to="/post-biography">
                      Submit a Biography
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
