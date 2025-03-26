
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full transition-transform duration-200 hover:scale-110"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-caravela-blue" />
      ) : (
        <Moon className="h-5 w-5 text-blue-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
