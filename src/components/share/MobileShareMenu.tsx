
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Phone } from "lucide-react";
import { ShareData, getShareLinks, copyToClipboard } from "./ShareServices";
import { useState } from "react";

interface MobileShareMenuProps {
  shareData: ShareData;
  onCopy: () => void;
  copied: boolean;
}

export const MobileShareMenu = ({ shareData, onCopy, copied }: MobileShareMenuProps) => {
  const shareLinks = getShareLinks(shareData);

  const handleCopy = async () => {
    await copyToClipboard(shareData.url);
    onCopy();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Share2 className="h-4 w-4 text-posthumous-gold mr-2" />
          <span className="text-xs">Compartilhar</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 animate-fade-in">
        <DropdownMenuItem asChild className="focus:bg-blue-50">
          <a 
            href={shareLinks.facebook}
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
            href={shareLinks.twitter}
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
            href={shareLinks.linkedin}
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
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Phone className="h-4 w-4 text-green-600" />
            WhatsApp
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopy} className="flex items-center gap-2">
          <LinkIcon className={`h-4 w-4 ${copied ? 'text-green-500' : ''}`} />
          {copied ? "Copiado!" : "Copiar link"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
