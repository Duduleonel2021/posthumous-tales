
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-posthumous-navy">{categoryTitle}</h1>
          <p className="text-gray-600 mt-2">
            Explore biographies of notable figures in {categoryTitle.toLowerCase()}.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        ) : biographies.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No biographies found</h2>
            <p className="text-gray-600">
              There are currently no biographies in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {biographies.map((biography) => (
              <BiographyCard key={biography.id} {...biography} />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
