
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

interface MostReadItem {
  id: string;
  title: string;
  image?: string;
  views: number;
}

interface MostReadWidgetProps {
  items: MostReadItem[];
}

// Mock data for most read articles
const mockMostRead: MostReadItem[] = [
  {
    id: "albert-einstein",
    title: "Albert Einstein: O Gênio da Relatividade",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    views: 1542
  },
  {
    id: "marie-curie",
    title: "Marie Curie: Pioneira da Radioatividade",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c1920.jpg/800px-Marie_Curie_c1920.jpg",
    views: 1203
  },
  {
    id: "leonardo-da-vinci",
    title: "Leonardo da Vinci: O Homem Vitruviano",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/800px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
    views: 987
  },
  {
    id: "mahatma-gandhi",
    title: "Mahatma Gandhi: O Poder da Não-Violência",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/800px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    views: 856
  }
];

const MostReadWidget = ({ items = mockMostRead }: MostReadWidgetProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-posthumous-gold" />
        <h3 className="text-xl font-bold font-playfair text-posthumous-navy">
          Mais Lidos
        </h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <Link 
            key={item.id} 
            to={`/biography/${item.id}`}
            className="flex items-center gap-3 group"
          >
            <div className="flex-shrink-0 w-6 text-center">
              <span className="font-playfair font-bold text-lg text-posthumous-gold">
                {index + 1}
              </span>
            </div>
            
            {item.image && (
              <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="flex-grow">
              <h4 className="font-medium text-posthumous-navy group-hover:text-posthumous-gold transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500">
                {item.views.toLocaleString('pt-BR')} visualizações
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostReadWidget;
