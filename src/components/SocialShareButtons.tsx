
import { Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface SocialShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

const SocialShareButtons = ({ title, url, className = "" }: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const [hasNativeShare, setHasNativeShare] = useState(false);
  
  // Verificar se Web Share API está disponível quando o componente é montado
  useEffect(() => {
    setHasNativeShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);
  
  // Encode the title and URL for sharing
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copiado para a área de transferência");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compartilhar usando a Web Share API se disponível
  const nativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url
      })
      .catch(error => console.log('Erro ao compartilhar', error));
    }
  };

  return (
    <div className={`flex items-center gap-2 my-4 animate-fade-in ${className}`}>
      {hasNativeShare ? (
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 rounded-full px-4 bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-sm"
          onClick={nativeShare}
        >
          <Share2 className="h-4 w-4 text-posthumous-gold" />
          <span className="text-sm">Compartilhar</span>
        </Button>
      ) : (
        <div className="hidden md:flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">Compartilhar:</span>
          
          <div className="flex items-center gap-2 animate-fade-in">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no Facebook"
              className="transition-transform hover:scale-110"
            >
              <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0 bg-white hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                <Facebook className="h-4 w-4 text-blue-600" />
              </Button>
            </a>
            
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no Twitter"
              className="transition-transform hover:scale-110"
            >
              <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0 bg-white hover:bg-sky-50 hover:shadow-md transition-all duration-300">
                <Twitter className="h-4 w-4 text-sky-500" />
              </Button>
            </a>
            
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no LinkedIn"
              className="transition-transform hover:scale-110"
            >
              <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0 bg-white hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                <Linkedin className="h-4 w-4 text-blue-700" />
              </Button>
            </a>
            
            <a 
              href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no WhatsApp"
              className="transition-transform hover:scale-110"
            >
              <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0 bg-white hover:bg-green-50 hover:shadow-md transition-all duration-300">
                <Phone className="h-4 w-4 text-green-600" />
              </Button>
            </a>
            
            <a 
              href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`} 
              aria-label="Compartilhar por email"
              className="transition-transform hover:scale-110"
            >
              <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0 bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </a>
            
            <Button 
              size="icon" 
              variant="outline" 
              className={`rounded-full w-8 h-8 p-0 transition-all duration-300 ${copied ? 'bg-green-50 border-green-200 shadow-md' : 'bg-white hover:shadow-md'}`}
              onClick={copyToClipboard}
              aria-label="Copiar link"
            >
              <LinkIcon className={`h-4 w-4 ${copied ? 'text-green-500' : 'text-gray-600'}`} />
            </Button>
          </div>
        </div>
      )}
      
      {/* Versão para dispositivos móveis com dropdown mais compacto */}
      <div className={hasNativeShare ? "hidden" : "md:hidden"}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <Share2 className="h-4 w-4 text-posthumous-gold mr-2" />
              <span className="text-xs">Compartilhar</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 animate-fade-in">
            <DropdownMenuItem asChild className="focus:bg-blue-50">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
                Facebook
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="focus:bg-sky-50">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4 text-sky-500" />
                Twitter
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="focus:bg-blue-50">
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4 text-blue-700" />
                LinkedIn
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="focus:bg-green-50">
              <a 
                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-green-600" />
                WhatsApp
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={copyToClipboard} className="flex items-center gap-2">
              <LinkIcon className={`h-4 w-4 ${copied ? 'text-green-500' : ''}`} />
              {copied ? "Copiado!" : "Copiar link"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SocialShareButtons;
