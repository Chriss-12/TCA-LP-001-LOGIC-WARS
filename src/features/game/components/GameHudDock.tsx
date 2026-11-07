import { GlobalGameTimer } from "./GlobalGameTimer";

interface GameHudDockProps {
  remainingMs: number;
  durationMinutes: number;
  score: number;
}

/** Mantiene puntaje y tiempo visibles sin ocupar el área de las preguntas. */
export function GameHudDock({ remainingMs, durationMinutes, score }: GameHudDockProps) {
  return (
    <aside className="game-hud-dock" aria-label="Estado de la partida">
      <div className="mx-auto grid w-full max-w-xl grid-cols-[0.72fr_1.28fr] gap-2.5 px-3.5 py-2.5 min-[360px]:px-4 sm:px-7">
        <div className="score-dock-card" aria-label={`Puntuación: ${score} puntos`}>
          <span className="text-xs font-bold text-[var(--text-muted)]">Puntos</span>
          <strong className="display-type text-2xl leading-none font-semibold tabular-nums">{score}</strong>
        </div>
        <GlobalGameTimer remainingMs={remainingMs} durationMinutes={durationMinutes} />
      </div>
    </aside>
  );
}
