import { useEffect, useRef } from "react";
import { Flag, X } from "lucide-react";
import { motion } from "motion/react";

import { GameButton } from "./GameButton";

interface SurrenderDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export function SurrenderDialog({ onCancel, onConfirm }: SurrenderDialogProps) {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onCancel]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onCancel}>
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="surrender-title"
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onMouseDown={(event) => event.stopPropagation()}
        className="surrender-dialog"
      >
        <button type="button" onClick={onCancel} className="dialog-close" aria-label="Cerrar confirmación">
          <X className="size-5" aria-hidden="true" />
        </button>
        <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-[var(--color-5)] bg-[var(--surface)]">
          <Flag className="size-7" aria-hidden="true" />
        </div>
        <h2 id="surrender-title" className="display-type mt-4 text-center text-3xl font-semibold">
          ¿Rendirse ahora?
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-6 text-[var(--text-muted)]">
          La partida actual se cerrará y volverás a la pantalla principal.
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <GameButton ref={cancelButtonRef} variant="secondary" onClick={onCancel}>
            No, continuar
          </GameButton>
          <GameButton onClick={onConfirm}>
            Sí, rendirse
          </GameButton>
        </div>
      </motion.section>
    </div>
  );
}
