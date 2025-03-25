
import { Search, Palette, Users, Film, Music, Briefcase, BookOpen, Newspaper, Globe, GraduationCap, Flask, Shield, Heart, Shirt } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const categoryIcons = {
  "arts": <Palette className="w-4 h-4 mr-1" />,
  "politics": <Users className="w-4 h-4 mr-1" />,
  "cinema-tv": <Film className="w-4 h-4 mr-1" />,
  "music": <Music className="w-4 h-4 mr-1" />,
  "business": <Briefcase className="w-4 h-4 mr-1" />,
  "literature": <BookOpen className="w-4 h-4 mr-1" />,
  "journalism": <Newspaper className="w-4 h-4 mr-1" />,
  "internet": <Globe className="w-4 h-4 mr-1" />,
  "education": <GraduationCap className="w-4 h-4 mr-1" />,
  "science": <Flask className="w-4 h-4 mr-1" />,
  "crime": <Shield className="w-4 h-4 mr-1" />,
  "health": <Heart className="w-4 h-4 mr-1" />,
  "fashion": <Shirt className="w-4 h-4 mr-1" />
}

const Header = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-posthumous-navy">
                Posthumous <span className="text-posthumous-gold">Biographies</span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center w-full max-w-md gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search biographies..."
                className="pl-8 border-posthumous-navy/20 focus:border-posthumous-gold focus:ring-posthumous-gold/20"
              />
            </div>
            <Button variant="outline" className="border-posthumous-navy/20 hover:bg-posthumous-gold hover:text-white">Search</Button>
          </div>
        </div>
        <nav className="flex items-center mt-2 space-x-1 overflow-x-auto pb-2 md:pb-0">
          <Link to="/category/arts" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["arts"]} Arts
          </Link>
          <Link to="/category/politics" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["politics"]} Politics
          </Link>
          <Link to="/category/cinema-tv" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["cinema-tv"]} Cinema & TV
          </Link>
          <Link to="/category/music" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["music"]} Music
          </Link>
          <Link to="/category/business" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["business"]} Business
          </Link>
          <Link to="/category/literature" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["literature"]} Literature
          </Link>
          <Link to="/category/journalism" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["journalism"]} Journalism
          </Link>
          <Link to="/category/internet" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["internet"]} Internet
          </Link>
          <Link to="/category/education" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["education"]} Education
          </Link>
          <Link to="/category/science" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["science"]} Science
          </Link>
          <Link to="/category/crime" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["crime"]} Crime
          </Link>
          <Link to="/category/health" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["health"]} Health
          </Link>
          <Link to="/category/fashion" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            {categoryIcons["fashion"]} Fashion
          </Link>
          <Link to="/category/others" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            <div className="w-4 h-4 mr-1" /> Others
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
