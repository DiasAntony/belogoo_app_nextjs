"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

export default function ThemeButton() {
  const [activeTheme, setActiveTheme] = useState<string>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  };

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    let newTheme = "light";
    if (activeTheme === "light") newTheme = "dark";
    if (activeTheme === "dark") newTheme = "system";
    
    setActiveTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "system") {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  if (!mounted) {
    return <div className="w-8 h-8"></div>; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
      aria-label="Toggle Theme"
      title={`Current theme: ${activeTheme}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center transition-transform duration-500 transform group-hover:rotate-12">
        {activeTheme === "light" && <FaSun size={20} className="text-amber-500 animate-scale-in absolute" />}
        {activeTheme === "dark" && <FaMoon size={20} className="text-blue-400 animate-scale-in absolute" />}
        {activeTheme === "system" && <FaDesktop size={20} className="text-gray-500 dark:text-gray-400 animate-scale-in absolute" />}
      </div>
    </button>
  );
}
