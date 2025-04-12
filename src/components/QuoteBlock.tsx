
import { Quote } from "lucide-react";

interface QuoteBlockProps {
  text: string;
  author?: string;
  className?: string;
}

const QuoteBlock = ({ text, author, className = "" }: QuoteBlockProps) => {
  return (
    <div className={`my-8 bg-gradient-to-r from-posthumous-lightgold/30 to-posthumous-lightteal/30 border-l-4 border-posthumous-gold rounded-r-lg relative ${className}`}>
      <div className="absolute top-0 left-0 w-20 h-20 flex items-center justify-center text-posthumous-gold/20">
        <Quote className="h-14 w-14" />
      </div>
      <blockquote className="p-8 pl-12">
        <p className="text-xl md:text-2xl italic font-playfair text-posthumous-navy leading-relaxed">
          "{text}"
        </p>
        {author && (
          <footer className="mt-4 text-right">
            <cite className="text-posthumous-darkgold font-medium not-italic">
              — {author}
            </cite>
          </footer>
        )}
      </blockquote>
    </div>
  );
};

export default QuoteBlock;
