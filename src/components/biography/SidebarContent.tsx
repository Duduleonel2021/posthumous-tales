
import React from 'react';
import BiographySidebar from '@/components/BiographySidebar';
import MostReadWidget from '@/components/MostReadWidget';
import QuoteBlock from '@/components/QuoteBlock';
import { Card, CardContent } from '@/components/ui/card';

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
      {/* Wiki-style Sidebar with biographical information */}
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
      
      {/* Quote in a clearly separated card */}
      {biography.quotes && biography.quotes.length > 1 && (
        <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-r from-posthumous-navy/5 to-posthumous-gold/5">
          <CardContent className="p-6">
            <QuoteBlock 
              text={biography.quotes[1].text}
              author={biography.quotes[1].author}
              className="!my-0 !shadow-none !border-0 !bg-transparent"
            />
          </CardContent>
        </Card>
      )}
      
      {/* Most Read Widget at the bottom of sidebar */}
      <MostReadWidget items={[]} />
    </div>
  );
};

export default SidebarContent;
