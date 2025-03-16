
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import BiographySidebar from "@/components/BiographySidebar";
import { sampleBiography } from "@/data/mockData";

const BiographyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [biography, setBiography] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API based on the ID
    // For now, we're using mock data
    setTimeout(() => {
      setBiography(sampleBiography);
      setLoading(false);
    }, 300);
  }, [id]);

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
            <h2 className="text-2xl font-bold mb-4">Biography not found</h2>
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
          
          <Button asChild>
            <Link to={`/biography/${id}/edit`} className="flex items-center gap-2">
              <Edit className="h-4 w-4" /> Edit Biography
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <img 
                src={biography.mainImage} 
                alt={biography.name}
                className="w-full h-72 md:h-96 object-cover rounded-lg mb-4"
              />
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to={`/category/${biography.category.toLowerCase()}`}
                  className="bg-posthumous-lightgold text-posthumous-navy px-3 py-1 rounded-md text-sm font-medium"
                >
                  {biography.category}
                </Link>
                
                {biography.tags && biography.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-posthumous-navy">
                {biography.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {biography.summary}
              </p>
              
              <div className="biography-content" dangerouslySetInnerHTML={{ __html: biography.content }}></div>
            </div>
            
            {biography.images && biography.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-posthumous-navy">Images</h2>
                <ImageCarousel images={biography.images} />
              </div>
            )}
            
            {biography.video && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-posthumous-navy">Video</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={biography.video}
                    title={`Video about ${biography.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-96 rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <BiographySidebar
              fullName={biography.fullName}
              birthDate={biography.birthDate}
              birthPlace={biography.birthPlace}
              deathDate={biography.deathDate}
              deathPlace={biography.deathPlace}
              causeOfDeath={biography.causeOfDeath}
              website={biography.website}
              socialLinks={biography.socialLinks}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographyDetail;
