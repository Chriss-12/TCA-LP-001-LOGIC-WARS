import type { PropsWithChildren, ReactNode } from "react";

interface GameShellProps extends PropsWithChildren {
  header?: ReactNode;
  bottomDock?: ReactNode;
  compact?: boolean;
}

/** Mantiene el contenido centrado y seguro para pantallas móviles pequeñas. */
export function GameShell({ children, header, bottomDock, compact = false }: GameShellProps) {
  return (
    <main className="game-surface relative min-h-svh overflow-hidden text-[var(--text-primary)]">
      <div
        className={`relative mx-auto flex min-h-svh w-full max-w-3xl flex-col px-3.5 min-[360px]:px-4 sm:px-7 ${
          compact ? "py-4 sm:py-6" : "py-5 sm:py-8"
        } ${bottomDock ? "pb-28! sm:pb-30!" : ""}`}
      >
        {header}
        {children}
      </div>
      {bottomDock}
    </main>
  );
}
