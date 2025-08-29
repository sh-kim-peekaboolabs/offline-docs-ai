import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const currentLanguageLabel = language === 'ko' ? '한국어' : 'English';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-sm font-medium border border-border bg-background hover:bg-accent"
        >
          <Languages className="w-4 h-4" />
          <span>Language</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 bg-background border border-border shadow-lg">
        <DropdownMenuItem 
          onClick={() => language !== 'ko' && toggleLanguage()}
          className="flex items-center justify-between cursor-pointer hover:bg-accent"
        >
          <span>한국어</span>
          {language === 'ko' && <Check className="w-4 h-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => language !== 'en' && toggleLanguage()}
          className="flex items-center justify-between cursor-pointer hover:bg-accent"
        >
          <span>English</span>
          {language === 'en' && <Check className="w-4 h-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};