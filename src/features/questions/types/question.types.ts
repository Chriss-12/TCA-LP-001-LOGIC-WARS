export type Category = "calculo" | "derivadas" | "programacion" | "complejidad" | "logica";

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  question: string;
  code?: string;
  options: Record<string, string>;
  correctAnswer: string;
  explanation: string;
}

export type QuestionBank = Record<string, Question>;

export const POINTS: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3
}
