import { useState, type FormEvent } from "react";
import { ArrowRight, BookOpen, Hash } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { BrandMark } from "../components/BrandMark";
import { GameButton } from "../components/GameButton";
import { GameRules } from "../components/GameRules";
import { GameShell } from "../components/GameShell";
import { TimeSettings } from "../components/TimeSettings";
import { useGameStore } from "../store/game.store";

export function GameSetupPage() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { startGame, durationMinutes, setDurationMinutes } = useGameStore();
  const [code, setCode] = useState("");
  const [showRules, setShowRules] = useState(false);

  const handleCodeChange = (value: string) => {
    setCode(value.replace(/\D/g, "").slice(0, 4));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!code) {
      toast.error("Escribe el número de la partida");
      return;
    }

    try {
      startGame(`TCA-${code}`);
      navigate("/game");
    } catch (error) {
      const message = error instanceof Error ? error.message : "No se pudo iniciar la partida.";
      toast.error(message);
    }
  };

  return (
    <GameShell>
      <header className="flex items-center justify-between pb-4">
        <BrandMark />
        <button type="button" className="rules-trigger" onClick={() => setShowRules(true)}>
          <BookOpen className="size-4" aria-hidden="true" />
          Reglas
        </button>
      </header>

      <div className="flex flex-1 flex-col justify-center py-5 sm:py-8">
        <motion.form
          onSubmit={handleSubmit}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          className="glass-card rounded-[2rem] p-5 sm:p-6"
        >
          <label htmlFor="game-code" className="block text-sm font-medium">
            Número de partida
          </label>

          <div className="game-code-field mt-3 flex min-w-0 items-stretch overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--surface)]">
            <span className="display-type flex shrink-0 items-center border-r border-[var(--border)] bg-[var(--surface-muted)] px-3 text-xl font-medium text-black sm:px-4">
              TCA–
            </span>
            <input
              id="game-code"
              value={code}
              onChange={(event) => handleCodeChange(event.target.value)}
              placeholder="4821"
              inputMode="numeric"
              pattern="[0-9]{1,4}"
              autoComplete="off"
              maxLength={4}
              aria-describedby="code-help"
              className="game-code-input display-type h-17 min-w-0 flex-1 bg-transparent px-3 text-3xl font-medium tracking-[0.12em] placeholder:text-[var(--color-5)] sm:px-4"
            />
            <Hash className="mr-4 size-5 self-center text-[var(--primary)]" aria-hidden="true" />
          </div>
          <p id="code-help" className="mt-2 text-xs text-[var(--text-muted)]">
            Hasta 4 dígitos. Introduzcan el mismo número en ambos celulares.
          </p>

          <TimeSettings value={durationMinutes} onChange={setDurationMinutes} />

          <GameButton type="submit" className="mt-5 justify-between! px-5!">
            Entrar a la partida
            <ArrowRight className="size-5" aria-hidden="true" />
          </GameButton>
        </motion.form>
      </div>

      {showRules && (
        <GameRules durationMinutes={durationMinutes} onClose={() => setShowRules(false)} />
      )}
    </GameShell>
  );
}
