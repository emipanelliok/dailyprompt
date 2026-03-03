"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

interface HeaderProps {
  noteCount: number;
}

export function Header({ noteCount }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[24px] bg-[var(--header-bg)] border-b border-[var(--card-border)] transition-colors duration-[600ms]">
      <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Logo */}
        <a href="/" className="block">
          <img 
            src="/Dailyprompt.svg" 
            alt="dailyprompt.io - Short AI news. Big ideas." 
            className="h-10 md:h-12 dark:invert"
          />
        </a>

        {/* Right side - Note counter and theme toggle */}
        <div className="flex items-center gap-5">
          {/* Note counter */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span 
              className="w-2 h-2 rounded-full bg-[#66ffaa] animate-blink"
              aria-hidden="true"
            />
            <span>{noteCount} notas</span>
          </div>

          {/* Theme toggle */}
          {mounted ? (
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full p-1 transition-colors duration-[600ms] focus:outline-none focus:ring-2 focus:ring-[#00e5ff] focus:ring-offset-2 focus:ring-offset-background"
              style={{
                backgroundColor: theme === "dark" 
                  ? "rgba(255, 255, 255, 0.1)" 
                  : "rgba(0, 0, 0, 0.1)",
              }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span
                className="toggle-circle block w-5 h-5 rounded-full shadow-md"
                style={{
                  backgroundColor: theme === "dark" ? "#00e5ff" : "#ff8c42",
                  transform: theme === "dark" ? "translateX(28px)" : "translateX(0)",
                }}
              />
            </button>
          ) : (
            <div className="w-14 h-7 rounded-full bg-black/10 dark:bg-white/10" />
          )}
        </div>
      </div>
    </header>
  );
}
