
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SocialButtonProps {
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
  label?: string;
  className?: string;
  ariaLabel: string;
}

export const SocialButton = ({
  href,
  onClick,
  icon,
  label,
  className = "",
  ariaLabel,
}: SocialButtonProps) => {
  // Se tiver href, renderiza como link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="transition-transform hover:scale-110"
      >
        <Button
          size="icon"
          variant="outline"
          className={`rounded-full w-8 h-8 p-0 bg-white hover:shadow-md transition-all duration-300 ${className}`}
        >
          {icon}
        </Button>
      </a>
    );
  }

  // Caso contrário, renderiza como botão
  return (
    <Button
      size="icon"
      variant="outline"
      className={`rounded-full w-8 h-8 p-0 bg-white hover:shadow-md transition-all duration-300 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </Button>
  );
};
