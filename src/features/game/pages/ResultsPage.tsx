import { useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { BarChart3, Check, ChevronDown, Clock3, Code2, ExternalLink, Hash, LogOut, Medal, Minus, Target, X } from "lucide-react";
import { motion } from "motion/react";
import { Navigate, useNavigate } from "react-router";

import type { Category, Difficulty } from "../../questions/types/question.types";
import { BrandMark } from "../components/BrandMark";
import { DifficultyBadge } from "../components/DifficultyBadge";
import { GameButton } from "../components/GameButton";
import { GameShell } from "../components/GameShell";
import { CATEGORY_LABELS, DIFFICULTY_LABELS, DIFFICULTY_TOTALS, MAX_SCORE } from "../constants/game.constants";
import { useGameStore } from "../store/game.store";
import { countResults, formatElapsedTime } from "../utils/gameResults";

const DIFFICULTIES: Difficulty[] = ["easy", "medium", "hard"];
const CATEGORIES: Category[] = ["calculo", "derivadas", "programacion", "complejidad", "logica"];

function getResultMessage(score: number) {
  if (score >= 18) return { title: "¡Dominio total!", body: "Pensaron con precisión y mantuvieron el ritmo hasta el final." };
  if (score >= 12) return { title: "¡Gran batalla!", body: "Hay muy buena lógica aquí. Un intento más puede llevarlos a la cima." };
  if (score >= 6) return { title: "Buen entrenamiento", body: "Cada respuesta afinó su estrategia. Ya tienen una base sólida para la revancha." };
  return { title: "La lógica también se entrena", body: "Lo importante fue entrar en batalla. La próxima partida ya empieza con experiencia." };
}

export function ResultsPage() {
  const navigate = useNavigate();
  const [showAnswers, setShowAnswers] = useState(false);
  const { seed, questions, answers, score, startedAt, finishedAt, isFinished, resetGame } = useGameStore();
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const incorrectAnswers = answers.filter((answer) => answer.selectedAnswer !== null && !answer.isCorrect).length;
  const skippedAnswers = questions.length - correctAnswers - incorrectAnswers;
  const resultMessage = getResultMessage(score);
  const difficultyResults = useMemo(() => countResults<Difficulty>(questions, answers, "difficulty"), [answers, questions]);
  const categoryResults = useMemo(() => countResults<Category>(questions, answers, "category"), [answers, questions]);

  useEffect(() => {
    if (!isFinished || score < 15) return;
    const timer = window.setTimeout(() => {
      void confetti({ particleCount: 70, spread: 65, origin: { y: 0.7 }, colors: ["#762258", "#4F6D82", "#D8D6D7"], disableForReducedMotion: true });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [isFinished, score]);

  if (!isFinished || questions.length === 0) return <Navigate to={questions.length ? "/game" : "/"} replace />;

  const handleReset = () => {
    resetGame();
    navigate("/", { replace: true });
  };

  return (
    <GameShell compact>
      <header className="mb-5 flex items-center justify-between gap-3">
        <BrandMark compact />
        <div className="display-type flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text-muted)]">
          <Hash className="size-3.5 text-[var(--primary)]" aria-hidden="true" />{seed}
        </div>
      </header>

      <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-[2rem] p-5 text-center sm:p-8">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[var(--secondary)] text-[var(--primary-hover)]">
          <Medal className="size-7" aria-hidden="true" />
        </div>
        <p className="mt-5 text-xs font-bold tracking-[0.16em] text-[var(--primary)] uppercase">Partida terminada</p>
        <h1 className="editorial-type mt-2 text-4xl leading-[1.02] font-medium tracking-[-0.03em] sm:text-5xl">{resultMessage.title}</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--text-muted)]">{resultMessage.body}</p>

        <div className="mx-auto mt-6 max-w-sm rounded-3xl border border-[var(--color-5)] bg-[var(--surface)] px-5 py-5">
          <p className="text-xs font-bold tracking-wider text-[var(--text-muted)] uppercase">Puntaje total</p>
          <p className="display-type mt-1 text-7xl leading-none font-semibold tracking-[-0.04em]">
            {score}<span className="ml-2 text-2xl text-[var(--text-muted)]">/{MAX_SCORE}</span>
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--surface)]">
            <motion.div initial={{ width: 0 }} animate={{ width: `${(score / MAX_SCORE) * 100}%` }} transition={{ delay: 0.2, duration: 0.6 }} className="h-full rounded-full bg-[var(--primary)]" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <SummaryItem icon={Check} label="Correctas" value={`${correctAnswers}/10`} tone="success" />
          <SummaryItem icon={X} label="Incorrectas" value={`${incorrectAnswers}/10`} tone="danger" />
          <SummaryItem icon={Minus} label="Omitidas" value={`${skippedAnswers}/10`} tone="muted" />
          <SummaryItem icon={Clock3} label="Tiempo usado" value={formatElapsedTime(startedAt, finishedAt)} tone="primary" />
        </div>
      </motion.section>

      <section className="mt-3 grid gap-3 sm:grid-cols-2">
        <ResultPanel title="Por dificultad" icon={BarChart3}>
          {DIFFICULTIES.map((difficulty) => (
            <ResultRow key={difficulty} label={DIFFICULTY_LABELS[difficulty]} value={`${difficultyResults[difficulty]?.correct ?? 0} / ${DIFFICULTY_TOTALS[difficulty]}`}>
              <DifficultyBadge difficulty={difficulty} />
            </ResultRow>
          ))}
        </ResultPanel>
        <ResultPanel title="Por categoría" icon={Target}>
          {CATEGORIES.map((category) => (
            <ResultRow key={category} label={CATEGORY_LABELS[category]} value={`${categoryResults[category]?.correct ?? 0} / 2`} />
          ))}
        </ResultPanel>
      </section>

      <section className="mt-3 mb-24">
        <GameButton variant="secondary" onClick={() => setShowAnswers((current) => !current)} aria-expanded={showAnswers}>
          <Code2 className="size-5" aria-hidden="true" />{showAnswers ? "Ocultar respuestas" : "Revisar respuestas"}
          <ChevronDown className={`size-4 transition-transform ${showAnswers ? "rotate-180" : ""}`} aria-hidden="true" />
        </GameButton>
        {showAnswers && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 space-y-2">
            {questions.map((question, index) => {
              const answer = answers.find((item) => item.questionId === question.id);
              const selectedLabel = answer?.selectedAnswer ? `${answer.selectedAnswer}. ${question.options[answer.selectedAnswer]}` : "Omitida";
              return (
                <article key={question.id} className="rounded-2xl border border-[var(--color-4)] bg-[var(--surface)] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="display-type text-sm font-medium text-[var(--text-muted)]">Pregunta {index + 1}</p>
                    {answer?.isCorrect ? <Check className="size-4 text-[var(--success)]" aria-label="Correcta" /> : answer?.selectedAnswer ? <X className="size-4 text-[var(--danger)]" aria-label="Incorrecta" /> : <Minus className="size-4 text-[var(--text-muted)]" aria-label="Omitida" />}
                  </div>
                  {question.code && <pre className="code-block code-block--compact"><code>{question.code}</code></pre>}
                  <p className="mt-2 text-sm leading-5 font-medium">{question.question}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">Tu respuesta: <strong>{selectedLabel}</strong></p>
                  {!answer?.isCorrect && <p className="text-xs leading-5 text-[var(--success)]">Correcta: {question.correctAnswer}. {question.options[question.correctAnswer]}</p>}
                </article>
              );
            })}
          </motion.div>
        )}

        <a
          className="social-link mt-3"
          href="https://chriss-12.github.io/TCA-LP-002-RRSS/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir las redes sociales de TCA en una nueva pestaña"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Redes sociales de TCA
        </a>
      </section>

      <button type="button" className="home-fab" onClick={handleReset} aria-label="Salir a la pantalla principal">
        <LogOut className="size-5" aria-hidden="true" />
        <span>Pantalla principal</span>
      </button>
    </GameShell>
  );
}

