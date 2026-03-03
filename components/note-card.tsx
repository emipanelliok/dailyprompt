import { Note } from "@/lib/notes";
import { TagBadge } from "./tag-badge";

interface NoteCardProps {
  note: Note;
  index: number;
}

const TAG_COLORS: Record<string, string> = {
  "vibe-coding": "#ff3366",
  "agentes": "#00e5ff",
  "automatizacion": "#ffe066",
  "herramientas": "#ff8c42",
  "dev-tools": "#df80ff",
  "open-source": "#66ffaa",
};

// Format date consistently to avoid hydration mismatch
function formatDate(dateString: string): string {
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const [year, month, day] = dateString.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)} de ${months[monthIndex]} de ${year}`;
}

export function NoteCard({ note, index }: NoteCardProps) {
  const formattedDate = formatDate(note.date);

  return (
    <article
      data-note-slug={note.slug}
      className="card relative bg-card-bg border border-card-border rounded-card p-8 pb-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.008] hover:shadow-xl group"
      style={{
        animationDelay: `${index * 100}ms`,
        padding: "32px 36px 26px",
      }}
    >
      {/* Rainbow bar on hover */}
      <div className="card-rainbow-bar" aria-hidden="true" />

      {/* Date and author */}
      <div className="flex items-center gap-2 mb-3">
        <time 
          dateTime={note.date}
          className="font-mono text-[10px] uppercase tracking-[2.5px] text-muted"
        >
          {formattedDate}
        </time>
        <span className="text-muted">|</span>
        <a
          href={note.tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-muted hover:text-foreground transition-colors"
        >
          {note.author}
        </a>
      </div>

      {/* Title */}
      <h2 className="font-serif text-2xl text-foreground mb-3 text-balance">
        {note.title}
      </h2>

      {/* Summary */}
      <p 
        className="font-mono text-xs text-muted mb-4"
        style={{ lineHeight: 1.95 }}
      >
        {note.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {note.tags.map((tag) => (
          <TagBadge 
            key={tag} 
            tag={tag} 
            color={TAG_COLORS[tag] || "#888888"} 
            isActive={false}
            size="small"
          />
        ))}
      </div>

      {/* Footer with links */}
      <div className="flex items-center justify-between pt-4 border-t border-card-border">
        {/* Tool link */}
        <a
          href={note.toolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] font-mono text-[11px] hover:bg-[#00e5ff]/20 transition-colors"
        >
          {note.tool}
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>

        {/* Tweet link */}
        <a
          href={note.tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-muted hover:text-foreground"
          aria-label="Ver tweet original"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </article>
  );
}
