
import { Link } from "react-router-dom";
import { Tag } from "lucide-react";

interface TagsListProps {
  tags: string[];
  showIcons?: boolean;
  className?: string;
}

const TagsList = ({ tags, showIcons = false, className = "" }: TagsListProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link 
          key={tag} 
          to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
          className={`text-${showIcons ? 'xs' : 'sm'} ${showIcons ? 'flex items-center gap-1' : ''} bg-gray-100 text-posthumous-navy px-3 py-1 rounded-full hover:bg-gray-200 transition-colors`}
        >
          {showIcons && <Tag className="h-3 w-3" />}
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default TagsList;
