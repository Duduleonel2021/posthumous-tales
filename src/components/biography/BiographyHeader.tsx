
import React from 'react';
import TagsList from '@/components/biography/TagsList';
import SocialShareButtons from '@/components/SocialShareButtons';

interface BiographyHeaderProps {
  title: string;
  tags: string[];
  pageUrl: string;
}

const BiographyHeader = ({ title, tags, pageUrl }: BiographyHeaderProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold font-playfair text-posthumous-navy mb-4 relative group">
        {title}
        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-posthumous-gold transform transition-all duration-300 group-hover:h-full hidden md:block"></span>
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-posthumous-gold/50 transition-all duration-700 group-hover:w-full md:hidden"></span>
      </h1>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Tags Section - com animação suave */}
        <TagsList 
          tags={tags} 
          showIcons={true} 
          className="mb-0 opacity-0 animate-[fadeIn_0.6s_0.3s_forwards]" 
        />
        
        {/* Social Share Buttons - com animação suave */}
        <SocialShareButtons 
          title={title}
          url={pageUrl}
          className="!mt-0 opacity-0 animate-[fadeIn_0.6s_0.5s_forwards]"
        />
      </div>
    </div>
  );
};

export default BiographyHeader;
