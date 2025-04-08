
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Tag as TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiographyCard from "@/components/BiographyCard";

// Mock data for tagged biographies
const mockTaggedBiographies = [
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/800px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    birthYear: 1907,
    deathYear: 1954,
    category: "Arte",
    summary: "Pintora mexicana que criou obras marcantes com elementos de arte popular mexicana e autobiográficos."
  },
  {
    id: "picasso",
    name: "Pablo Picasso",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Portrait_de_Picasso%2C_1908.jpg/800px-Portrait_de_Picasso%2C_1908.jpg",
    birthYear: 1881,
    deathYear: 1973,
    category: "Arte",
    summary: "Pintor e escultor espanhol, co-fundador do movimento cubista e um dos artistas mais influentes do século XX."
  },
  {
    id: "salvador-dali",
    name: "Salvador Dalí",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg",
    birthYear: 1904,
    deathYear: 1989,
    category: "Arte",
    summary: "Artista surrealista espanhol conhecido por suas imagens bizarras e oníricas."
  }
];

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [biographies, setBiographies] = useState<any[]>([]);
  
  useEffect(() => {
    // In a real app, fetch biographies with this tag from an API
    // For now, use mock data
    setBiographies(mockTaggedBiographies);
  }, [slug]);

  // Format tag name for display (convert slug to title case)
  const formatTagName = (tagSlug: string = "") => {
    return tagSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const tagName = formatTagName(slug);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Voltar ao Início
            </Link>
          </Button>
        </div>

        <div className="bg-posthumous-navy text-white rounded-xl shadow-xl p-8 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-posthumous-gold/20 p-3 rounded-full">
              <TagIcon className="h-8 w-8 text-posthumous-gold" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-playfair">{tagName}</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Biografias marcadas com a tag "{tagName}". 
            Explore personalidades e suas histórias relacionadas a este tema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {biographies.map(person => (
            <BiographyCard
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
              birthYear={person.birthYear}
              deathYear={person.deathYear}
              category={person.category}
              summary={person.summary}
            />
          ))}
        </div>

        {biographies.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-posthumous-navy mb-4">
              Nenhuma biografia encontrada
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Não encontramos biografias com esta tag. Por favor, tente outra tag ou explore nossas categorias.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TagPage;
