
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 ease-in-out",
        theme === 'dark' 
          ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        {theme === 'dark' ? (
          <Moon className="h-4 w-4 transition-all animate-fade-in" />
        ) : (
          <Sun className="h-4 w-4 transition-all animate-fade-in" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
