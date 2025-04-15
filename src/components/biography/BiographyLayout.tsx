
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/biography/HeroSection';

interface BiographyLayoutProps {
  children: React.ReactNode;
  heroImage: string;
  title: string;
  publishDate: string;
  category: string;
}

const BiographyLayout = ({ 
  children, 
  heroImage, 
  title, 
  publishDate, 
  category 
}: BiographyLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          heroImage={heroImage}
          title={title}
          publishDate={publishDate}
          category={category}
        />

        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BiographyLayout;
