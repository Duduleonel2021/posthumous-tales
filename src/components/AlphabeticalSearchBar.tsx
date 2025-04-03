
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownAZ } from "lucide-react";

interface AlphabeticalSearchBarProps {
  onLetterSelect: (letter: string | null) => void;
  selectedLetter: string | null;
}

const AlphabeticalSearchBar = ({ onLetterSelect, selectedLetter }: AlphabeticalSearchBarProps) => {
  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mb-6 bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-posthumous-gold/10 p-2 rounded-full">
          <ArrowDownAZ className="h-5 w-5 text-posthumous-gold" />
        </div>
        <h3 className="text-xl font-playfair font-semibold text-posthumous-navy">Browse Alphabetically</h3>
      </div>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {alphabet.map(letter => (
          <Button
            key={letter}
            variant={selectedLetter === letter ? "default" : "outline"} 
            className={`min-w-8 md:min-w-10 h-8 md:h-10 p-1 md:p-2 rounded-md transition-all duration-200 ${
              selectedLetter === letter 
                ? "bg-posthumous-gold hover:bg-posthumous-gold/90 text-white shadow-md"
                : "border border-gray-200 hover:bg-posthumous-gold/10 hover:text-posthumous-gold hover:border-posthumous-gold/30"
            }`}
            onClick={() => onLetterSelect(selectedLetter === letter ? null : letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AlphabeticalSearchBar;
