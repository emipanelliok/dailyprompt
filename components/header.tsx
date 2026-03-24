"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

interface HeaderProps {
  noteCount: number;
}

export function Header({ noteCount }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-glass-border transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="font-display text-[1.4rem] italic text-text hover:opacity-70 transition-opacity">
          daily<b className="not-italic text-accent-orange">prompt</b>
        </a>
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 text-text-muted hover:text-accent-orange transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          )}
          <span className="font-mono text-[0.6rem] font-medium tracking-wider text-accent-orange bg-accent-orange/10 border border-accent-orange/20 px-[0.65rem] py-[0.3rem] rounded-lg">
            {noteCount} notas
          </span>
        </div>
      </div>
    </header>
  );
}
