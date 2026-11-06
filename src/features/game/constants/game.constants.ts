import type { Category, Difficulty } from "../../questions/types/question.types";

export const MAX_SCORE = 21;
export const QUESTION_COUNT = 10;
export const DEFAULT_GAME_DURATION_MINUTES = 3;
export const MIN_GAME_DURATION_MINUTES = 2;
export const MAX_GAME_DURATION_MINUTES = 5;

export const CATEGORY_LABELS: Record<Category, string> = {
  calculo: "Cálculo",
  derivadas: "Derivadas",
  programacion: "Programación",
  complejidad: "Complejidad",
  logica: "Lógica",
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: "Fácil",
  medium: "Intermedia",
  hard: "Difícil",
};

export const DIFFICULTY_TOTALS: Record<Difficulty, number> = {
  easy: 3,
  medium: 3,
  hard: 4,
};
