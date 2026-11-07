import { useEffect, useRef } from "react";
import { Check, Clock3, ListChecks, LockKeyhole, Smartphone, Trophy, UsersRound, X } from "lucide-react";

interface GameRulesProps {
  durationMinutes: number;
  onClose: () => void;
}

const RULES = [
  {
    icon: ListChecks,
    title: "Misma partida",
    description: "Ambos equipos ingresan el mismo número y reciben las mismas 10 preguntas.",
  },
  {
    icon: Trophy,
    title: "Puntaje",
    description: "Cada acierto suma 1, 2 o 3 puntos según la dificultad. El máximo es 21.",
  },
  {
    icon: LockKeyhole,
    title: "Respuesta definitiva",
    description: "Una respuesta confirmada no se puede cambiar ni responder nuevamente.",
  },
  {
    icon: Clock3,
    title: "Tiempo total",
    description: "El reloj cubre toda la partida. Cuando llega a cero se muestran los resultados.",
  },
  {
    icon: Check,
    title: "Omitir está permitido",
    description: "Omitir avanza a la pregunta siguiente y suma cero puntos.",
  },
];

/** Muestra las reglas en una ventana interna accesible y optimizada para móvil. */
export function GameRules({ durationMinutes, onClose }: GameRulesProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="rules-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="rules-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="dialog-close"
          onClick={onClose}
          aria-label="Cerrar reglas"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <h2 id="rules-title" className="editorial-type pr-12 text-3xl leading-tight font-medium">
          Reglas de la partida
        </h2>

        <div className="rules-facts mt-5" aria-label="Resumen de la partida">
          <RuleFact icon={UsersRound} value="2 vs. 2" label="Formato" />
          <RuleFact icon={Smartphone} value="1 por equipo" label="Celular" />
          <RuleFact icon={Clock3} value={`${durationMinutes} min`} label="Tiempo" />
        </div>

        <ol className="mt-5 divide-y divide-[var(--border)]">
          {RULES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-3.5 first:pt-0 last:pb-0">
              <div className="grid size-10 place-items-center rounded-[var(--radius-row)] bg-[var(--rose-wash)] text-[var(--primary)]">
                <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="display-type text-base font-medium">{title}</h3>
                <p className="mt-1 text-base leading-6 text-[var(--text-muted)]">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

interface RuleFactProps {
  icon: typeof Smartphone;
  value: string;
  label: string;
}

function RuleFact({ icon: Icon, value, label }: RuleFactProps) {
  return (
    <div className="min-w-0 text-center">
      <Icon className="mx-auto size-4 text-[var(--primary)]" aria-hidden="true" />
      <p className="display-type mt-1 truncate text-sm font-medium">{value}</p>
      <p className="text-xs text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
