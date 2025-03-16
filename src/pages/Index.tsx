
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import CategorySection from "@/components/CategorySection";
import TodayDeaths from "@/components/TodayDeaths";
import { featuredBiographies, categoryBiographies } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <FeaturedBiographies biographies={featuredBiographies} />
            
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
            <TodayDeaths />
            
            <div className="bg-posthumous-navy text-white p-6 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-4">
                About Posthumous Biographies
              </h3>
              <p className="mb-4">
                Explore the lives and legacies of remarkable individuals who have shaped our world. Our comprehensive biographies celebrate those who have made significant contributions to arts, science, politics, and more.
              </p>
              <p>
                Each biography is carefully researched and presented with rich detail, imagery, and historical context.
              </p>
            </div>
            
            <div className="bg-posthumous-lightgold p-6 rounded-lg">
              <h3 className="font-playfair text-xl font-bold text-posthumous-navy mb-4">
                Contribute a Biography
              </h3>
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
