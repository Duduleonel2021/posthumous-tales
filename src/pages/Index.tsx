
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import CategorySection from "@/components/CategorySection";
import TodayDeaths from "@/components/TodayDeaths";
import { featuredBiographies, categoryBiographies } from "@/data/mockData";
import { BookOpen, UserPlus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-posthumous-gray/30">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <FeaturedBiographies biographies={featuredBiographies} />
            </div>
            
            <div className="mt-12">
              <CategorySection 
                title="Arts" 
                categorySlug="arts" 
                biographies={categoryBiographies.arts} 
              />
              
              <CategorySection 
                title="Politics" 
                categorySlug="politics" 
                biographies={categoryBiographies.politics} 
              />
              
              <CategorySection 
                title="Science" 
                categorySlug="science" 
                biographies={categoryBiographies.science} 
              />
              
              <CategorySection 
                title="Music" 
                categorySlug="music" 
                biographies={categoryBiographies.music} 
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TodayDeaths />
            </div>
            
            <div className="bg-posthumous-navy text-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-posthumous-gold/30 p-2 rounded-full mr-3">
                  <BookOpen className="h-5 w-5 text-posthumous-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold">
                  About Posthumous Biographies
                </h3>
              </div>
              <p className="mb-4 text-posthumous-gray">
                Explore the lives and legacies of remarkable individuals who have shaped our world. Our comprehensive biographies celebrate those who have made significant contributions to arts, science, politics, and more.
              </p>
              <p className="text-posthumous-gray">
                Each biography is carefully researched and presented with rich detail, imagery, and historical context.
              </p>
            </div>
            
            <div className="bg-posthumous-lightgold p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-posthumous-gold/30 p-2 rounded-full mr-3">
                  <UserPlus className="h-5 w-5 text-posthumous-navy" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-posthumous-navy">
                  Contribute a Biography
                </h3>
              </div>
              <p className="text-posthumous-text mb-4">
                Know about a notable figure who deserves recognition? Our platform welcomes contributions from researchers, historians, and enthusiasts.
              </p>
              <a 
                href="/contribute" 
                className="inline-block bg-posthumous-gold text-white px-4 py-2 rounded-md hover:bg-posthumous-navy transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