interface SummaryItemProps { icon: typeof Check; label: string; value: string; tone: "success" | "danger" | "muted" | "primary"; }
function SummaryItem({ icon: Icon, label, value, tone }: SummaryItemProps) {
  const tones = { success: "text-[var(--success)] bg-[var(--surface)]", danger: "text-[var(--danger)] bg-[var(--surface)]", muted: "text-[var(--text-muted)] bg-[var(--surface)]", primary: "text-[var(--primary)] bg-[var(--surface)]" };
  return <div className={`rounded-2xl border border-[var(--color-5)] p-3 ${tones[tone]}`}><Icon className="mx-auto size-4" aria-hidden="true" /><p className="mt-1 text-[11px]">{label}</p><p className="display-type mt-0.5 text-xl font-semibold">{value}</p></div>;
}

interface ResultPanelProps { title: string; icon: typeof Check; children: React.ReactNode; }
function ResultPanel({ title, icon: Icon, children }: ResultPanelProps) {
  return (
    <div className="rounded-[1.5rem] border border-[var(--color-4)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card)]">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="size-4 text-[var(--primary)]" aria-hidden="true" />
        <h2 className="display-type text-lg font-semibold">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface ResultRowProps { label: string; value: string; children?: React.ReactNode; }
function ResultRow({ label, value, children }: ResultRowProps) {
  return <div className="flex items-center justify-between gap-3 text-sm">{children ?? <span className="text-[var(--text-muted)]">{label}</span>}<span className="display-type text-lg font-semibold">{value}</span></div>;
}
