
import { Search, Palette, Users, Film, Music, Briefcase, BookOpen, Newspaper, Globe, GraduationCap, Beaker, Shield, Heart, Shirt, ArrowDownAZ, Plus, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

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
  "science": <Beaker className="w-4 h-4 mr-1" />,
  "crime": <Shield className="w-4 h-4 mr-1" />,
  "health": <Heart className="w-4 h-4 mr-1" />,
  "fashion": <Shirt className="w-4 h-4 mr-1" />
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-playfair font-bold">
                <span className="text-posthumous-navy">Posthumous</span> <span className="text-posthumous-gold">Biographies</span>
              </h1>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center gap-2 w-full md:w-auto`}>
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search biographies..."
                className="pl-8 border-posthumous-navy/10 focus:border-posthumous-gold focus:ring-posthumous-gold/20 bg-gray-50 rounded-md"
              />
            </div>
            <Button variant="outline" className="border-posthumous-navy/10 hover:bg-posthumous-gold hover:text-white transition-colors">Search</Button>
            <Link to="/biographies" className="hidden sm:block">
              <Button variant="outline" className="border-posthumous-navy/10 hover:bg-posthumous-gold hover:text-white transition-colors">
                <ArrowDownAZ className="h-4 w-4 mr-1" /> A-Z
              </Button>
            </Link>
            <Link to="/post-biography" className="hidden sm:block">
              <Button className="bg-posthumous-navy hover:bg-posthumous-gold transition-colors">
                <Plus className="h-4 w-4 mr-1" /> Post Biography
              </Button>
            </Link>
          </div>
        </div>
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex items-center mt-2 space-x-1 overflow-x-auto pb-2 md:pb-0 flex-wrap`}>
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
          <Link to="/category/sports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gold/10 hover:text-posthumous-navy transition-colors">
            <div className="w-4 h-4 mr-1" /> Sports
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
