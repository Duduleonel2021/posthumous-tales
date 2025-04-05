
import { Quote } from "lucide-react";

interface QuoteBlockProps {
  text: string;
  author?: string;
  className?: string;
}

const QuoteBlock = ({ text, author, className = "" }: QuoteBlockProps) => {
  return (
    <div className={`my-8 px-6 py-8 bg-posthumous-lightgold/20 border-l-4 border-posthumous-gold rounded-r-lg relative ${className}`}>
      <Quote className="absolute top-4 left-4 h-8 w-8 text-posthumous-gold/20" />
      <blockquote className="pl-6">
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
