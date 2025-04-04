
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Tag, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiographyCard, { BiographyCardProps } from "@/components/BiographyCard";
import { categoryBiographies } from "@/data/mockData";

const getCategoryTitle = (slug: string): string => {
  const map: Record<string, string> = {
    'arts': 'Arts',
    'politics': 'Politics',
    'cinema-tv': 'Cinema & TV',
    'music': 'Music',
    'business': 'Business',
    'literature': 'Literature',
    'journalism': 'Journalism',
    'internet': 'Internet',
    'education': 'Education',
    'science': 'Science',
    'crime': 'Crime',
    'health': 'Health',
    'fashion': 'Fashion',
    'others': 'Others'
  };
  
  return map[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [biographies, setBiographies] = useState<BiographyCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryTitle = slug ? getCategoryTitle(slug) : '';
  
  useEffect(() => {
    // In a real app, this would fetch from an API based on the slug
    // For now, we're using mock data
    setTimeout(() => {
      // Map slug to category key in our mock data
      const categoryKey = slug as keyof typeof categoryBiographies;
      const data = categoryBiographies[categoryKey] || [];
      setBiographies(data);
      setLoading(false);
    }, 300);
  }, [slug]);

  const featuredBio = biographies.length > 0 ? biographies[0] : null;
  const remainingBios = biographies.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-posthumous-navy/90 to-posthumous-navy py-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-6">
              <Button variant="outline" asChild className="bg-white/90 hover:bg-white">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-start max-w-4xl">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="h-5 w-5 text-posthumous-gold" />
                <span className="text-posthumous-gold font-medium tracking-wide uppercase text-sm">Category</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4 leading-tight">
                {categoryTitle}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                Discover the lives and legacies of remarkable individuals who have made significant contributions to {categoryTitle.toLowerCase()}.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-posthumous-navy to-transparent opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Biography Section */}
          {!loading && featuredBio && (
            <div className="mb-12 border-b border-gray-200 pb-10">
              <h2 className="text-2xl font-bold mb-8 font-playfair flex items-center">
                <span className="inline-block w-12 h-1 bg-posthumous-gold mr-3"></span>
                Featured
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 overflow-hidden rounded-lg">
                  <Link to={`/biography/${featuredBio.id}`}>
                    <div className="relative h-[400px] overflow-hidden rounded-lg">
                      <img 
                        src={featuredBio.image} 
                        alt={featuredBio.name}
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                        <span className="inline-block px-3 py-1 bg-posthumous-gold text-white text-sm font-medium rounded-full mb-3">
                          {featuredBio.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-playfair">{featuredBio.name}</h3>
                        <p className="text-white/90 text-sm mb-2">{featuredBio.birthYear} - {featuredBio.deathYear}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-3xl font-bold font-playfair mb-4 text-posthumous-navy">
                      {featuredBio.name}
                    </h3>
                    <p className="text-gray-500 mb-2 flex items-center">
                      <span className="font-medium text-posthumous-navy">{featuredBio.birthYear} - {featuredBio.deathYear}</span>
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      {featuredBio.summary}
                      {featuredBio.summary.length > 100 && "..."}
                    </p>
                    <Button asChild className="bg-posthumous-navy hover:bg-posthumous-gold text-white w-fit transition-colors">
                      <Link to={`/biography/${featuredBio.id}`}>
                        Read Full Biography
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Biographies */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold font-playfair flex items-center">
                <span className="inline-block w-12 h-1 bg-posthumous-gold mr-3"></span>
                All Biographies
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </div>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="animate-pulse">
                    <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : remainingBios.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">No additional biographies found</h3>
                <p className="text-gray-600">
                  We're constantly adding new content to our collection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {remainingBios.map((biography) => (
                  <div key={biography.id} className="group">
                    <BiographyCard {...biography} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
