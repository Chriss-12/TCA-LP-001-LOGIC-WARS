import { questionBank } from "../data/questionBank";

import type {
  Category,
  Difficulty,
  Question,
} from "../types/question.types";

const CATEGORIES: Category[] = [
  "calculo",
  "derivadas",
  "programacion",
  "complejidad",
  "logica",
];

const DIFFICULTY_DISTRIBUTION: Difficulty[] = [
  "easy",
  "easy",
  "easy",
  "medium",
  "medium",
  "medium",
  "hard",
  "hard",
  "hard",
  "hard",
];

function normalizeSeed(seed: string): string {
  return seed.trim().toUpperCase();
}

function hashSeed(seed: string): number {
  let hash = 2166136261;

  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed: number): () => number {
  return () => {
    let t = (seed += 0x6d2b79f5);

    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(
  items: T[],
  random: () => number,
): T[] {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function pickRandomQuestion(
  candidates: Question[],
  random: () => number,
): Question {
  if (candidates.length === 0) {
    throw new Error(
      "No existen preguntas suficientes para generar la partida.",
    );
  }

  const index = Math.floor(random() * candidates.length);

  return candidates[index];
}

export function generateQuestions(
  seed: string,
): Question[] {
  const normalizedSeed = normalizeSeed(seed);

  if (!normalizedSeed) {
    throw new Error("Debes ingresar un código de partida.");
  }

  const random = createRandom(
    hashSeed(normalizedSeed),
  );

  const bank = Object.values(questionBank).sort(
    (a, b) => a.id.localeCompare(b.id),
  );

  const selected: Question[] = [];

  // Cada categoría aparece exactamente dos veces.
  const categorySlots = shuffle(
    [...CATEGORIES, ...CATEGORIES],
    random,
  );

  // Siempre:
  // 3 fáciles
  // 3 medias
  // 4 difíciles
  const difficultySlots = shuffle(
    DIFFICULTY_DISTRIBUTION,
    random,
  );

  for (let i = 0; i < 10; i++) {
    const category = categorySlots[i];
    const difficulty = difficultySlots[i];

    const candidates = bank.filter(
      (question) =>
        question.category === category &&
        question.difficulty === difficulty &&
        !selected.some(
          (selectedQuestion) =>
            selectedQuestion.id === question.id,
        ),
    );

    const question = pickRandomQuestion(
      candidates,
      random,
    );

    selected.push(question);
  }

  // Mezclamos el orden final usando la misma semilla.
  return shuffle(selected, random);
}
