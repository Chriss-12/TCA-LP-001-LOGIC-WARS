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
      <time className="display-type text-2xl leading-none font-semibold tabular-nums">{display}</time>
      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[rgb(var(--graphite-rgb)/0.18)]">
        <div
          className="timer-progress h-full w-full rounded-full bg-current"
          style={{ transform: `scaleX(${progress / 100})` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
