interface TagBadgeProps {
  tag: string;
  color: string;
  isActive: boolean;
  onClick?: () => void;
  size?: "small" | "normal";
}

export function TagBadge({ tag, color, isActive, onClick, size = "normal" }: TagBadgeProps) {
  const Component = onClick ? "button" : "span";
  
  const baseClasses = size === "small" 
    ? "font-mono text-[10px] px-2.5 py-1 rounded-full transition-all duration-200"
    : "font-mono text-[11px] px-3 py-1.5 rounded-pill transition-all duration-200";

  return (
    <Component
      onClick={onClick}
      className={baseClasses}
      style={{
        backgroundColor: isActive ? color : `${color}15`,
        color: isActive ? "#000" : color,
        border: `1px solid ${isActive ? color : `${color}30`}`,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {tag}
    </Component>
  );
}
