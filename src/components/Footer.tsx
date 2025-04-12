
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "./ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-posthumous-lightteal to-posthumous-lightgold/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-posthumous-navy font-playfair">
              Assine Nossa Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Receba atualizações semanais sobre novas biografias, histórias em destaque e eventos históricos.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu endereço de email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-posthumous-gold"
              />
              <Button className="bg-posthumous-gold hover:bg-posthumous-navy transition-colors whitespace-nowrap">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-posthumous-navy text-white pt-12 pb-6">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <h2 className="text-2xl font-playfair font-bold">
                  <span className="text-white">Biografias</span> <span className="text-posthumous-gold">Póstumas</span>
                </h2>
              </Link>
              <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
                Celebrando as vidas e legados de indivíduos notáveis que moldaram nosso mundo. Nossa coleção abrangente homenageia aqueles que fizeram contribuições significativas para a sociedade.
              </p>
              <div className="flex space-x-4 mt-6">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-posthumous-gold/80 transition-colors p-2 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-posthumous-gold/80 transition-colors p-2 rounded-full"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-posthumous-gold/80 transition-colors p-2 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-posthumous-gold/80 transition-colors p-2 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Explorar</h3>
              <ul className="mt-2 space-y-3">
                <li>
                  <Link to="/categoria/artes" className="text-gray-300 hover:text-posthumous-gold transition-colors">Artes</Link>
                </li>
                <li>
                  <Link to="/categoria/politica" className="text-gray-300 hover:text-posthumous-gold transition-colors">Política</Link>
                </li>
                <li>
                  <Link to="/categoria/cinema-tv" className="text-gray-300 hover:text-posthumous-gold transition-colors">Cinema e TV</Link>
                </li>
                <li>
                  <Link to="/categoria/musica" className="text-gray-300 hover:text-posthumous-gold transition-colors">Música</Link>
                </li>
                <li>
                  <Link to="/categoria/ciencia" className="text-gray-300 hover:text-posthumous-gold transition-colors">Ciência</Link>
                </li>
                <li>
                  <Link to="/biografias" className="text-gray-300 hover:text-posthumous-gold transition-colors">Listagem Alfabética</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Sobre Nós</h3>
              <ul className="mt-2 space-y-3">
                <li>
                  <Link to="/sobre" className="text-gray-300 hover:text-posthumous-gold transition-colors">Nossa Missão</Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-300 hover:text-posthumous-gold transition-colors">Contato</Link>
                </li>
                <li>
                  <Link to="/contribuir" className="text-gray-300 hover:text-posthumous-gold transition-colors">Contribuir</Link>
                </li>
                <li>
                  <Link to="/privacidade" className="text-gray-300 hover:text-posthumous-gold transition-colors">Política de Privacidade</Link>
                </li>
                <li>
                  <Link to="/termos" className="text-gray-300 hover:text-posthumous-gold transition-colors">Termos de Serviço</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Biografias Póstumas. Todos os direitos reservados.
              </p>
              <div className="flex items-center mt-4 md:mt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white"
                  onClick={scrollToTop}
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Voltar ao topo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
