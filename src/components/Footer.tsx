
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-posthumous-navy text-white">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Posthumous Biographies</h2>
            <p className="mt-4 text-gray-300">
              Celebrating the lives and legacies of remarkable individuals who have passed away.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/arts" className="text-gray-300 hover:text-white">Arts</Link>
              </li>
              <li>
                <Link to="/category/politics" className="text-gray-300 hover:text-white">Politics</Link>
              </li>
              <li>
                <Link to="/category/cinema-tv" className="text-gray-300 hover:text-white">Cinema & TV</Link>
              </li>
              <li>
                <Link to="/category/music" className="text-gray-300 hover:text-white">Music</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/contribute" className="text-gray-300 hover:text-white">Contribute</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} Posthumous Biographies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
