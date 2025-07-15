"use client";

import { Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return theme === "dark" ? (
    <SunMoon
      onClick={handleToggle}
      className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer absolute right-16 lg:right-60 top-5 lg:top-7 z-20 text-foreground hover:opacity-80 transition-opacity"
    />
  ) : (
    <Moon
      onClick={handleToggle}
      className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer absolute right-16 lg:right-60 top-5 lg:top-7 z-20 text-foreground hover:opacity-80 transition-opacity"
    />
  );
}
