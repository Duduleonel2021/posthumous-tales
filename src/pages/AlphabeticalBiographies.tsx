
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categoryBiographies } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Search } from "lucide-react";

const AlphabeticalBiographies = () => {
  const [allBiographies, setAllBiographies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    // Gather all biographies from all categories
    const biographiesArray: any[] = [];
    Object.values(categoryBiographies).forEach(categoryBios => {
      biographiesArray.push(...categoryBios);
    });
    
    // Sort by name
    const sortedBiographies = biographiesArray.sort((a, b) => 
      a.name.localeCompare(b.name)
    );
    
    setAllBiographies(sortedBiographies);
    setLoading(false);
  }, []);

  const getFilteredBiographies = () => {
    let result = [...allBiographies];
    
    // Filter by letter if selected
    if (selectedLetter) {
      if (selectedLetter === "#") {
        result = result.filter(bio => !isNaN(parseInt(bio.name.charAt(0))));
      } else {
        result = result.filter(bio => 
          bio.name.toUpperCase().startsWith(selectedLetter)
        );
      }
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(bio => 
        bio.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return result;
  };

  const filteredBiographies = getFilteredBiographies();

  return (
    <div className="min-h-screen flex flex-col bg-posthumous-gray/30">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-posthumous-navy mb-6">Biographies A-Z</h1>
          
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search biographies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-posthumous-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {alphabet.map(letter => (
              <Button
                key={letter}
                variant={selectedLetter === letter ? "default" : "outline"} 
                className={selectedLetter === letter ? "bg-posthumous-gold hover:bg-posthumous-gold/90" : ""}
                onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
              >
                {letter}
              </Button>
            ))}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredBiographies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredBiographies.map((bio) => (
                    <div key={bio.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <Link to={`/biography/${bio.id}`}>
                        <div className="relative h-48 bg-gray-200">
                          <img 
                            src={bio.image} 
                            alt={bio.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
                              (e.target as HTMLImageElement).alt = "Placeholder image";
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <span className="inline-block px-2 py-1 text-xs font-semibold text-posthumous-navy bg-posthumous-lightgold rounded-md mb-2">
                            {bio.category}
                          </span>
                          <h3 className="text-xl font-bold text-posthumous-navy hover:text-posthumous-gold transition-colors">
                            {bio.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{bio.birthYear}-{bio.deathYear}</p>
                          <p className="text-sm text-gray-700 line-clamp-3">{bio.summary}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <User className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No biographies found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AlphabeticalBiographies;
