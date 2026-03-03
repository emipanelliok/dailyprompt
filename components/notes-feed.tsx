"use client";

import { useState, useMemo } from "react";
import { Note } from "@/lib/notes";
import { NoteCard } from "./note-card";
import { SearchFilter } from "./search-filter";

interface NotesFeedProps {
  notes: Note[];
  allTags: string[];
}

export function NotesFeed({ notes, allTags }: NotesFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tool.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by active tag
      const matchesTag = activeTag === null || note.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [notes, searchQuery, activeTag]);

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
  };

  return (
    <div>
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        tags={allTags}
        activeTag={activeTag}
        onTagClick={handleTagClick}
      />

      {filteredNotes.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-mono text-muted text-sm">
            No se encontraron notas que coincidan con tu búsqueda.
          </p>
        </div>
      ) : (
        <div 
          className="grid gap-[22px]"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(480px, 100%), 1fr))",
          }}
        >
          {filteredNotes.map((note, index) => (
            <NoteCard key={note.slug} note={note} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
