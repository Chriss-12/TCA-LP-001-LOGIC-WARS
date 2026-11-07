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
- Gris institucional: `#A7A5A6`, quiet borders and supporting details.
- Gris plata: `#D8D6D7`, quiet backgrounds and dividers.
- Gris carbón: `#454545`, muted text.
- Grafito: `#252525`, primary text.
- Azul marino: `#18324A`, positive semantic text.
- Azul acero: `#4F6D82`, cool accent in the page gradient.

Green, yellow and red are deliberate semantic exceptions for countdown urgency and answer feedback.

The palette comes directly from the TCA chromatic reference supplied by the user. The page background is a fixed Vino ejecutivo to Azul acero gradient behind stable light surfaces.

### Verified contrast pairs

- Text-safe: Grafito on Blanco humo, Gris plata or Gris institucional.
- Text-safe fills: Blanco humo on Vino TCA, Vino ejecutivo, Ciruela institucional, Azul marino or Azul acero.
- Text-safe accents: Vino TCA, Ciruela institucional and Azul marino on Gris plata.
- Vino TCA on Gris institucional is limited to large UI shapes and state borders.

## Typography

- Editorial: Fraunces Variable, weight 500, reserved for major result headlines and modal titles.
- Display, body and controls: Nunito Variable, usually weights 350–500.
- Timer and scores use tabular numerals when useful.

## Components

- Question and answers are always separate surfaces.
- Active game uses one centered white question card and a separate white answer card.
- Primary button uses the primary fill; secondary button uses a white surface and border.
- A fixed mobile HUD keeps the score on the left and the countdown on the right.
- The countdown shows only digits and changes from green to yellow to red at the remaining-time thirds.
- Setup includes a persisted 2–5 minute stepper with 3 minutes as the default.
- Setup rules and match facts live in a blurred internal dialog opened from the header.
- Answer choices keep a compact 2 × 2 grid on mobile and desktop, with a 64 px minimum mobile height.
- Correct and incorrect selections trigger a brief green or red vector-face reaction.
- Surrender uses an icon-only floating exit button and always requires an explicit yes/no confirmation.
- Results use a labeled floating exit button plus a separate external TCA social link.
- The page uses one fixed Vino ejecutivo to Azul acero gradient with no particles, grid, dotted overlay, or pointer reaction.
- The compact upper-left brand mark uses 18 px type and a 32 px diamond signature.
- TCA identity uses the three-diamond reference supplied by the user as the favicon and as a restrained interface motif.
- Code is separated from the prompt, manually indented, and never wrapped at arbitrary characters.
- Section separation uses spacing and surface contrast, not mixed divider treatments.

## Motion

- 150–300 ms UI transitions.
- Question changes use a short vertical fade.
- No looping content animation.
- Respect `prefers-reduced-motion` globally.
