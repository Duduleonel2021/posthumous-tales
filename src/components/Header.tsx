
import React, { useState } from "react";
import { Search, Palette, Users, Film, Music, Briefcase, BookOpen, Newspaper, Globe, GraduationCap, Beaker, Shield, Heart, Shirt, ArrowDownAZ, Plus, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const categoryIcons = {
  "artes": <Palette className="w-4 h-4 mr-1" />,
  "politica": <Users className="w-4 h-4 mr-1" />,
  "cinema-tv": <Film className="w-4 h-4 mr-1" />,
  "musica": <Music className="w-4 h-4 mr-1" />,
  "negocios": <Briefcase className="w-4 h-4 mr-1" />,
  "literatura": <BookOpen className="w-4 h-4 mr-1" />,
  "jornalismo": <Newspaper className="w-4 h-4 mr-1" />,
  "internet": <Globe className="w-4 h-4 mr-1" />,
  "educacao": <GraduationCap className="w-4 h-4 mr-1" />,
  "ciencia": <Beaker className="w-4 h-4 mr-1" />,
  "crime": <Shield className="w-4 h-4 mr-1" />,
  "saude": <Heart className="w-4 h-4 mr-1" />,
  "moda": <Shirt className="w-4 h-4 mr-1" />
}

const categoryNames = {
  "artes": "Artes",
  "politica": "Política",
  "cinema-tv": "Cinema e TV",
  "musica": "Música",
  "negocios": "Negócios",
  "literatura": "Literatura",
  "jornalismo": "Jornalismo",
  "internet": "Internet",
  "educacao": "Educação",
  "ciencia": "Ciência",
  "crime": "Crime",
  "saude": "Saúde",
  "moda": "Moda"
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <div className="bg-posthumous-navy py-1 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-xs capitalize">{currentDate}</p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-xs hover:text-posthumous-gold">Newsletter</a>
              <span className="text-xs">|</span>
              <a href="#" className="text-xs hover:text-posthumous-gold">Contato</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="border-b border-gray-200 shadow-sm py-5">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-3xl font-playfair font-bold">
                <span className="text-posthumous-navy">Biografias</span> <span className="text-posthumous-gold">Póstumas</span>
              </h1>
            </Link>
            
            <div className="hidden md:flex items-center gap-4">
              {!searchOpen ? (
                <>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-600 hover:text-posthumous-navy hover:bg-transparent"
                    onClick={() => setSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                  <Link to="/biografias">
                    <Button variant="ghost" className="text-gray-600 hover:text-posthumous-navy hover:bg-transparent">
                      <ArrowDownAZ className="h-5 w-5 mr-1" /> Índice A-Z
                    </Button>
                  </Link>
                  <Link to="/postar-biografia">
                    <Button className="bg-posthumous-gold hover:bg-posthumous-navy transition-colors">
                      <Plus className="h-4 w-4 mr-1" /> Postar Biografia
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-2 w-full max-w-md">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Pesquisar biografias..."
                      className="pl-10 pr-4 border-posthumous-navy/10 focus:border-posthumous-gold focus:ring-posthumous-gold/20"
                      autoFocus
                    />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Category Nav */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container px-4 mx-auto">
          <div className="flex items-center overflow-x-auto py-3 scrollbar-hide">
            {Object.entries(categoryIcons).map(([category, icon]) => (
              <Link 
                key={category}
                to={`/categoria/${category}`}
                className="flex items-center px-3 py-2 text-sm font-medium whitespace-nowrap hover:text-posthumous-gold hover:bg-gray-50 rounded-md mx-1 transition-colors"
              >
                {icon} {categoryNames[category as keyof typeof categoryNames]}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="container px-4 py-4 mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Pesquisar biografias..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-posthumous-gold"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <Link 
                to="/biografias"
                className="flex items-center px-3 py-2 text-posthumous-navy font-medium hover:bg-posthumous-gold/10 rounded-md"
              >
                <ArrowDownAZ className="h-5 w-5 mr-2" /> Índice Alfabético
              </Link>
              <Link 
                to="/postar-biografia"
                className="flex items-center px-3 py-2 text-posthumous-navy font-medium hover:bg-posthumous-gold/10 rounded-md"
              >
                <Plus className="h-5 w-5 mr-2" /> Postar Biografia
              </Link>
            </div>
            
            <div className="mt-4">
              <h3 className="px-3 font-medium text-sm text-gray-500 mb-2">Categorias</h3>
              <div className="grid grid-cols-2 gap-1">
                {Object.entries(categoryIcons).map(([category, icon]) => (
                  <Link 
                    key={category}
                    to={`/categoria/${category}`}
                    className="flex items-center px-3 py-2 text-posthumous-navy hover:bg-posthumous-gold/10 rounded-md"
                  >
                    {icon} {categoryNames[category as keyof typeof categoryNames]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
