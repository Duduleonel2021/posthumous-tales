
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Edit, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import BiographySidebar from "@/components/BiographySidebar";
import SocialShareButtons from "@/components/SocialShareButtons";
import AuthorInfo from "@/components/AuthorInfo";
import CommentSection from "@/components/CommentSection";
import MostReadWidget from "@/components/MostReadWidget";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleNavigation from "@/components/ArticleNavigation";
import { sampleBiography } from "@/data/mockData";

// Mock related biographies data (in a real app, this would come from an API)
const getRelatedBiographies = (category: string) => {
  return [
    {
      id: "winston-churchill",
      name: "Winston Churchill",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg",
      birthYear: 1874,
      deathYear: 1965,
      category: "Política",
      summary: "Estadista britânico, soldado e escritor que serviu como Primeiro-Ministro do Reino Unido."
    },
    {
      id: "franklin-roosevelt",
      name: "Franklin D. Roosevelt",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg",
      birthYear: 1882,
      deathYear: 1945,
      category: "Política",
      summary: "Político americano que serviu como o 32º presidente dos Estados Unidos."
    },
    {
      id: "margaret-thatcher",
      name: "Margaret Thatcher",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Margaret_Thatcher_%281983%29.jpg",
      birthYear: 1925,
      deathYear: 2013,
      category: "Política",
      summary: "Estadista britânica que serviu como Primeira-Ministra do Reino Unido de 1979 a 1990."
    },
    {
      id: "nelson-mandela",
      name: "Nelson Mandela",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",
      birthYear: 1918,
      deathYear: 2013,
      category: "Política",
      summary: "Revolucionário anti-apartheid sul-africano, líder político e filantropo que serviu como Presidente da África do Sul."
    }
  ];
};

// Enhanced sample biography content with sections
const enhancedContent = `
<h2 id="primeiros-anos">Primeiros Anos</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
<p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>

<h2 id="carreira">Carreira</h2>
<p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>

<h3 id="principais-conquistas">Principais Conquistas</h3>
<p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>

<div class="quote-placeholder"></div>

<h3 id="reconhecimento-internacional">Reconhecimento Internacional</h3>
<p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>

<h2 id="legado">Legado</h2>
<p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
<p>Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
`;

const BiographyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [biography, setBiography] = useState<any>(null);
  const [relatedBiographies, setRelatedBiographies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const currentUrl = window.location.href;

  useEffect(() => {
    // In a real app, this would fetch from an API based on the ID
    // For now, we're using mock data with enhanced content
    setTimeout(() => {
      const modifiedBiography = {
        ...sampleBiography,
        content: enhancedContent,
        author: {
          id: "john-doe",
          name: "João Silva",
          bio: "Historiador e escritor especializado em biografias históricas"
        },
        publishDate: "15 de março de 2025"
      };
      
      setBiography(modifiedBiography);
      setRelatedBiographies(getRelatedBiographies(sampleBiography.category));
      setLoading(false);
    }, 300);
  }, [id]);

  useEffect(() => {
    // Add quote to placeholder after content is loaded
    if (biography) {
      const quoteElement = document.querySelector('.quote-placeholder');
      if (quoteElement) {
        const quoteDiv = document.createElement('div');
        quoteDiv.id = 'biography-quote';
        quoteElement.appendChild(quoteDiv);
        
        // Using ReactDOM to render the component would be better in a real app
        // This is a simplified approach for demonstration
      }
    }
  }, [biography]);

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
            <h2 className="text-2xl font-bold mb-4">Biografia não encontrada</h2>
            <Link to="/" className="text-blue-600 hover:underline">
              Voltar para a página inicial
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
              <ArrowLeft className="h-4 w-4" /> Voltar
            </Link>
          </Button>
          
          <Button asChild>
            <Link to={`/biography/${id}/edit`} className="flex items-center gap-2">
              <Edit className="h-4 w-4" /> Editar Biografia
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - 8 columns on large screens */}
          <div className="lg:col-span-8 space-y-8">
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
                
                <span className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm ml-auto">
                  <Calendar className="h-3 w-3" />
                  {biography.birthYear} - {biography.deathYear}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-posthumous-navy font-playfair">
                {biography.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-4 font-playfair">
                {biography.summary}
              </p>

              {/* Author info */}
              <AuthorInfo 
                name={biography.author.name} 
                id={biography.author.id}
                bio={biography.author.bio}
                publishDate={biography.publishDate}
              />
              
              {/* Social Share Buttons */}
              <SocialShareButtons 
                title={biography.name} 
                url={currentUrl}
              />
              
              {/* Content with sections */}
              <div 
                className="biography-content prose prose-lg max-w-none mt-8" 
                dangerouslySetInnerHTML={{ __html: biography.content }}
              />
              
              {/* Render Quote Block - normally this would be part of the content */}
              <div id="biography-quote">
                <QuoteBlock 
                  text="A verdadeira medida de um homem não é como ele se comporta em momentos de conforto e conveniência, mas como ele se mantém em tempos de controvérsia e desafio."
                  author={biography.name}
                />
              </div>
            </div>
            
            {biography.images && biography.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-posthumous-navy font-playfair">Imagens</h2>
                <ImageCarousel images={biography.images} />
              </div>
            )}
            
            {biography.video && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-posthumous-navy font-playfair">Vídeo</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={biography.video}
                    title={`Vídeo sobre ${biography.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-96 rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
            
            {/* Comment Section */}
            <CommentSection biographyId={id || ""} />
          </div>
          
          {/* Sidebar - 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-8">
            {/* Article Navigation */}
            <ArticleNavigation />
            
            {/* Biography Sidebar */}
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
            
            {/* Most Read Widget */}
            <MostReadWidget />
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-posthumous-navy font-playfair border-b pb-4">
            Você também pode gostar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedBiographies.map((bio) => (
              <Link 
                key={bio.id}
                to={`/biography/${bio.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={bio.image} 
                      alt={bio.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-posthumous-gold">
                      {bio.category}
                    </span>
                    <h3 className="font-bold text-posthumous-navy mt-1 group-hover:text-posthumous-gold transition-colors">
                      {bio.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {bio.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographyDetail;
