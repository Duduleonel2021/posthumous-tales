
import { Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface SocialShareButtonsProps {
  title: string;
  url: string;
}

const SocialShareButtons = ({ title, url }: SocialShareButtonsProps) => {
  // Encode the title and URL for sharing
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copiado para a área de transferência");
  };

  return (
    <div className="flex items-center gap-2 my-4">
      <span className="text-sm font-medium text-gray-500">Compartilhar:</span>
      
      <div className="flex items-center gap-2">
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no Facebook"
        >
          <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0">
            <Facebook className="h-4 w-4 text-blue-600" />
          </Button>
        </a>
        
        <a 
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no Twitter"
        >
          <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0">
            <Twitter className="h-4 w-4 text-sky-500" />
          </Button>
        </a>
        
        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no LinkedIn"
        >
          <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0">
            <Linkedin className="h-4 w-4 text-blue-700" />
          </Button>
        </a>
        
        <a 
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no WhatsApp"
        >
          <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0">
            <Phone className="h-4 w-4 text-green-600" />
          </Button>
        </a>
        
        <a 
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`} 
          aria-label="Compartilhar por email"
        >
          <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0">
            <Mail className="h-4 w-4 text-gray-600" />
          </Button>
        </a>
        
        <Button 
          size="icon" 
          variant="outline" 
          className="rounded-full w-8 h-8 p-0"
          onClick={copyToClipboard}
          aria-label="Copiar link"
        >
          <LinkIcon className="h-4 w-4 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShareButtons;
