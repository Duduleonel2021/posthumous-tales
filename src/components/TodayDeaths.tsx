
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockDeaths } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Skull, ArrowRight } from "lucide-react";

const TodayDeaths = () => {
  const [deathsToday, setDeathsToday] = useState<{id: string, name: string, year: number}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric'
  }).format(today);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we're using mock data
    setTimeout(() => {
      const filteredDeaths = mockDeaths.filter(death => {
        const deathDate = new Date(death.deathDate);
        return deathDate.getMonth() + 1 === month && deathDate.getDate() === day;
      });
      
      setDeathsToday(filteredDeaths.map(death => ({
        id: death.id,
        name: death.name,
        year: new Date(death.deathDate).getFullYear()
      })));
      setIsLoading(false);
    }, 600); // Simulate loading delay
  }, [month, day]);

  // For development only - if no deaths match today's date, show March 17th deaths
  useEffect(() => {
    if (!isLoading && deathsToday.length === 0) {
      setTimeout(() => {
        const marchDeaths = mockDeaths.filter(death => {
          const deathDate = new Date(death.deathDate);
          return deathDate.getMonth() + 1 === 3 && deathDate.getDate() === 17;
        });
        
        setDeathsToday(marchDeaths.map(death => ({
          id: death.id,
          name: death.name,
          year: new Date(death.deathDate).getFullYear()
        })));
      }, 300);
    }
  }, [isLoading, deathsToday.length]);

  return (
    <Card className="bg-posthumous-gray border-posthumous-gold/20 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3 border-b border-posthumous-gold/10">
        <CardTitle className="flex items-center text-xl font-bold text-posthumous-navy">
          <CalendarDays className="h-5 w-5 mr-2 text-posthumous-gold" />
          Deaths on {formattedDate}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        ) : deathsToday.length > 0 ? (
          <ul className="space-y-3 divide-y divide-gray-200">
            {deathsToday.map((person) => (
              <li key={person.id} className="pt-3 group">
                <Link 
                  to={`/biography/${person.id}`}
                  className="flex items-center hover:bg-posthumous-lightgold/30 p-2 rounded-md transition-colors"
                >
                  <Skull className="h-4 w-4 mr-3 text-posthumous-gold/70" />
                  <div className="flex-1">
                    <span className="font-medium text-posthumous-navy group-hover:text-posthumous-gold transition-colors">
                      {person.name}
                    </span>
                    <span className="text-posthumous-text/80 ml-2">
                      ({person.year})
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-posthumous-gold/0 group-hover:text-posthumous-gold/70 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-6">
            <Skull className="h-8 w-8 mx-auto mb-2 text-posthumous-gold/50" />
            <p className="text-posthumous-text/80 italic text-sm">
              No notable deaths recorded for this day in history.
            </p>
          </div>
        )}
        
        {deathsToday.length > 0 && (
          <div className="mt-4 pt-3 border-t border-posthumous-gold/10 text-center">
            <Link 
              to="/deaths-on-this-day"
              className="inline-flex items-center text-sm text-posthumous-gold hover:text-posthumous-navy transition-colors"
            >
              View more historical deaths
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TodayDeaths;
