
import { ArrowDownAZ } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlphabeticalSearchBarProps {
  onLetterSelect: (letter: string | null) => void;
  selectedLetter: string | null;
}

const AlphabeticalSearchBar = ({ onLetterSelect, selectedLetter }: AlphabeticalSearchBarProps) => {
  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all hover:shadow-xl">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-posthumous-gold/20 p-2.5 rounded-full">
          <ArrowDownAZ className="h-5 w-5 text-posthumous-gold" />
        </div>
        <h3 className="text-2xl font-playfair font-semibold text-posthumous-navy border-b-2 border-posthumous-gold/30 pb-1">Browse Alphabetically</h3>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-2.5">
        {alphabet.map(letter => (
          <Button
            key={letter}
            variant={selectedLetter === letter ? "default" : "outline"} 
            className={`min-w-10 h-10 p-1 rounded-md transition-all duration-300 ${
              selectedLetter === letter 
                ? "bg-posthumous-gold hover:bg-posthumous-gold/90 text-white shadow-md scale-110"
                : "border border-gray-200 hover:bg-posthumous-gold/10 hover:text-posthumous-gold hover:border-posthumous-gold/30"
            }`}
            onClick={() => onLetterSelect(selectedLetter === letter ? null : letter)}
          >
            <span className="font-medium">{letter}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AlphabeticalSearchBar;
