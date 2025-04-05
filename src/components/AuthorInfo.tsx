
import { User } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthorInfoProps {
  name: string;
  id: string;
  image?: string;
  bio?: string;
  publishDate?: string;
}

const AuthorInfo = ({ name, id, image, bio, publishDate }: AuthorInfoProps) => {
  return (
    <div className="flex items-center gap-4 my-6 p-4 bg-posthumous-gray rounded-lg">
      <div className="flex-shrink-0">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-posthumous-lightgold flex items-center justify-center">
            <User className="h-6 w-6 text-posthumous-navy" />
          </div>
        )}
      </div>
      
      <div>
        <Link 
          to={`/autor/${id}`}
          className="text-base font-medium text-posthumous-navy hover:text-posthumous-gold transition-colors"
        >
          {name}
        </Link>
        
        {bio && <p className="text-sm text-gray-600 mt-1">{bio}</p>}
        
        {publishDate && (
          <p className="text-xs text-gray-500 mt-1">
            Publicado em {publishDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthorInfo;
