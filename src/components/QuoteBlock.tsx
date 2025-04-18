
import { Quote } from "lucide-react";

interface QuoteBlockProps {
  text: string;
  author?: string;
  className?: string;
}

const QuoteBlock = ({ text, author, className = "" }: QuoteBlockProps) => {
  return (
    <div className={`my-6 bg-gradient-to-r from-posthumous-lightgold/20 to-posthumous-lightteal/20 border-l-4 border-posthumous-gold rounded-r-lg relative shadow-md ${className}`}>
      <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center text-posthumous-gold/30">
        <Quote className="h-10 w-10" />
      </div>
      <blockquote className="p-5 pl-14">
        <p className="text-sm md:text-base italic font-playfair text-posthumous-navy leading-relaxed">
          "{text}"
        </p>
        {author && (
          <footer className="mt-2 text-right">
            <cite className="text-posthumous-darkgold font-medium text-sm not-italic">
              — {author}
            </cite>
          </footer>
        )}
      </blockquote>
    </div>
  );
};

export default QuoteBlock;
