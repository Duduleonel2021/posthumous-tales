
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, BookOpen, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sampleBiography } from "@/data/mockData";
import BiographyCard from "@/components/BiographyCard";
import AlphabeticalSearchBar from "@/components/AlphabeticalSearchBar";

// In a real app, this would come from an API
const getMockRelatedBiographies = (category: string) => {
  return [
    {
      id: "albert-einstein",
      name: "Albert Einstein",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      birthYear: 1879,
      deathYear: 1955,
      category: "Science",
      summary: "Theoretical physicist who developed the theory of relativity."
    },
    {
      id: "marie-curie",
      name: "Marie Curie",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg",
      birthYear: 1867,
      deathYear: 1934,
      category: "Science",
      summary: "Physicist and chemist who conducted pioneering research on radioactivity."
    },
    {
      id: "isaac-newton",
      name: "Isaac Newton",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
      birthYear: 1643,
      deathYear: 1727,
      category: "Science",
      summary: "Mathematician, physicist, and astronomer who developed the laws of motion and universal gravitation."
    },
    {
      id: "galileo-galilei",
      name: "Galileo Galilei",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
      birthYear: 1564,
      deathYear: 1642,
      category: "Science",
      summary: "Astronomer, physicist and engineer who played a major role in the scientific revolution."
    }
  ];
};

const BiographyHub = () => {
  const { name } = useParams<{ name: string }>();
  const [biography, setBiography] = useState<any>(null);
  const [relatedBiographies, setRelatedBiographies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API based on the ID
    setTimeout(() => {
      setBiography(sampleBiography);
      setRelatedBiographies(getMockRelatedBiographies(sampleBiography.category));
      setLoading(false);
    }, 300);
  }, [name]);

  // Filter biographies by selected letter (if any)
  const filteredBiographies = selectedLetter
    ? relatedBiographies.filter(bio => 
        selectedLetter === "#" 
          ? /^[0-9]/.test(bio.name[0]) 
          : bio.name.toUpperCase().startsWith(selectedLetter)
      )
    : relatedBiographies;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!biography) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Biography hub not found</h2>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to home page
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="p-6 bg-white rounded-xl shadow-lg mb-8 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-posthumous-navy font-playfair">
            {biography.category} Biographies
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="bg-posthumous-lightteal text-posthumous-darkteal px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <BookOpen className="h-4 w-4 mr-2" /> {relatedBiographies.length} Biographies
            </div>
            <div className="bg-posthumous-lightgold text-posthumous-navy px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <CalendarDays className="h-4 w-4 mr-2" /> Various Time Periods
            </div>
            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <User className="h-4 w-4 mr-2" /> Historical Figures
            </div>
            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <Tag className="h-4 w-4 mr-2" /> {biography.category}
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-4">
            Explore the lives and contributions of notable figures in {biography.category}. 
            This hub contains detailed biographies of influential people who shaped this field.
          </p>
        </div>
        
        <AlphabeticalSearchBar 
          onLetterSelect={(letter) => setSelectedLetter(letter)} 
          selectedLetter={selectedLetter} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredBiographies.length > 0 ? (
            filteredBiographies.map((biography) => (
              <BiographyCard
                key={biography.id}
                id={biography.id}
                name={biography.name}
                image={biography.image}
                birthYear={biography.birthYear}
                deathYear={biography.deathYear}
                category={biography.category}
                summary={biography.summary}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-lg text-gray-500">No biographies found for this letter. Try another letter.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographyHub;
