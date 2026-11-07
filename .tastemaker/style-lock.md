# TCA Logic Wars style lock

## Direction

- Mood: playful, focused, welcoming.
- Visual metaphor: a soft competition arena.
- Mobile-first with a 320 px minimum viewport.
- User-requested rounded language: 16 px controls, 24–32 px primary surfaces, full pills for metadata.

## Palette

- Vino TCA: `#762258`, primary actions and progress.
- Vino ejecutivo: `#4B1638`, pressed and hover emphasis.
- Ciruela institucional: `#5F294B`, borders and restrained brand detail.
- Blanco humo: `#F8F8F8`, page and card surfaces.
- Gris institucional: `#A7A5A6`, intermediate timer state.
- Gris plata: `#D8D6D7`, quiet backgrounds and dividers.
- Gris carbón: `#454545`, muted text.
- Grafito: `#252525`, primary text.
- Azul marino: `#18324A`, positive semantic text.
- Azul acero: `#4F6D82`, safe timer state and cool accent.

The palette comes directly from the TCA chromatic reference supplied by the user. The page background remains a fixed Blanco humo to Gris plata gradient.

### Verified contrast pairs

- Text-safe: Grafito on Blanco humo, Gris plata or Gris institucional.
- Text-safe fills: Blanco humo on Vino TCA, Vino ejecutivo, Ciruela institucional, Azul marino or Azul acero.
- Text-safe accents: Vino TCA, Ciruela institucional and Azul marino on Gris plata.
- Vino TCA on Gris institucional is limited to large UI shapes and state borders.

## Typography

- Editorial: Fraunces Variable, weights 550–700, reserved for identity and major result headlines.
- Display: Fredoka Variable, weights 500–650.
- Body and controls: Nunito Variable, weights 400–700.
- Timer and scores use tabular numerals when useful.

## Components

- Question and answers are always separate surfaces.
- Active game uses one centered white question card and a separate white answer card.
- Primary button uses the primary fill; secondary button uses a white surface and border.
- A fixed mobile HUD keeps the score on the left and the countdown on the right.
- The countdown shows only digits and changes from Azul acero to Gris institucional to Vino TCA at the remaining-time thirds.
- Setup includes a persisted 2–5 minute stepper with 3 minutes as the default.
- Correct and incorrect selections trigger a brief vector-face reaction.
- Surrender uses an icon-only floating exit button and always requires an explicit yes/no confirmation.
- The page uses one fixed white gradient with no particles, grid, dotted overlay, or pointer reaction.
- TCA identity uses the three-diamond reference supplied by the user as the favicon and as a restrained interface motif.
- Code is separated from the prompt, manually indented, and never wrapped at arbitrary characters.
- Section separation uses spacing and surface contrast, not mixed divider treatments.

## Motion

- 150–300 ms UI transitions.
- Question changes use a short vertical fade.
- No looping content animation.
- Respect `prefers-reduced-motion` globally.
