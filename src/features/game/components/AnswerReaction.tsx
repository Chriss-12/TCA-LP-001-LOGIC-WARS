import { Frown, Smile } from "lucide-react";
import { motion } from "motion/react";

interface AnswerReactionProps {
  isCorrect: boolean;
}

export function AnswerReaction({ isCorrect }: AnswerReactionProps) {
  const Icon = isCorrect ? Smile : Frown;

  return (
    <motion.div
      className={`answer-reaction ${isCorrect ? "answer-reaction--correct" : "answer-reaction--wrong"}`}
      initial={{ opacity: 0, scale: 0.65, x: "-50%", y: 12 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.65, 1.08, 1, 0.95],
        x: "-50%",
        y: [12, 0, 0, -8],
      }}
      transition={{ duration: 1.15, times: [0, 0.2, 0.72, 1], ease: "easeOut" }}
      role="status"
      aria-live="polite"
    >
      <Icon className="size-12" strokeWidth={2.2} aria-hidden="true" />
      <span className="display-type text-2xl font-semibold">{isCorrect ? "¡Bien!" : "¡Casi!"}</span>
    </motion.div>
  );
}
