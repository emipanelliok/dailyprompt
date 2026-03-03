"use client";

import { useTheme } from "./theme-provider";

interface HeaderProps {
  noteCount: number;
}

export function Header({ noteCount }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[24px] bg-[var(--header-bg)] border-b border-[var(--card-border)] transition-colors duration-[600ms]">
      <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Logo and branding */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div 
            className="w-10 h-10 rounded-[14px] flex items-center justify-center animate-float"
            style={{
              background: "linear-gradient(135deg, #ff3366, #00e5ff)",
            }}
          >
            <span className="text-lg" role="img" aria-label="lightning bolt">
              ⚡
            </span>
          </div>
          
          {/* Title and tagline */}
          <div className="flex flex-col">
            <h1 className="font-serif text-[28px] leading-tight text-foreground">
              Daily Prompt
            </h1>
            <p 
              className="font-mono text-[8.5px] uppercase tracking-[3.5px] text-muted"
            >
              ia · vibe coding · agentes · curado por emi
            </p>
          </div>
        </div>

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
        </div>
      </div>
    </header>
  );
}
