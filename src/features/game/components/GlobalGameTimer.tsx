import { Clock3 } from "lucide-react";

interface GlobalGameTimerProps {
  remainingMs: number;
  durationMinutes: number;
}

export function GlobalGameTimer({ remainingMs, durationMinutes }: GlobalGameTimerProps) {
  const durationMs = durationMinutes * 60 * 1000;
  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const progress = Math.max(0, Math.min(100, (remainingMs / durationMs) * 100));
  const timerPhase = progress > 200 / 3 ? "safe" : progress > 100 / 3 ? "warning" : "danger";
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      className={`timer-card timer-card--${timerPhase}`}
      aria-label={`Tiempo restante: ${minutes} minutos y ${seconds} segundos`}
    >
      <Clock3 className="size-4 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[10px] font-bold tracking-[0.08em]">Tiempo restante</span>
          <time className="display-type text-lg leading-none font-semibold tabular-nums">{display}</time>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-current transition-[width] duration-300"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
