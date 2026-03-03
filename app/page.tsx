import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NotesFilterClient } from "@/components/notes-filter-client";
import { NoteCard } from "@/components/note-card";
import { getAllNotes, getAllTags } from "@/lib/notes";

export const dynamic = "force-static";
export const revalidate = 60; // Revalidate every minute

export default function Home() {
  const notes = getAllNotes();
  const allTags = getAllTags(notes);

  // Serialize only the data needed for filtering (not full Note objects)
  const notesData = notes.map((note) => ({
    slug: note.slug,
    title: note.title,
    summary: note.summary,
    tool: note.tool,
    tags: note.tags,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header noteCount={notes.length} />
      
      <main className="flex-1 w-full max-w-container mx-auto px-6 py-8">
        <NotesFilterClient allTags={allTags} notesData={notesData} />
        
        <div 
          className="grid gap-[22px]"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(480px, 100%), 1fr))",
          }}
        >
          {notes.map((note, index) => (
            <NoteCard key={note.slug} note={note} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
