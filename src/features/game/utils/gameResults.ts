import type { AnswerResult } from "../store/game.store";
import type { Category, Difficulty, Question } from "../../questions/types/question.types";

interface ResultCount {
  correct: number;
  total: number;
}

export function formatElapsedTime(startedAt: number | null, finishedAt: number | null): string {
  if (!startedAt || !finishedAt) {
    return "00:00";
  }

  const totalSeconds = Math.max(0, Math.floor((finishedAt - startedAt) / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function countResults<T extends Category | Difficulty>(
  questions: Question[],
  answers: AnswerResult[],
  key: "category" | "difficulty",
): Record<T, ResultCount> {
  const answerByQuestion = new Map(answers.map((answer) => [answer.questionId, answer]));
  const counts = {} as Record<T, ResultCount>;

  for (const question of questions) {
    const value = question[key] as T;
    const current = counts[value] ?? { correct: 0, total: 0 };
    const answer = answerByQuestion.get(question.id);

    counts[value] = {
      correct: current.correct + (answer?.isCorrect ? 1 : 0),
      total: current.total + 1,
    };
  }

  return counts;
}
