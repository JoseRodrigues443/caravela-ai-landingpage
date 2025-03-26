
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`font-medium text-sm ${language === "en" ? "bg-caravela-teal hover:bg-caravela-teal-dark text-white" : ""}`}
      >
        EN
      </Button>
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pt")}
        className={`font-medium text-sm ${language === "pt" ? "bg-caravela-teal hover:bg-caravela-teal-dark text-white" : ""}`}
      >
        PT
      </Button>
    </div>
  );
}
