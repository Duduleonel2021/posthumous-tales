
import { useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components para melhorar o desempenho
const LatestBiographies = lazy(() => import("@/components/home/LatestBiographies"));
const CategorySections = lazy(() => import("@/components/home/CategorySections"));
const SidebarFeatures = lazy(() => import("@/components/home/SidebarFeatures"));

// Loader component para os componentes com lazy loading
const ComponentLoader = () => (
  <div className="w-full p-4 space-y-4">
    <Skeleton className="h-12 w-1/3" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton className="h-64 rounded-lg" />
      <Skeleton className="h-64 rounded-lg" />
      <Skeleton className="h-64 rounded-lg" />
    </div>
  </div>
);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <Suspense fallback={<ComponentLoader />}>
          <LatestBiographies />
        </Suspense>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Suspense fallback={<ComponentLoader />}>
              <CategorySections />
            </Suspense>
            
            <Suspense fallback={<div className="lg:col-span-1"><ComponentLoader /></div>}>
              <SidebarFeatures />
            </Suspense>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
