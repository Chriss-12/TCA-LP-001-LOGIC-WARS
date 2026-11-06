import { Clock3, Minus, Plus } from "lucide-react";

import {
  MAX_GAME_DURATION_MINUTES,
  MIN_GAME_DURATION_MINUTES,
} from "../constants/game.constants";

interface TimeSettingsProps {
  value: number;
  onChange: (minutes: number) => void;
}

export function TimeSettings({ value, onChange }: TimeSettingsProps) {
  return (
    <section className="time-settings" aria-labelledby="time-settings-title">
      <div className="flex items-center gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--color-2)] text-[var(--color-1)]">
          <Clock3 className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h2 id="time-settings-title" className="text-sm font-extrabold">Tiempo de partida</h2>
          <p className="text-xs text-[var(--text-muted)]">Entre 2 y 5 minutos</p>
        </div>
      </div>

      <div className="time-stepper">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= MIN_GAME_DURATION_MINUTES}
          aria-label="Reducir un minuto"
        >
          <Minus className="size-5" aria-hidden="true" />
        </button>
        <label className="sr-only" htmlFor="duration-minutes">Duración en minutos</label>
        <input
          id="duration-minutes"
          type="number"
          inputMode="numeric"
          min={MIN_GAME_DURATION_MINUTES}
          max={MAX_GAME_DURATION_MINUTES}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          aria-describedby="duration-unit"
        />
        <span id="duration-unit" className="text-sm font-bold">min</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={value >= MAX_GAME_DURATION_MINUTES}
          aria-label="Aumentar un minuto"
        >
          <Plus className="size-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
