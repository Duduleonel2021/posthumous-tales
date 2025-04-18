
import { Link } from "react-router-dom";
import FeaturedBiographies from "@/components/FeaturedBiographies";
import { featuredBiographies } from "@/data/mockData";

const HeroSection = () => {
  return (
    <div className="bg-white pt-6 pb-8">
      <div className="container mx-auto px-4">
        <FeaturedBiographies biographies={featuredBiographies} />
      </div>
    </div>
  );
};

export default HeroSection;
