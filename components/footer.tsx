export function Footer() {
  return (
    <footer className="max-w-container mx-auto px-6 py-8 border-t border-glass-border flex items-center justify-between flex-wrap gap-4">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-text-muted">
        dailyprompt.io · curado por emi · sheldon + claude
      </span>
      <div className="flex gap-6">
        <a href="https://github.com/emipanelliok/dailyprompt" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-text-muted hover:text-accent-orange transition-colors">
          GitHub
        </a>
        <a href="https://x.com/emipanelliok" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-text-muted hover:text-accent-orange transition-colors">
          X / Twitter
        </a>
      </div>
    </footer>
  );
}
