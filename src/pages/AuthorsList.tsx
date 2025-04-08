
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data for authors
const mockAuthors = [
  {
    id: "historia-cientifica",
    name: "Equipe História Científica",
    image: "https://i.pravatar.cc/150?img=32",
    bio: "Especialistas em biografias de cientistas importantes e suas contribuições para a história da ciência.",
    postCount: 15
  },
  {
    id: "arte-em-foco",
    name: "Arte em Foco",
    image: "https://i.pravatar.cc/150?img=28",
    bio: "Grupo dedicado a compartilhar biografias detalhadas de artistas que moldaram movimentos e tendências na história da arte.",
    postCount: 12
  },
  {
    id: "biografias-literarias",
    name: "Biografias Literárias",
    image: "https://i.pravatar.cc/150?img=25",
    bio: "Especialistas em literatura que trazem histórias de vida de grandes escritores e poetas da história mundial.",
    postCount: 18
  },
  {
    id: "memoria-politica",
    name: "Memória Política",
    image: "https://i.pravatar.cc/150?img=30",
    bio: "Historiadores políticos que documentam as vidas e legados de figuras que impactaram a história política global.",
    postCount: 9
  }
];

const AuthorsList = () => {
  const [authors, setAuthors] = useState<any[]>([]);
  
  useEffect(() => {
    // In a real app, fetch authors from an API
    // For now, use mock data
    setAuthors(mockAuthors);
  }, []);

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
              <Users className="h-8 w-8 text-posthumous-gold" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-playfair">Nossos Autores</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Conheça os especialistas responsáveis pelas biografias no nosso site.
            Cada autor contribui com seu conhecimento e paixão pela história.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <div className="grid grid-cols-1 gap-8">
            {authors.map((author, index) => (
              <div key={author.id}>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <Avatar className="w-24 h-24 border-2 border-posthumous-lightgold">
                    <AvatarImage src={author.image} alt={author.name} />
                    <AvatarFallback className="bg-posthumous-navy text-white text-lg">
                      {author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <Link 
                      to={`/autor/${author.id}`}
                      className="text-xl font-bold text-posthumous-navy hover:text-posthumous-gold transition-colors"
                    >
                      {author.name}
                    </Link>
                    <p className="text-gray-600 mt-2 mb-4">{author.bio}</p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="text-sm bg-posthumous-lightgold/20 text-posthumous-navy px-3 py-1 rounded-full">
                        {author.postCount} biografias publicadas
                      </span>
                      <Button asChild size="sm" variant="outline">
                        <Link to={`/autor/${author.id}`}>Ver biografias</Link>
                      </Button>
                    </div>
                  </div>
                </div>
                {index < authors.length - 1 && <Separator className="my-6" />}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorsList;
