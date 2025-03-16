
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
    <div className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link to={`/biography/${id}`}>
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48"
        />
      </Link>
      <div className="p-4">
        <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
          <span className="inline-block px-2 py-1 text-xs font-semibold text-posthumous-navy bg-posthumous-lightgold rounded-md mb-2">
            {category}
          </span>
        </Link>
        <Link to={`/biography/${id}`}>
          <h3 className="text-xl font-bold text-posthumous-navy hover:text-posthumous-gold transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{birthYear}-{deathYear}</p>
        <p className="text-sm text-gray-700 line-clamp-3">{summary}</p>
      </div>
    </div>
  )
}

export default BiographyCard
