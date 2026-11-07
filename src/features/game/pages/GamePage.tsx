import { useEffect, useState } from "react";
import { ArrowRight, Check, CheckCircle2, LogOut, SkipForward, X, XCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Navigate, useNavigate } from "react-router";

import { AnswerReaction } from "../components/AnswerReaction";
import { DifficultyBadge } from "../components/DifficultyBadge";
import { GameButton } from "../components/GameButton";
import { GameHudDock } from "../components/GameHudDock";
import { GameShell } from "../components/GameShell";
import { QuestionPrompt } from "../components/QuestionPrompt";
import { SurrenderDialog } from "../components/SurrenderDialog";
import { CATEGORY_LABELS, QUESTION_COUNT } from "../constants/game.constants";
import { useGameCountdown } from "../hooks/useGameCountdown";
import { useGameStore } from "../store/game.store";

export function GamePage() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [showSurrenderDialog, setShowSurrenderDialog] = useState(false);
  const {
    questions,
    currentQuestionIndex,
    answers,
    score,
    startedAt,
    durationMinutes,
    isStarted,
    isFinished,
    answerQuestion,
    skipQuestion,
    nextQuestion,
    finishGame,
    resetGame,
  } = useGameStore();
  const remainingMs = useGameCountdown(
    startedAt,
    durationMinutes,
    isFinished,
    finishGame,
  );
  const question = questions[currentQuestionIndex];
  const currentAnswer = question
    ? answers.find((answer) => answer.questionId === question.id)
    : undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    if (isFinished) navigate("/results", { replace: true });
  }, [isFinished, navigate]);

  useEffect(() => {
    if (!currentAnswer || !isLastQuestion || isFinished) return;

    const timer = window.setTimeout(() => finishGame(), 1200);
    return () => window.clearTimeout(timer);
  }, [currentAnswer, finishGame, isFinished, isLastQuestion]);

  if (!isStarted || !question) return <Navigate to="/" replace />;

  const progress = ((currentQuestionIndex + 1) / QUESTION_COUNT) * 100;

  const handleSurrender = () => {
    resetGame();
    navigate("/", { replace: true });
  };

  return (
    <GameShell
      compact
      bottomDock={
        <GameHudDock
          remainingMs={remainingMs}
          durationMinutes={durationMinutes}
          score={score}
        />
      }
    >
      <section aria-label="Progreso de la partida" className="mb-3 px-1">
        <div className="mb-2 flex items-center justify-between text-xs font-bold">
          <span>Pregunta {currentQuestionIndex + 1} <span className="text-[var(--text-muted)]">de {QUESTION_COUNT}</span></span>
          <span className="display-type text-sm text-[var(--text-muted)]">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
          <motion.div
            className="h-full w-full origin-left rounded-full bg-[var(--primary)]"
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          />
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.22 }}
          className="flex flex-1 flex-col gap-3"
        >
          <section className="question-card" aria-labelledby="current-question">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="category-pill">{CATEGORY_LABELS[question.category]}</span>
              <DifficultyBadge difficulty={question.difficulty} showPoints />
            </div>
            <QuestionPrompt question={question} />
          </section>

          <section className="answers-card" aria-label="Respuestas">
            <div className="grid gap-2.5 sm:grid-cols-2" role="group" aria-label="Opciones de respuesta">
              {Object.entries(question.options).map(([key, option]) => {
                const isSelected = currentAnswer?.selectedAnswer === key;
                const isCorrect = Boolean(currentAnswer && key === question.correctAnswer);
                const isWrongSelection = Boolean(isSelected && !currentAnswer?.isCorrect);
                let stateClass = "answer-option--idle";
                if (isCorrect) stateClass = "answer-option--correct";
                if (isWrongSelection) stateClass = "answer-option--wrong";
                if (currentAnswer && !isCorrect && !isWrongSelection) stateClass = "answer-option--muted";

                return (
                  <button key={key} type="button" onClick={() => answerQuestion(key)} disabled={Boolean(currentAnswer)} aria-pressed={isSelected} className={`answer-option ${stateClass}`}>
                    <span className="answer-key">{key}</span>
                    <span className="answer-copy min-w-0 flex-1 text-sm leading-5 font-semibold sm:text-base">{option}</span>
                    {isCorrect && <Check className="size-5 shrink-0" aria-hidden="true" />}
                    {isWrongSelection && <X className="size-5 shrink-0" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            <AnimatePresence initial={false}>
              {currentAnswer && (
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`feedback-card ${currentAnswer.isCorrect ? "feedback-card--correct" : "feedback-card--wrong"}`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    {currentAnswer.isCorrect ? <CheckCircle2 className="size-5" aria-hidden="true" /> : <XCircle className="size-5" aria-hidden="true" />}
                    <span>{currentAnswer.isCorrect ? "¡Respuesta correcta!" : "Esta vez no fue"}</span>
                  </div>
                  {!currentAnswer.isCorrect && (
                    <p className="mt-2 text-sm">Correcta: <strong>{question.correctAnswer}. {question.options[question.correctAnswer]}</strong></p>
                  )}
                  <p className="mt-2 text-sm leading-5 text-[var(--text-muted)]">{question.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {currentAnswer?.selectedAnswer && (
            <AnswerReaction
              key={currentAnswer.questionId}
              isCorrect={currentAnswer.isCorrect}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-3 grid grid-cols-[0.78fr_1.22fr] gap-2.5">
        <GameButton variant="secondary" onClick={skipQuestion} disabled={Boolean(currentAnswer)} aria-label="Omitir esta pregunta y continuar">
          <SkipForward className="size-4" aria-hidden="true" /> Omitir
        </GameButton>
        <GameButton onClick={nextQuestion} disabled={!currentAnswer}>
          {isLastQuestion ? "Ver resultado" : "Continuar"} <ArrowRight className="size-5" aria-hidden="true" />
        </GameButton>
      </div>

      <button
        type="button"
        onClick={() => setShowSurrenderDialog(true)}
        className="surrender-fab"
        aria-label="Rendirse y salir de la partida"
        title="Rendirse"
      >
        <LogOut className="size-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {showSurrenderDialog && (
          <SurrenderDialog
            onCancel={() => setShowSurrenderDialog(false)}
            onConfirm={handleSurrender}
          />
        )}
      </AnimatePresence>
    </GameShell>
  );
}
