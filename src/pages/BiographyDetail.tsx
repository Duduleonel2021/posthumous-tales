
import React from 'react';
import { useParams } from 'react-router-dom';

const BiographyDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Biografia: {id}</h1>
        <p className="text-center text-gray-600">Esta página está em construção.</p>
        {/* Placeholder for the actual biography content */}
      </div>
    </div>
  );
};

export default BiographyDetail;
