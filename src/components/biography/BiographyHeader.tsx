
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
      <h1 className="text-3xl md:text-4xl font-bold font-playfair text-posthumous-navy mb-4 relative">
        {title}
        <span className="absolute -left-4 top-0 bottom-0 w-1 bg-posthumous-gold hidden md:block"></span>
      </h1>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Tags Section */}
        <TagsList tags={tags} showIcons={true} className="mb-0" />
        
        {/* Social Share Buttons */}
        <SocialShareButtons 
          title={title}
          url={pageUrl}
          className="!mt-0"
        />
      </div>
    </div>
  );
};

export default BiographyHeader;
