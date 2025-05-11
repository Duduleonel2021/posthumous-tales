
// Funções utilitárias para compartilhamento em redes sociais

export interface ShareData {
  title: string;
  url: string;
}

export const encodeShareData = (data: ShareData) => ({
  encodedTitle: encodeURIComponent(data.title),
  encodedUrl: encodeURIComponent(data.url)
});

export const getShareLinks = (data: ShareData) => {
  const { encodedTitle, encodedUrl } = encodeShareData(data);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Erro ao copiar para a área de transferência:", error);
    return false;
  }
};

export const nativeShare = async (data: ShareData): Promise<boolean> => {
  if (!navigator.share) return false;
  
  try {
    await navigator.share({
      title: data.title,
      url: data.url
    });
    return true;
  } catch (error) {
    console.error("Erro ao compartilhar:", error);
    return false;
  }
};

export const isWebShareSupported = (): boolean => {
  return typeof navigator !== 'undefined' && !!navigator.share;
};
