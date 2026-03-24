"use client";

import { useState } from "react";

interface NotesFilterProps {
  allTags: string[];
  notesData: { slug: string; title: string; summary: string; tags: string[] }[];
}

export function NotesFilterClient({ allTags, notesData }: NotesFilterProps) {
  const [activeTag, setActiveTag] = useState("todas");
  const [search, setSearch] = useState("");

  function applyFilters(tag: string, query: string) {
    const cards = document.querySelectorAll("[data-note-slug]");
    cards.forEach((card) => {
      const slug = card.getAttribute("data-note-slug") || "";
      const noteInfo = notesData.find((n) => n.slug === slug);
      if (!noteInfo) { (card as HTMLElement).style.display = ""; return; }

      const matchesTag = tag === "todas" || noteInfo.tags.includes(tag);
      const matchesSearch = !query || 
        noteInfo.title.toLowerCase().includes(query.toLowerCase()) ||
        noteInfo.summary.toLowerCase().includes(query.toLowerCase()) ||
        noteInfo.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));

      (card as HTMLElement).style.display = matchesTag && matchesSearch ? "" : "none";
    });
  }

  function handleTagClick(tag: string) {
    setActiveTag(tag);
    applyFilters(tag, search);
  }

  function handleSearch(query: string) {
    setSearch(query);
    applyFilters(activeTag, query);
  }

  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      {/* Search bar - centered */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Buscar notas..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full bg-glass border border-glass-border rounded-xl py-3 px-5 text-sm text-text placeholder:text-text-muted font-body outline-none transition-all focus:border-accent-orange focus:bg-accent-orange/5 focus:shadow-[0_0_0_3px_rgba(255,109,63,0.1)]"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-[0.4rem] flex-wrap justify-center">
        {["todas", ...allTags].map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`font-mono text-[0.6rem] font-medium uppercase tracking-[0.06em] px-[0.85rem] py-[0.4rem] rounded-lg border cursor-pointer transition-all hover:-translate-y-px ${
              activeTag === tag
                ? "bg-accent-orange text-white border-accent-orange"
                : "bg-glass border-glass-border text-text-dim hover:bg-[rgba(255,255,255,0.08)] hover:text-text"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
