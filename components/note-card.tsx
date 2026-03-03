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

function formatDate(dateString: string): string {
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const [year, month, day] = dateString.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)} de ${months[monthIndex]} de ${year}`;
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function NoteCard({ note, index }: NoteCardProps) {
  const formattedDate = formatDate(note.date);

  return (
    <article
      data-note-slug={note.slug}
      className="card relative bg-card-bg border border-card-border rounded-card p-8 pb-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.008] hover:shadow-xl group"
      style={{
        padding: "32px 36px 26px",
      }}
    >
      <div className="card-rainbow-bar" aria-hidden="true" />

      <div className="flex items-center gap-2 mb-3">
        <time 
          dateTime={note.date}
          className="font-mono text-[10px] uppercase tracking-[2.5px] text-muted"
        >
          {formattedDate}
        </time>
        {note.author && (
          <>
            <span className="text-muted">|</span>
            <a
              href={note.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-muted hover:text-foreground transition-colors"
            >
              {note.author}
            </a>
          </>
        )}
      </div>

      <h2 className="font-serif text-2xl font-bold text-foreground mb-3 text-balance">
        {note.title}
      </h2>

      {note.summary && (
        <p 
          className="font-mono text-xs text-muted mb-4"
          style={{ lineHeight: 1.95 }}
        >
          {note.summary}
        </p>
      )}

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

      <div className="flex items-center gap-2.5 pt-4 border-t border-card-border flex-wrap">
        {note.tweetUrl && (
          <a
            href={note.tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-card-border font-mono text-[11px] text-muted hover:text-foreground hover:border-foreground/30 transition-all"
          >
            <XIcon />
            Ver en X
          </a>
        )}

        {note.toolUrl && note.tool && (
          <a
            href={note.toolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] font-mono text-[11px] hover:bg-[#00e5ff]/20 transition-colors"
          >
            {note.tool}
            <ExternalLinkIcon />
          </a>
        )}

        {note.repoUrl && (
          <a
            href={note.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-card-border font-mono text-[11px] text-muted hover:text-foreground hover:border-foreground/30 transition-all"
          >
            <GitHubIcon />
            Ver en GitHub
          </a>
        )}
      </div>
    </article>
  );
}
