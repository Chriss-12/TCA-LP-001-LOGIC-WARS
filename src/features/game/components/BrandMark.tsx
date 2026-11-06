import { Swords } from "lucide-react";

interface BrandMarkProps {
  centered?: boolean;
  compact?: boolean;
}

export function BrandMark({ centered = false, compact = false }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}>
      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--primary)] text-[var(--color-1)] shadow-[0_6px_14px_rgb(121_33_93/0.2)]">
        <Swords className="size-5" strokeWidth={2.4} aria-hidden="true" />
      </div>
      <div className={`display-type flex items-baseline gap-1.5 ${centered ? "text-left" : ""}`}>
        <span className={`${compact ? "text-xl" : "text-2xl"} font-semibold tracking-[-0.02em] text-[var(--text-primary)]`}>
          TCA
        </span>
        <span className={`${compact ? "hidden text-xl min-[380px]:inline" : "text-2xl"} font-medium tracking-[-0.02em] text-[var(--text-muted)]`}>
          Logic Wars
        </span>
      </div>
    </div>
  );
}
