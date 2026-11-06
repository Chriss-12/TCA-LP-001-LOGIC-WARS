import type { Question } from "../../questions/types/question.types";

interface QuestionPromptProps {
  question: Question;
}

/** Presenta código y enunciado con jerarquías independientes y legibles en móvil. */
export function QuestionPrompt({ question }: QuestionPromptProps) {
  return (
    <div className="mx-auto mt-5 w-full max-w-xl">
      {question.code && (
        <pre className="code-block" aria-label="Código de la pregunta">
          <code>{question.code}</code>
        </pre>
      )}
      <h1
        id="current-question"
        className={`question-title display-type mx-auto text-center leading-[1.12] font-semibold tracking-[-0.025em] ${
          question.code
            ? "mt-4 text-[clamp(1.45rem,6vw,2.15rem)]"
            : "text-[clamp(1.75rem,7vw,2.75rem)]"
        }`}
      >
        {question.question}
      </h1>
    </div>
  );
}
