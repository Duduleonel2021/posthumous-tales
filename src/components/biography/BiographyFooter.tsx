
import React from 'react';
import { Separator } from '@/components/ui/separator';
import SocialShareButtons from '@/components/SocialShareButtons';
import TagsList from '@/components/biography/TagsList';
import AuthorInfo from '@/components/AuthorInfo';

interface BiographyFooterProps {
  tags: string[];
  title: string;
  pageUrl: string;
  author: {
    name: string;
    id: string;
    image: string;
    bio: string;
  };
  publishDate: string;
}

const BiographyFooter = ({ 
  tags, 
  title, 
  pageUrl, 
  author, 
  publishDate 
}: BiographyFooterProps) => {
  return (
    <div>
      {/* Tags Bottom */}
      <div className="mt-8">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Tags</h4>
        <TagsList tags={tags} />
      </div>
      
      {/* Social Share Buttons (Bottom) */}
      <div className="mt-8">
        <Separator className="mb-6" />
        <SocialShareButtons 
          title={title} 
          url={pageUrl}
        />
      </div>
      
      {/* Author Info */}
      <AuthorInfo 
        name={author.name}
        id={author.id}
        image={author.image}
        bio={author.bio}
        publishDate={publishDate}
      />
    </div>
  );
};

export default BiographyFooter;
