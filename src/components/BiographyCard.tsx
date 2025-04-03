
import { Link } from "react-router-dom"

export interface BiographyCardProps {
  id: string
  name: string
  image: string
  birthYear: number
  deathYear: number
  category: string
  summary: string
}

const BiographyCard = ({
  id,
  name,
  image,
  birthYear,
  deathYear,
  category,
  summary
}: BiographyCardProps) => {
  return (
    <div className="group overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <Link to={`/biography/${id}`} className="block overflow-hidden">
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
              (e.target as HTMLImageElement).alt = "Placeholder image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
          <span className="inline-block px-2.5 py-1 text-xs font-semibold text-posthumous-navy bg-posthumous-lightgold rounded-md mb-2 hover:bg-posthumous-gold hover:text-white transition-colors duration-200">
            {category}
          </span>
        </Link>
        <Link to={`/biography/${id}`}>
          <h3 className="text-xl font-playfair font-bold text-posthumous-navy hover:text-posthumous-gold transition-colors duration-200 mb-1">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-3 font-medium">{birthYear} — {deathYear}</p>
        <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{summary}</p>
      </div>
    </div>
  )
}

export default BiographyCard
