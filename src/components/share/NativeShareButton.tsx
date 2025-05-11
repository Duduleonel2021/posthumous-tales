
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareData, nativeShare } from "./ShareServices";

interface NativeShareButtonProps {
  shareData: ShareData;
}

export const NativeShareButton = ({ shareData }: NativeShareButtonProps) => {
  const handleNativeShare = () => {
    nativeShare(shareData).catch(error => 
      console.log('Erro ao compartilhar', error)
    );
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-1 rounded-full px-4 bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-sm"
      onClick={handleNativeShare}
    >
      <Share2 className="h-4 w-4 text-posthumous-gold" />
      <span className="text-sm">Compartilhar</span>
    </Button>
  );
};
