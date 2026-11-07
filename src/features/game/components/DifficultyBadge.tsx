import { POINTS, type Difficulty } from "../../questions/types/question.types";
import { DIFFICULTY_LABELS } from "../constants/game.constants";

const COLOR_STYLES: Record<Difficulty, string> = {
  easy: "border-[var(--steel)] bg-[var(--silver)] text-[var(--navy)]",
  medium: "border-[var(--charcoal)] bg-[var(--institutional-gray)] text-[var(--graphite)]",
  hard: "border-[var(--executive-wine)] bg-[var(--wine)] text-[var(--smoke)]",
};

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  showPoints?: boolean;
}

export function DifficultyBadge({ difficulty, showPoints = false }: DifficultyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${COLOR_STYLES[difficulty]}`}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {DIFFICULTY_LABELS[difficulty]}
      {showPoints && ` · ${POINTS[difficulty]} PT`}
    </span>
  );
}
