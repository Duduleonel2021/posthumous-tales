
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
    <div className="group overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100">
      <Link to={`/biografia/${id}`} className="block overflow-hidden">
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
              (e.target as HTMLImageElement).alt = "Placeholder image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex justify-between items-center">
              <span className="text-white text-xs py-1 px-2 bg-posthumous-gold/80 rounded-md">
                {birthYear} — {deathYear}
              </span>
              <span className="text-white text-xs py-1 px-2 bg-posthumous-navy/80 rounded-md">
                Saiba mais
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}>
            <span className="inline-block px-2.5 py-1 text-xs font-semibold text-posthumous-navy bg-posthumous-lightgold rounded-md mb-2 hover:bg-posthumous-gold hover:text-white transition-colors duration-300">
              {category}
            </span>
          </Link>
        </div>
        <Link to={`/biografia/${id}`}>
          <h3 className="text-xl font-playfair font-bold text-posthumous-navy hover:text-posthumous-gold transition-colors duration-300 mb-2 line-clamp-2">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 mt-2">{summary}</p>
      </div>
    </div>
  )
}

export default BiographyCard
