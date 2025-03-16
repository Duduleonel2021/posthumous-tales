
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockDeaths } from "@/data/mockData";

const TodayDeaths = () => {
  const [deathsToday, setDeathsToday] = useState<{id: string, name: string, year: number}[]>([]);
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we're using mock data
    const filteredDeaths = mockDeaths.filter(death => {
      const deathDate = new Date(death.deathDate);
      return deathDate.getMonth() + 1 === month && deathDate.getDate() === day;
    });
    
    setDeathsToday(filteredDeaths.map(death => ({
      id: death.id,
      name: death.name,
      year: new Date(death.deathDate).getFullYear()
    })));
  }, [month, day]);

  if (deathsToday.length === 0) {
    return null;
  }

  return (
    <div className="bg-posthumous-gray p-4 rounded-lg">
      <h3 className="font-playfair text-xl font-bold text-posthumous-navy mb-3">
        Deaths on This Day - {month}/{day}
      </h3>
      <ul className="space-y-2 divide-y divide-gray-200">
        {deathsToday.map((person) => (
          <li key={person.id} className="pt-2">
            <Link 
              to={`/biography/${person.id}`}
              className="hover:text-posthumous-gold"
            >
              {person.name} ({person.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayDeaths;
