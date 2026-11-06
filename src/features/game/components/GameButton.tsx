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
      ? "bg-[var(--primary)] text-[var(--color-1)] shadow-[0_8px_20px_rgb(121_33_93/0.2)]"
      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]";

  return (
    <button
      ref={ref}
      type={type}
      className={`display-type flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-lg font-semibold transition-[background-color,border-color,opacity] active:opacity-80 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-35 cursor-pointer hover:bg-[rgb(121_33_93/0.8)] ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
