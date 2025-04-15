
import React from 'react';

interface BiographyContentContainerProps {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
}

const BiographyContentContainer = ({ 
  mainContent, 
  sidebarContent 
}: BiographyContentContainerProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="w-full lg:w-2/3">
        {mainContent}
      </div>
      
      {/* Sidebar */}
      {sidebarContent}
    </div>
  );
};

export default BiographyContentContainer;
