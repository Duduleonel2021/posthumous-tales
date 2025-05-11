
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Phone } from "lucide-react";
import { ShareData, getShareLinks } from "./ShareServices";
import { SocialButton } from "./SocialButton";

interface DesktopShareButtonsProps {
  shareData: ShareData;
  onCopy: () => void;
  copied: boolean;
}

export const DesktopShareButtons = ({ 
  shareData, 
  onCopy, 
  copied 
}: DesktopShareButtonsProps) => {
  const shareLinks = getShareLinks(shareData);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-500">Compartilhar:</span>
      
      <div className="flex items-center gap-2 animate-fade-in">
        <SocialButton 
          href={shareLinks.facebook}
          icon={<Facebook className="h-4 w-4 text-blue-600" />}
          ariaLabel="Compartilhar no Facebook"
          className="hover:bg-blue-50"
        />
        
        <SocialButton 
          href={shareLinks.twitter}
          icon={<Twitter className="h-4 w-4 text-sky-500" />}
          ariaLabel="Compartilhar no Twitter"
          className="hover:bg-sky-50"
        />
        
        <SocialButton 
          href={shareLinks.linkedin}
          icon={<Linkedin className="h-4 w-4 text-blue-700" />}
          ariaLabel="Compartilhar no LinkedIn"
          className="hover:bg-blue-50"
        />
        
        <SocialButton 
          href={shareLinks.whatsapp}
          icon={<Phone className="h-4 w-4 text-green-600" />}
          ariaLabel="Compartilhar no WhatsApp"
          className="hover:bg-green-50"
        />
        
        <SocialButton 
          href={shareLinks.email}
          icon={<Mail className="h-4 w-4 text-gray-600" />}
          ariaLabel="Compartilhar por email"
          className="hover:bg-gray-50"
        />
        
        <SocialButton 
          onClick={onCopy}
          icon={<LinkIcon className={`h-4 w-4 ${copied ? 'text-green-500' : 'text-gray-600'}`} />}
          ariaLabel="Copiar link"
          className={copied ? 'bg-green-50 border-green-200 shadow-md' : 'bg-white hover:shadow-md'}
        />
      </div>
    </div>
  );
};
