
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import CategorySection from "@/components/CategorySection";
import TodayDeaths from "@/components/TodayDeaths";
import { featuredBiographies, categoryBiographies } from "@/data/mockData";
import { BookOpen, UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <FeaturedBiographies biographies={featuredBiographies} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">              
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
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-posthumous-gold/10 p-2 rounded-full mr-3">
                      <Search className="h-5 w-5 text-posthumous-gold" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-posthumous-navy">
                      Find Biographies
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <Link 
                      to="/biographies" 
                      className="block w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-gold/10 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
                    >
                      Browse Alphabetically
                    </Link>
                    <Link 
                      to="/category/politics" 
                      className="block w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-gold/10 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
                    >
                      Browse by Category
                    </Link>
                    <Link 
                      to="/deaths-on-this-day" 
                      className="block w-full py-2.5 px-4 text-left bg-gray-50 hover:bg-posthumous-gold/10 border border-gray-200 rounded-md text-posthumous-navy transition-colors"
                    >
                      Deaths on This Day
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6">
                  <TodayDeaths />
                </div>
              </div>
              
              <div className="bg-posthumous-navy text-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-posthumous-gold/30 p-2 rounded-full mr-3">
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
              
              <div className="bg-gradient-to-br from-posthumous-lightgold to-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-posthumous-gold/30 p-2 rounded-full mr-3">
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
                    className="bg-posthumous-gold text-white hover:bg-posthumous-navy transition-colors w-full"
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
