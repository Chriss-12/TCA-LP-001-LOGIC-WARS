interface BrandMarkProps {
  centered?: boolean;
  compact?: boolean;
}

export function BrandMark({ centered = false, compact = false }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}>
      <div className="brand-diamonds" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={`editorial-type flex items-baseline gap-1.5 ${centered ? "text-left" : ""}`}>
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
