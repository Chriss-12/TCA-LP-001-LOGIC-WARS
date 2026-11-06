import { useEffect, useState } from "react";

export function useGameCountdown(
  startedAt: number | null,
  durationMinutes: number,
  isFinished: boolean,
  onExpire: (finishedAt: number) => void,
) {
  const durationMs = durationMinutes * 60 * 1000;
  const getRemaining = () => {
    if (!startedAt) return durationMs;
    return Math.max(0, startedAt + durationMs - Date.now());
  };

  const [remainingMs, setRemainingMs] = useState(getRemaining);

  useEffect(() => {
    if (!startedAt || isFinished) return;

    const deadline = startedAt + durationMs;
    const updateRemaining = () => {
      const nextRemaining = Math.max(0, deadline - Date.now());
      setRemainingMs(nextRemaining);

      if (nextRemaining === 0) {
        onExpire(deadline);
      }
    };

    updateRemaining();
    const interval = window.setInterval(updateRemaining, 250);

    return () => window.clearInterval(interval);
  }, [durationMs, isFinished, onExpire, startedAt]);

  return remainingMs;
}
