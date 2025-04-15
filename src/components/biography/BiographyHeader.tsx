
import React from 'react';
import TagsList from '@/components/biography/TagsList';
import SocialShareButtons from '@/components/SocialShareButtons';

interface BiographyHeaderProps {
  title: string;
  tags: string[];
  pageUrl: string;
}

const BiographyHeader = ({ tags, pageUrl }: BiographyHeaderProps) => {
  return (
    <div>
      {/* Tags Section */}
      <TagsList tags={tags} showIcons={true} className="mb-6" />
      
      {/* Social Share Buttons */}
      <SocialShareButtons 
        title=""  // Title will be passed from parent
        url={pageUrl}
      />
    </div>
  );
};

export default BiographyHeader;
