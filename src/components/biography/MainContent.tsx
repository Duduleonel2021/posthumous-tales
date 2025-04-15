
import React from 'react';
import QuoteBlock from '@/components/QuoteBlock';
import BiographyContent from '@/components/biography/BiographyContent';
import VideoEmbed from '@/components/biography/VideoEmbed';
import BiographyHeader from '@/components/biography/BiographyHeader';
import BiographyGallery from '@/components/biography/BiographyGallery';
import BiographyFooter from '@/components/biography/BiographyFooter';

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
      {/* Header: Tags and Social Share */}
      <BiographyHeader 
        title={biography.title}
        tags={biography.tags} 
        pageUrl={pageUrl} 
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
        <BiographyGallery images={biography.featuredImages} />
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
      
      {/* Footer: Tags, Social Share, and Author Info */}
      <BiographyFooter 
        tags={biography.tags}
        title={biography.title}
        pageUrl={pageUrl}
        author={biography.author}
        publishDate={biography.publishDate}
      />
    </article>
  );
};

export default MainContent;
