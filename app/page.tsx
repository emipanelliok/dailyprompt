import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NotesFeed } from "@/components/notes-feed";
import { getAllNotes, getAllTags } from "@/lib/notes";

export const dynamic = "force-static";
export const revalidate = 60; // Revalidate every minute

export default function Home() {
  const notes = getAllNotes();
  const allTags = getAllTags(notes);

  return (
    <div className="min-h-screen flex flex-col">
      <Header noteCount={notes.length} />
      
      <main className="flex-1 w-full max-w-container mx-auto px-6 py-8">
        <NotesFeed notes={notes} allTags={allTags} />
      </main>

      <Footer />
    </div>
  );
}
