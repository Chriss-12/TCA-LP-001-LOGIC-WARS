import { ExternalLink, Share2 } from "lucide-react";

const SOCIAL_URL = "https://chriss-12.github.io/TCA-LP-002-RRSS/";

/** Enlace externo reutilizable hacia el concentrador de redes sociales de TCA. */
export function SocialLinkCard() {
  return (
    <a
      className="social-link"
      href={SOCIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir las redes sociales de TCA en una nueva pestaña"
    >
      <span className="social-link__icon" aria-hidden="true">
        <Share2 className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <strong className="block font-medium text-[var(--graphite)]">Redes sociales de TCA</strong>
        <span className="block text-sm text-[var(--text-muted)]">Encuentra nuestros canales y enlaces</span>
      </span>
      <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
    </a>
  );
}
