import { Note } from "@/lib/notes";

interface NoteCardProps {
  note: Note;
  index: number;
}

const TAG_STYLES: Record<string, { color: string; bg: string }> = {
  "vibe-coding": { color: "var(--pink)", bg: "rgba(244,114,182,0.1)" },
  "agentes": { color: "var(--green)", bg: "rgba(52,211,153,0.1)" },
  "automatizacion": { color: "var(--yellow)", bg: "rgba(251,191,36,0.1)" },
  "herramientas": { color: "var(--orange)", bg: "rgba(255,109,63,0.1)" },
  "dev-tools": { color: "var(--blue)", bg: "rgba(79,124,255,0.1)" },
  "open-source": { color: "var(--purple)", bg: "rgba(167,139,250,0.1)" },
};

function formatDate(dateString: string): string {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const [year, month, day] = dateString.split("-");
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]}`;
}

export function NoteCard({ note, index }: NoteCardProps) {
  const formattedDate = formatDate(note.date);
  const mainTag = note.tags[0] || "herramientas";
  const style = TAG_STYLES[mainTag] || TAG_STYLES["herramientas"];

  return (
    <article
      data-note-slug={note.slug}
      className="card-container card-animate group relative flex flex-col bg-card-bg border border-card-border rounded-2xl p-7 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] hover:-translate-y-[3px] hover:shadow-[0_24px_48px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)]"
      style={{ animationDelay: `${0.1 + index * 0.05}s`, "--card-accent": style.color } as React.CSSProperties}
    >
      {/* Color bar on hover */}
      <div
        className="card-color-bar"
        style={{ background: style.color }}
        aria-hidden="true"
      />

      {/* Tags + Meta */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {note.tags.map((tag) => {
          const s = TAG_STYLES[tag] || TAG_STYLES["herramientas"];
          return (
            <span
              key={tag}
              className="font-mono text-[0.55rem] font-medium uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-md"
              style={{ background: s.bg, color: s.color }}
            >
              {tag}
            </span>
          );
        })}
        <span className="font-mono text-[0.6rem] text-text-muted tracking-[0.02em]">
          {formattedDate}{note.author ? ` · ${note.author}` : ""}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-[1.5rem] font-normal leading-[1.2] tracking-[-0.02em] mb-[0.6rem] text-text transition-colors duration-200 group-hover:text-[var(--card-accent)]">
        {note.title}
      </h3>

      {/* Summary */}
      {note.summary && (
        <p className="text-[0.85rem] leading-[1.7] text-text-dim mb-5 flex-grow font-light">
          {note.summary}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-glass-border">
        <div className="flex items-center gap-3">
          {note.tweetUrl && (
            <a
              href={note.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.35rem] font-mono text-[0.6rem] font-medium uppercase tracking-[0.06em] text-text-muted hover:text-text transition-colors py-[0.3rem]"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Ver en X
            </a>
          )}
          {note.repoUrl && (
            <a
              href={note.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.35rem] font-mono text-[0.6rem] font-medium uppercase tracking-[0.06em] text-text-muted hover:text-text transition-colors py-[0.3rem]"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          )}
        </div>
        {note.toolUrl && note.tool && (
          <a
            href={note.toolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.06em] transition-colors py-[0.3rem] hover:opacity-70"
            style={{ color: style.color }}
          >
            {note.tool} ↗
          </a>
        )}
      </div>
    </article>
  );
}
