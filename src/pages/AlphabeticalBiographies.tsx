
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categoryBiographies } from "@/data/mockData";
import { User, Search } from "lucide-react";
import AlphabeticalSearchBar from "@/components/AlphabeticalSearchBar";

const AlphabeticalBiographies = () => {
  const [allBiographies, setAllBiographies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-posthumous-navy to-posthumous-navy/80 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Biographies A-Z</h1>
              <p className="text-xl text-white/80 mb-8">Browse our complete collection of biographies organized alphabetically.</p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search biographies by name..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-posthumous-gold text-gray-800 text-lg shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <AlphabeticalSearchBar 
              onLetterSelect={setSelectedLetter} 
              selectedLetter={selectedLetter} 
            />
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 h-48 w-full rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 w-3/4 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 w-1/2 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 w-full rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredBiographies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                  {filteredBiographies.map((bio) => (
                    <Link 
                      to={`/biography/${bio.id}`} 
                      key={bio.id}
                      className="group block rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-56 bg-gray-200 overflow-hidden">
                        <img 
                          src={bio.image} 
                          alt={bio.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-block px-2 py-1 text-xs font-semibold text-posthumous-navy bg-posthumous-lightgold rounded-md">
                            {bio.category}
                          </span>
                          <span className="text-sm text-gray-500">{bio.birthYear}-{bio.deathYear}</span>
                        </div>
                        <h3 className="text-lg font-bold text-posthumous-navy group-hover:text-posthumous-gold transition-colors line-clamp-2 mb-2">
                          {bio.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{bio.summary}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <User className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-2xl font-semibold text-posthumous-navy mb-2">No biographies found</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We couldn't find any biographies matching your criteria. Try adjusting your search or filter settings.
                  </p>
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
