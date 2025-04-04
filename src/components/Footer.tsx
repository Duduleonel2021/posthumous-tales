
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
      <div className="bg-posthumous-navy/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-posthumous-navy font-playfair">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Get weekly updates on new biographies, featured stories, and historical events.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-posthumous-gold"
              />
              <Button className="bg-posthumous-gold hover:bg-posthumous-navy transition-colors whitespace-nowrap">
                Subscribe
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
                  <span className="text-white">Posthumous</span> <span className="text-posthumous-gold">Biographies</span>
                </h2>
              </Link>
              <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
                Celebrating the lives and legacies of remarkable individuals who shaped our world. Our comprehensive collection honors those who made significant contributions to society.
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
              <h3 className="text-xl font-playfair font-semibold mb-4">Explore</h3>
              <ul className="mt-2 space-y-3">
                <li>
                  <Link to="/category/arts" className="text-gray-300 hover:text-posthumous-gold transition-colors">Arts</Link>
                </li>
                <li>
                  <Link to="/category/politics" className="text-gray-300 hover:text-posthumous-gold transition-colors">Politics</Link>
                </li>
                <li>
                  <Link to="/category/cinema-tv" className="text-gray-300 hover:text-posthumous-gold transition-colors">Cinema & TV</Link>
                </li>
                <li>
                  <Link to="/category/music" className="text-gray-300 hover:text-posthumous-gold transition-colors">Music</Link>
                </li>
                <li>
                  <Link to="/category/science" className="text-gray-300 hover:text-posthumous-gold transition-colors">Science</Link>
                </li>
                <li>
                  <Link to="/biographies" className="text-gray-300 hover:text-posthumous-gold transition-colors">Alphabetical Listing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">About Us</h3>
              <ul className="mt-2 space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-posthumous-gold transition-colors">Our Mission</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-posthumous-gold transition-colors">Contact</Link>
                </li>
                <li>
                  <Link to="/contribute" className="text-gray-300 hover:text-posthumous-gold transition-colors">Contribute</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-posthumous-gold transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-posthumous-gold transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Posthumous Biographies. All rights reserved.
              </p>
              <div className="flex items-center mt-4 md:mt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white"
                  onClick={scrollToTop}
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Back to top
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
