interface BrandMarkProps {
  centered?: boolean;
  compact?: boolean;
}

export function BrandMark({ centered = false, compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-mark flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
      <div className="brand-diamonds" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={`editorial-type flex items-baseline gap-1.5 ${centered ? "text-left" : ""}`}>
        <span className={`${compact ? "text-base" : "text-lg"} font-semibold tracking-[-0.02em]`}>
          TCA
        </span>
        <span className={`${compact ? "hidden text-base min-[380px]:inline" : "text-lg"} font-medium tracking-[-0.02em]`}>
          Logic Wars
        </span>
      </div>
    </div>
  );
}
