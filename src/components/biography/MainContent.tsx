
import React from 'react';
import { Separator } from '@/components/ui/separator';
import SocialShareButtons from '@/components/SocialShareButtons';
import QuoteBlock from '@/components/QuoteBlock';
import TagsList from '@/components/biography/TagsList';
import BiographyContent from '@/components/biography/BiographyContent';
import VideoEmbed from '@/components/biography/VideoEmbed';
import AuthorInfo from '@/components/AuthorInfo';
import ImageCarousel from '@/components/ImageCarousel';

interface MainContentProps {
  biography: {
    id: string;
    title: string;
    tags: string[];
    content: string;
    video: string;
    heroImage: string;
    featuredImages?: {
      src: string;
      alt: string;
      caption?: string;
    }[];
    quotes?: {
      text: string;
      author: string;
    }[];
    fullName: string;
    birthYear: number;
    deathYear: number;
    category: string;
    author: {
      name: string;
      id: string;
      image: string;
      bio: string;
    };
    publishDate: string;
  };
  pageUrl: string;
}

const MainContent = ({ biography, pageUrl }: MainContentProps) => {
  // Featured portrait image for the biography
  const portraitImage = {
    src: biography.heroImage,
    alt: `Retrato de ${biography.fullName}`,
    caption: `${biography.fullName} (${biography.birthYear}-${biography.deathYear}) - ${biography.category}`
  };

  return (
    <article className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
      {/* Tags Section */}
      <TagsList tags={biography.tags} showIcons={true} className="mb-6" />
      
      {/* Social Share Buttons */}
      <SocialShareButtons 
        title={biography.title} 
        url={pageUrl}
      />
      
      {/* Featured Portrait Image and Video */}
      <VideoEmbed 
        videoUrl={biography.video}
        portraitImage={portraitImage}
        fullName={biography.fullName}
        birthYear={biography.birthYear}
        deathYear={biography.deathYear}
        category={biography.category}
      />
      
      {/* Featured Images Carousel */}
      {biography.featuredImages && biography.featuredImages.length > 0 && (
        <div className="my-8">
          <h3 className="text-xl font-bold mb-4">Galeria de Imagens</h3>
          <ImageCarousel images={biography.featuredImages} />
        </div>
      )}
      
      {/* Biography Content */}
      <BiographyContent content={biography.content} />
      
      {/* Featured Quote */}
      {biography.quotes && biography.quotes.length > 0 && (
        <QuoteBlock 
          text={biography.quotes[0].text}
          author={biography.quotes[0].author}
        />
      )}
      
      {/* Tags Bottom */}
      <div className="mt-8">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Tags</h4>
        <TagsList tags={biography.tags} />
      </div>
      
      {/* Social Share Buttons (Bottom) */}
      <div className="mt-8">
        <Separator className="mb-6" />
        <SocialShareButtons 
          title={biography.title} 
          url={pageUrl}
        />
      </div>
      
      {/* Author Info */}
      <AuthorInfo 
        name={biography.author.name}
        id={biography.author.id}
        image={biography.author.image}
        bio={biography.author.bio}
        publishDate={biography.publishDate}
      />
    </article>
  );
};

export default MainContent;
