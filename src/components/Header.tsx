
import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
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
                className="pl-8"
              />
            </div>
            <Button variant="outline">Search</Button>
          </div>
        </div>
        <nav className="flex items-center mt-2 space-x-1 overflow-x-auto pb-2 md:pb-0">
          <Link to="/category/arts" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Arts</Link>
          <Link to="/category/politics" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Politics</Link>
          <Link to="/category/cinema-tv" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Cinema & TV</Link>
          <Link to="/category/music" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Music</Link>
          <Link to="/category/business" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Business</Link>
          <Link to="/category/literature" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Literature</Link>
          <Link to="/category/journalism" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Journalism</Link>
          <Link to="/category/internet" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Internet</Link>
          <Link to="/category/education" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Education</Link>
          <Link to="/category/science" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Science</Link>
          <Link to="/category/crime" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Crime</Link>
          <Link to="/category/health" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Health</Link>
          <Link to="/category/fashion" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Fashion</Link>
          <Link to="/category/others" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-posthumous-gray hover:text-posthumous-navy">Others</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
