
import { Calendar, Globe, Link as LinkIcon, MapPin, User } from "lucide-react";
import { Separator } from "./ui/separator";

interface SocialLink {
  platform: string;
  url: string;
}

interface BiographySidebarProps {
  fullName: string;
  birthDate: string;
  birthPlace: string;
  deathDate?: string;
  deathPlace?: string;
  causeOfDeath?: string;
  website?: string;
  socialLinks?: SocialLink[];
}

const BiographySidebar = ({
  fullName,
  birthDate,
  birthPlace,
  deathDate,
  deathPlace,
  causeOfDeath,
  website,
  socialLinks,
}: BiographySidebarProps) => {
  return (
    <div className="biography-sidebar">
      <h3 className="text-xl font-bold mb-4 text-posthumous-navy font-playfair after:content-[''] after:block after:w-16 after:h-0.5 after:bg-posthumous-gold after:mt-2">
        Informações Biográficas
      </h3>
      <Separator className="mb-4" />
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500">Nome Completo</h4>
          <p className="font-medium">{fullName}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-posthumous-gold" /> Nascimento
          </h4>
          <p className="font-medium">{birthDate}</p>
          <p className="text-sm flex items-center text-gray-600">
            <MapPin className="w-3 h-3 mr-1 text-posthumous-gold/70" /> {birthPlace}
          </p>
        </div>
        
        {deathDate && (
          <div>
            <h4 className="text-sm font-semibold text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-posthumous-gold" /> Falecimento
            </h4>
            <p className="font-medium">{deathDate}</p>
            {deathPlace && (
              <p className="text-sm flex items-center text-gray-600">
                <MapPin className="w-3 h-3 mr-1 text-posthumous-gold/70" /> {deathPlace}
              </p>
            )}
          </div>
        )}
        
        {causeOfDeath && (
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Causa da Morte</h4>
            <p className="font-medium">{causeOfDeath}</p>
          </div>
        )}
        
        {website && (
          <div>
            <h4 className="text-sm font-semibold text-gray-500 flex items-center">
              <Globe className="w-4 h-4 mr-1 text-posthumous-gold" /> Website
            </h4>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-posthumous-gold hover:text-posthumous-navy transition-colors hover:underline truncate block"
            >
              {new URL(website).hostname}
            </a>
          </div>
        )}
        
        {socialLinks && socialLinks.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-500 flex items-center">
              <LinkIcon className="w-4 h-4 mr-1 text-posthumous-gold" /> Links Sociais
            </h4>
            <div className="space-y-2 mt-1">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-posthumous-gold hover:text-posthumous-navy transition-colors hover:underline block"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiographySidebar;
