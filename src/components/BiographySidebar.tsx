
import { Calendar, Globe, Link, MapPin, User } from "lucide-react";
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
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
      <h3 className="text-lg font-bold mb-4 text-posthumous-navy">Informações Biográficas</h3>
      <Separator className="mb-4" />
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500">Nome Completo</h4>
          <p className="font-medium">{fullName}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> Nascimento
          </h4>
          <p className="font-medium">{birthDate}</p>
          <p className="text-sm flex items-center text-gray-600">
            <MapPin className="w-3 h-3 mr-1" /> {birthPlace}
          </p>
        </div>
        
        {deathDate && (
          <div>
            <h4 className="text-sm font-semibold text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Falecimento
            </h4>
            <p className="font-medium">{deathDate}</p>
            {deathPlace && (
              <p className="text-sm flex items-center text-gray-600">
                <MapPin className="w-3 h-3 mr-1" /> {deathPlace}
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
              <Globe className="w-4 h-4 mr-1" /> Website
            </h4>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline truncate block"
            >
              {new URL(website).hostname}
            </a>
          </div>
        )}
        
        {socialLinks && socialLinks.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-500 flex items-center">
              <Link className="w-4 h-4 mr-1" /> Links Sociais
            </h4>
            <div className="space-y-1 mt-1">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block"
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
