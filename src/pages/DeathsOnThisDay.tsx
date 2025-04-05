
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import BiographyCard from "@/components/BiographyCard";

// Mock data for deaths on this day
// In a real app, this would come from an API based on the current date
const mockDeathsToday = [
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    birthYear: 1879,
    deathYear: 1955,
    deathMonth: 4,
    deathDay: 18,
    category: "Science",
    summary: "German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time."
  },
  {
    id: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/800px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
    birthYear: 1452,
    deathYear: 1519,
    deathMonth: 5,
    deathDay: 2,
    category: "Art",
    summary: "Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect."
  },
  {
    id: "william-shakespeare",
    name: "William Shakespeare",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/800px-Shakespeare.jpg",
    birthYear: 1564,
    deathYear: 1616,
    deathMonth: 4,
    deathDay: 23,
    category: "Literature",
    summary: "English playwright, poet and actor, widely regarded as the greatest writer in the English language."
  },
  {
    id: "marie-curie",
    name: "Marie Curie",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c1920.jpg/800px-Marie_Curie_c1920.jpg",
    birthYear: 1867,
    deathYear: 1934,
    deathMonth: 7,
    deathDay: 4,
    category: "Science",
    summary: "Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity."
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/800px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    birthYear: 1869,
    deathYear: 1948,
    deathMonth: 1,
    deathDay: 30,
    category: "Politics",
    summary: "Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence."
  },
  {
    id: "ludwig-van-beethoven",
    name: "Ludwig van Beethoven",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/800px-Beethoven.jpg",
    birthYear: 1770,
    deathYear: 1827,
    deathMonth: 3,
    deathDay: 26,
    category: "Music",
    summary: "German composer and pianist who is among the most influential figures in the history of Western music."
  }
];

const DeathsOnThisDay = () => {
  const [deaths, setDeaths] = useState<any[]>([]);
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed
  const currentDay = today.getDate();
  
  useEffect(() => {
    // Filter deaths that occurred on this day in history
    // In a real app, this would be an API call based on the current date
    const deathsOnThisDay = mockDeathsToday.filter(
      person => person.deathMonth === currentMonth && person.deathDay === currentDay
    );
    
    // If no deaths on this exact day, just return a few for demonstration
    setDeaths(deathsOnThisDay.length > 0 ? deathsOnThisDay : mockDeathsToday.slice(0, 3));
  }, [currentMonth, currentDay]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="bg-posthumous-navy text-white rounded-xl shadow-xl p-8 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-posthumous-gold/20 p-3 rounded-full">
              <CalendarDays className="h-8 w-8 text-posthumous-gold" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-playfair">Deaths On This Day</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Remembering notable individuals who passed away on {format(today, "MMMM d")} throughout history.
            Their legacies continue to inspire and influence our world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {deaths.map((person) => (
            <BiographyCard
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
              birthYear={person.birthYear}
              deathYear={person.deathYear}
              category={person.category}
              summary={person.summary}
            />
          ))}
        </div>
        
        {deaths.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-posthumous-navy mb-4">No recorded deaths on this day</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our database doesn't have any records of notable deaths on today's date. 
              Check back tomorrow or explore our other biographies.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default DeathsOnThisDay;
