"use client";

import { useState, useEffect } from "react";
import { SearchFilter } from "./search-filter";

interface NotesFilterClientProps {
  allTags: string[];
  notesData: Array<{
    slug: string;
    title: string;
    summary: string;
    tool: string;
    tags: string[];
  }>;
}

export function NotesFilterClient({ allTags, notesData }: NotesFilterClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(notesData.length);

  useEffect(() => {
    let count = 0;
    notesData.forEach((note) => {
      const matchesSearch =
        searchQuery === "" ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tool.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = activeTag === null || note.tags.includes(activeTag);
      const isVisible = matchesSearch && matchesTag;

      // Find the card element and toggle visibility
      const cardElement = document.querySelector(`[data-note-slug="${note.slug}"]`);
      if (cardElement) {
        if (isVisible) {
          cardElement.classList.remove("hidden");
          count++;
        } else {
          cardElement.classList.add("hidden");
        }
      }
    });
    setVisibleCount(count);
  }, [searchQuery, activeTag, notesData]);

  return (
    <div>
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        tags={allTags}
        activeTag={activeTag}
        onTagClick={setActiveTag}
      />
      {visibleCount === 0 && (
        <div className="text-center py-16">
          <p className="font-mono text-muted text-sm">
            No se encontraron notas que coincidan con tu busqueda.
          </p>
        </div>
      )}
    </div>
  );
}
