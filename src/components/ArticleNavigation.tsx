
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
  level: number;
}

const ArticleNavigation = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Find all heading elements in the content
    const headings = Array.from(document.querySelectorAll('.biography-content h2, .biography-content h3'));
    
    // Create sections array from headings
    const extractedSections = headings.map((heading, index) => {
      const id = heading.id || `section-${index}`;
      
      // If heading doesn't have an ID, add one
      if (!heading.id) {
        heading.id = id;
      }
      
      return {
        id,
        title: heading.textContent || `Seção ${index + 1}`,
        level: heading.tagName === 'H2' ? 1 : 2
      };
    });
    
    setSections(extractedSections);
    
    // Show navigation only if there are multiple sections
    setIsVisible(extractedSections.length > 1);
  }, []);

  useEffect(() => {
    if (sections.length === 0) return;
    
    const handleScroll = () => {
      // Find the current active section based on scroll position
      const scrollPosition = window.scrollY + 200; // Offset
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
      <h3 className="text-lg font-bold font-playfair text-posthumous-navy mb-4">
        Navegação do Artigo
      </h3>
      
      <ul className="space-y-2">
        {sections.map((section) => (
          <li 
            key={section.id}
            className={cn(
              "transition-all",
              section.level === 1 ? "pl-0" : "pl-4",
            )}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-left w-full py-1 px-2 rounded hover:bg-posthumous-lightgold/20 transition-colors",
                activeSection === section.id
                  ? "text-posthumous-gold font-medium bg-posthumous-lightgold/10"
                  : "text-posthumous-navy"
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-4 flex items-center gap-1 text-sm text-posthumous-gold hover:text-posthumous-darkgold transition-colors"
      >
        <ChevronUp className="h-4 w-4" /> Topo
      </button>
    </nav>
  );
};

export default ArticleNavigation;
