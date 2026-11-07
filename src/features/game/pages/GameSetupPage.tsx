import { useState, type FormEvent } from "react";
import { ArrowRight, Clock3, Hash, Smartphone, UsersRound } from "lucide-react";
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
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-bold text-[var(--text-muted)]">10 preguntas</span>
      </header>

      <div className="flex flex-1 flex-col pt-5 pb-9 sm:pt-8 sm:pb-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          className="glass-card rounded-[2rem] p-5 sm:p-6"
        >
          <h1 className="editorial-type text-3xl leading-tight font-semibold sm:text-4xl">Configura la partida</h1>
          <p className="mt-2 text-base leading-6 text-[var(--text-muted)]">
            Usa el mismo número y tiempo en los dos celulares.
          </p>

          <label htmlFor="game-code" className="mt-5 block text-sm font-bold">
            Número de partida
          </label>

          <div className="game-code-field mt-3 flex min-w-0 items-stretch overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--surface)]">
            <span className="display-type flex shrink-0 items-center border-r border-[var(--border)] bg-[var(--surface-muted)] px-3 text-xl font-semibold text-black sm:px-4">
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
              className="game-code-input display-type h-17 min-w-0 flex-1 bg-transparent px-3 text-3xl font-semibold tracking-[0.12em] placeholder:text-[var(--color-5)] sm:px-4"
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

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <GameFact icon={UsersRound} value="2 vs. 2" label="Formato" />
          <GameFact icon={Smartphone} value="1 por equipo" label="Celular" />
          <GameFact
            icon={Clock3}
            value={`${durationMinutes} minutos`}
            label="Tiempo total"
            className="col-span-2 sm:col-span-1"
          />
        </div>

        <GameRules />
      </div>
    </GameShell>
  );
}

interface GameFactProps {
  icon: typeof Smartphone;
  value: string;
  label: string;
  className?: string;
}

function GameFact({ icon: Icon, value, label, className = "" }: GameFactProps) {
  return (
    <div className={`flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--color-4)] bg-[var(--surface)] px-3 py-3.5 sm:px-4 ${className}`}>
      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--color-2)] text-[var(--color-1)]"><Icon className="size-4" aria-hidden="true" /></div>
      <div className="min-w-0">
        <p className="display-type truncate text-base font-semibold">{value}</p>
        <p className="text-[11px] text-[var(--text-muted)]">{label}</p>
      </div>
    </div>
  );
}
