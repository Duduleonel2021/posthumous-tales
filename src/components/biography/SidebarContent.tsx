
import React from 'react';
import BiographySidebar from '@/components/BiographySidebar';
import MostReadWidget from '@/components/MostReadWidget';
import QuoteBlock from '@/components/QuoteBlock';

interface SidebarContentProps {
  biography: {
    fullName: string;
    birthDate: string;
    birthPlace: string;
    deathDate?: string;
    deathPlace?: string;
    causeOfDeath?: string;
    website?: string;
    socialLinks?: {
      platform: string;
      url: string;
    }[];
    quotes?: {
      text: string;
      author: string;
    }[];
  };
}

const SidebarContent = ({ biography }: SidebarContentProps) => {
  return (
    <div className="w-full lg:w-1/3 space-y-8">
      {/* Wiki-style Sidebar */}
      <BiographySidebar
        fullName={biography.fullName}
        birthDate={biography.birthDate}
        birthPlace={biography.birthPlace}
        deathDate={biography.deathDate}
        deathPlace={biography.deathPlace}
        causeOfDeath={biography.causeOfDeath}
        website={biography.website}
        socialLinks={biography.socialLinks}
      />
      
      {/* Most Read Widget - Moved before the quote */}
      <MostReadWidget items={[]} />
      
      {/* Quote moved to the bottom of the sidebar */}
      {biography.quotes && biography.quotes.length > 1 && (
        <QuoteBlock 
          text={biography.quotes[1].text}
          author={biography.quotes[1].author}
          className="mt-8"
        />
      )}
    </div>
  );
};

export default SidebarContent;
