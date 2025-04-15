
import React from 'react';
import CommentSection from '@/components/CommentSection';
import RelatedBiographiesHub from '@/components/RelatedBiographiesHub';

interface RelatedBiography {
  id: string;
  name: string;
  image: string;
  birthYear: number;
  deathYear: number;
  category: string;
  summary: string;
}

interface BiographyExtrasProps {
  biographyId: string;
  categoryName: string;
  relatedBiographies: RelatedBiography[];
}

const BiographyExtras = ({ 
  biographyId, 
  categoryName,
  relatedBiographies 
}: BiographyExtrasProps) => {
  return (
    <>
      {/* Comments Section */}
      <CommentSection biographyId={biographyId} comments={[]} />
      
      {/* Related Biographies */}
      <RelatedBiographiesHub 
        categoryName={categoryName}
        relatedBiographies={relatedBiographies}
      />
    </>
  );
};

export default BiographyExtras;
