import { Check, Clock3, ListChecks, LockKeyhole, Trophy } from "lucide-react";

const RULES = [
  {
    icon: ListChecks,
    title: "Misma partida",
    description: "Ambos equipos deben ingresar el mismo número para recibir las mismas 10 preguntas.",
  },
  {
    icon: Trophy,
    title: "Puntaje",
    description: "Cada acierto suma 1, 2 o 3 puntos según la dificultad. El máximo es 21.",
  },
  {
    icon: LockKeyhole,
    title: "Respuesta definitiva",
    description: "Una respuesta confirmada no se puede cambiar ni responder por segunda vez.",
  },
  {
    icon: Clock3,
    title: "Tiempo total",
    description: "El reloj cubre toda la partida. Al llegar a cero se muestran los resultados obtenidos.",
  },
  {
    icon: Check,
    title: "Omitir está permitido",
    description: "Puedes pasar una pregunta sin responder. La omisión vale cero puntos y es definitiva.",
  },
];

/** Resume las reglas esenciales antes de que los equipos inicien la partida. */
export function GameRules() {
  return (
    <section className="rules-section mt-8" aria-labelledby="rules-title">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[var(--primary)]">Antes de empezar</p>
          <h2 id="rules-title" className="editorial-type mt-1 text-3xl leading-tight font-semibold">
            Reglas de la partida
          </h2>
        </div>
        <span className="display-type shrink-0 text-sm font-semibold text-[var(--text-muted)]">5 reglas</span>
      </div>

      <ol className="mt-5 divide-y divide-[var(--border)]">
        {RULES.map(({ icon: Icon, title, description }, index) => (
          <li key={title} className="grid grid-cols-[2.75rem_1fr] gap-3 py-4 first:pt-0 last:pb-0">
            <div className="relative grid size-11 place-items-center rounded-[var(--radius-row)] bg-[var(--rose-wash)] text-[var(--primary)]">
              <Icon className="size-5" strokeWidth={2.1} aria-hidden="true" />
              <span className="sr-only">Regla {index + 1}</span>
            </div>
            <div>
              <h3 className="display-type text-base font-semibold">{title}</h3>
              <p className="mt-1 text-base leading-6 text-[var(--text-muted)]">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
