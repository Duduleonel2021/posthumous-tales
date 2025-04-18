
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import LatestBiographies from "@/components/home/LatestBiographies";
import CategorySections from "@/components/home/CategorySections";
import SidebarFeatures from "@/components/home/SidebarFeatures";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <LatestBiographies />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CategorySections />
            <SidebarFeatures />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
