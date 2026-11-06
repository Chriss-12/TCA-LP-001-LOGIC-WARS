import { create } from "zustand";
import { persist } from "zustand/middleware";

import { generateQuestions } from "../../questions/utils/generateQuestions";
import { POINTS } from "../../questions/types/question.types";
import {
  DEFAULT_GAME_DURATION_MINUTES,
  MAX_GAME_DURATION_MINUTES,
  MIN_GAME_DURATION_MINUTES,
} from "../constants/game.constants";

import type { Question } from "../../questions/types/question.types";

export interface AnswerResult {
  questionId: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  isCorrect: boolean;
  points: number;
}

interface GameState {
  seed: string;
  questions: Question[];
  currentQuestionIndex: number;
  answers: AnswerResult[];
  score: number;
  startedAt: number | null;
  finishedAt: number | null;
  durationMinutes: number;
  isStarted: boolean;
  isFinished: boolean;
  setDurationMinutes: (minutes: number) => void;
  startGame: (seed: string) => void;
  answerQuestion: (selectedAnswer: string) => void;
  skipQuestion: () => void;
  nextQuestion: () => void;
  finishGame: (finishedAt?: number) => void;
  resetGame: () => void;
}

const initialState = {
  seed: "",
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  startedAt: null,
  finishedAt: null,
  durationMinutes: DEFAULT_GAME_DURATION_MINUTES,
  isStarted: false,
  isFinished: false,
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setDurationMinutes: (minutes) => {
        if (!Number.isFinite(minutes)) {
          return;
        }

        const normalizedMinutes = Math.min(
          MAX_GAME_DURATION_MINUTES,
          Math.max(MIN_GAME_DURATION_MINUTES, Math.round(minutes)),
        );

        set({ durationMinutes: normalizedMinutes });
      },

      startGame: (seed) => {
        const normalizedSeed = seed.trim().toUpperCase();
        const questions = generateQuestions(normalizedSeed);

        set({
          seed: normalizedSeed,
          questions,
          currentQuestionIndex: 0,
          answers: [],
          score: 0,
          startedAt: Date.now(),
          finishedAt: null,
          isStarted: true,
          isFinished: false,
        });
      },

      answerQuestion: (selectedAnswer) => {
        const state = get();

        if (state.isFinished) {
          return;
        }

        const question = state.questions[state.currentQuestionIndex];

        if (!question || !(selectedAnswer in question.options)) {
          return;
        }

        const alreadyAnswered = state.answers.some(
          (answer) => answer.questionId === question.id,
        );

        if (alreadyAnswered) {
          return;
        }

        const isCorrect = selectedAnswer === question.correctAnswer;

        const points = isCorrect
          ? POINTS[question.difficulty]
          : 0;

        const result: AnswerResult = {
          questionId: question.id,
          selectedAnswer,
          correctAnswer: question.correctAnswer,
          isCorrect,
          points,
        };
        set({
          answers: [...state.answers, result],
          score: state.score + points,
        });
      },

      skipQuestion: () => {
        const state = get();
        const question = state.questions[state.currentQuestionIndex];

        if (!question || state.isFinished) {
          return;
        }

        const alreadyAnswered = state.answers.some(
          (answer) => answer.questionId === question.id,
        );

        if (alreadyAnswered) {
          return;
        }

        const skippedAnswer: AnswerResult = {
          questionId: question.id,
          selectedAnswer: null,
          correctAnswer: question.correctAnswer,
          isCorrect: false,
          points: 0,
        };
        const isLastQuestion = state.currentQuestionIndex >= state.questions.length - 1;

        set({
          answers: [...state.answers, skippedAnswer],
          currentQuestionIndex: isLastQuestion
            ? state.currentQuestionIndex
            : state.currentQuestionIndex + 1,
          finishedAt: isLastQuestion ? Date.now() : null,
          isFinished: isLastQuestion,
        });
      },

      nextQuestion: () => {
        const state = get();
        const currentQuestion = state.questions[state.currentQuestionIndex];
        const hasAnsweredCurrentQuestion = state.answers.some(
          (answer) => answer.questionId === currentQuestion?.id,
        );

        if (!currentQuestion || !hasAnsweredCurrentQuestion || state.isFinished) {
          return;
        }

        const isLastQuestion = state.currentQuestionIndex >= state.questions.length - 1;

        if (isLastQuestion) {
          get().finishGame();
          return;
        }

        set({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        });
      },

      finishGame: (finishedAt = Date.now()) => {
        const state = get();

        if (state.isFinished) {
          return;
        }

        set({
          finishedAt,
          isFinished: true,
        });
      },

      resetGame: () => {
        set({
          ...initialState,
          durationMinutes: get().durationMinutes,
        });
      },
    }),
    {
      name: "tca-logic-wars-game",
    },
  ),
);
