
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockDeaths } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Skull } from "lucide-react";

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

  return (
    <Card className="bg-posthumous-gray border-posthumous-gold/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-xl font-bold text-posthumous-navy">
          <CalendarDays className="h-5 w-5 mr-2" />
          Deaths on {formattedDate}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        ) : deathsToday.length > 0 ? (
          <ul className="space-y-2 divide-y divide-gray-200">
            {deathsToday.map((person) => (
              <li key={person.id} className="pt-2 flex items-center">
                <Skull className="h-3.5 w-3.5 mr-2 text-posthumous-gold/70" />
                <Link 
                  to={`/biography/${person.id}`}
                  className="hover:text-posthumous-gold transition-colors"
                >
                  {person.name} ({person.year})
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-posthumous-text/80 italic text-sm">
            No notable deaths recorded for this day in history.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TodayDeaths;
