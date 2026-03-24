import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NoteCard } from "@/components/note-card";
import { getAllNotes, getAllTags } from "@/lib/notes";

export const dynamic = "force-static";
export const revalidate = 60;

export default function Home() {
  const notes = getAllNotes();
  const allTags = getAllTags(notes);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Ambient glow */}
      <div className="ambient-glow" aria-hidden="true" />

      <Header noteCount={notes.length} />

      <main className="flex-1 w-full max-w-container mx-auto px-6 relative z-[1]">
        {/* Hero */}
        <section className="pt-20 pb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-glass-border" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-text-muted">
              dailyprompt.io
            </span>
            <span className="w-10 h-px bg-glass-border" />
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.03em]">
            Short AI news.<br/>
            <span className="italic bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple bg-clip-text text-transparent">
              Big ideas.
            </span>
          </h1>
          <p className="text-base text-text-dim mt-4 font-light max-w-[400px] mx-auto leading-relaxed">
            Micro-notas curadas sobre inteligencia artificial, vibe coding y agentes. Por Emi.
          </p>
        </section>

        {/* Tags */}
        <div className="flex gap-[0.4rem] flex-wrap justify-center mb-10">
          {["todas", ...allTags].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.06em] px-[0.85rem] py-[0.4rem] rounded-lg bg-glass border border-glass-border text-text-dim cursor-pointer hover:bg-[rgba(255,255,255,0.08)] hover:text-text hover:-translate-y-px transition-all"
            >
              {tag === "todas" ? "todas" : tag}
            </span>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
          {notes.map((note, index) => (
            <NoteCard key={note.slug} note={note} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
