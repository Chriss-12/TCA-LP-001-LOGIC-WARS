import { BrandMark } from "./BrandMark";
import { GlobalGameTimer } from "./GlobalGameTimer";

interface GameHudDockProps {
  remainingMs: number;
  durationMinutes: number;
}

export function GameHudDock({ remainingMs, durationMinutes }: GameHudDockProps) {
  return (
    <aside className="game-hud-dock" aria-label="Estado de la partida">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-3.5 py-2.5 min-[360px]:px-4 sm:px-7">
        <BrandMark compact />
        <div className="ml-auto min-w-0 flex-1 sm:max-w-56">
          <GlobalGameTimer remainingMs={remainingMs} durationMinutes={durationMinutes} />
        </div>
      </div>
    </aside>
  );
}
