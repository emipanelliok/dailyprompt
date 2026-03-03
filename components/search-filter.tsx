"use client";

import { TagBadge } from "./tag-badge";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

const TAG_COLORS: Record<string, string> = {
  "vibe-coding": "#ff3366",
  "agentes": "#00e5ff",
  "automatizacion": "#ffe066",
  "herramientas": "#ff8c42",
  "dev-tools": "#df80ff",
  "open-source": "#66ffaa",
};

export function SearchFilter({
  searchQuery,
  onSearchChange,
  tags,
  activeTag,
  onTagClick,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar notas..."
          className="w-full px-5 py-3 font-mono text-sm bg-[var(--input-bg)] border border-[var(--input-border)] rounded-pill text-foreground placeholder:text-muted transition-all duration-200 focus:border-[#00e5ff]"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2">
        <TagBadge
          tag="todas"
          color="#888888"
          isActive={activeTag === null}
          onClick={() => onTagClick(null)}
        />
        {tags.map((tag) => (
          <TagBadge
            key={tag}
            tag={tag}
            color={TAG_COLORS[tag] || "#888888"}
            isActive={activeTag === tag}
            onClick={() => onTagClick(tag)}
          />
        ))}
      </div>
    </div>
  );
}
