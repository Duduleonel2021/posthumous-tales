
import CategorySection from "@/components/CategorySection";
import { categoryBiographies } from "@/data/mockData";

const CategorySections = () => {
  return (
    <div className="lg:col-span-2 space-y-16">
      <CategorySection 
        title="Artes & Cultura" 
        categorySlug="arts" 
        biographies={categoryBiographies.arts} 
      />
      <CategorySection 
        title="Figuras Políticas" 
        categorySlug="politics" 
        biographies={categoryBiographies.politics} 
      />
      <CategorySection 
        title="Pioneiros Científicos" 
        categorySlug="science" 
        biographies={categoryBiographies.science} 
      />
      <CategorySection 
        title="Lendas da Música" 
        categorySlug="music" 
        biographies={categoryBiographies.music} 
      />
    </div>
  );
};

export default CategorySections;
