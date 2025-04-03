
import { Link } from "react-router-dom"
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-posthumous-navy text-white pt-12 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-playfair font-bold mb-2">Posthumous Biographies</h2>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
              Celebrating the lives and legacies of remarkable individuals who shaped our world. Our comprehensive collection honors those who made significant contributions to society.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
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
            <p className="text-center text-gray-400 text-sm mt-2 md:mt-0">
              Designed with respect for those who shaped history
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
