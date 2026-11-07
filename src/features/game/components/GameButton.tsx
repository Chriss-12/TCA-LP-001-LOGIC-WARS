import { forwardRef, type ButtonHTMLAttributes, type PropsWithChildren } from "react";

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: "primary" | "secondary";
}

export const GameButton = forwardRef<HTMLButtonElement, GameButtonProps>(function GameButton({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: GameButtonProps, ref) {
  const styles =
    variant === "primary"
      ? "bg-[var(--primary)] text-[var(--smoke)] shadow-[var(--shadow-button)] hover:bg-[var(--primary-hover)]"
      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--silver)]";

  return (
    <button
      ref={ref}
      type={type}
      className={`display-type flex min-h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-4 py-3 text-lg font-medium transition-[background-color,border-color,opacity] active:opacity-80 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-35 ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
