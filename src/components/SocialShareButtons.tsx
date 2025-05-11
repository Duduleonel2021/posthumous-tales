
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { isWebShareSupported, ShareData } from "./share/ShareServices";
import { DesktopShareButtons } from "./share/DesktopShareButtons";
import { MobileShareMenu } from "./share/MobileShareMenu";
import { NativeShareButton } from "./share/NativeShareButton";

interface SocialShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

const SocialShareButtons = ({ title, url, className = "" }: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const [hasNativeShare, setHasNativeShare] = useState(false);
  const shareData: ShareData = { title, url };
  
  // Verificar se Web Share API está disponível quando o componente é montado
  useEffect(() => {
    setHasNativeShare(isWebShareSupported());
  }, []);
  
  const handleCopy = () => {
    toast.success("Link copiado para a área de transferência");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center gap-2 my-4 animate-fade-in ${className}`}>
      {hasNativeShare ? (
        <NativeShareButton shareData={shareData} />
      ) : (
        <>
          {/* Versão para desktop */}
          <div className="hidden md:flex items-center gap-2">
            <DesktopShareButtons 
              shareData={shareData}
              onCopy={handleCopy}
              copied={copied}
            />
          </div>
          
          {/* Versão para dispositivos móveis com dropdown mais compacto */}
          <div className="md:hidden">
            <MobileShareMenu 
              shareData={shareData}
              onCopy={handleCopy}
              copied={copied}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SocialShareButtons;
