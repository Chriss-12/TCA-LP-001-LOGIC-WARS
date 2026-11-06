# TCA Logic Wars style lock

## Direction

- Mood: playful, focused, welcoming.
- Visual metaphor: a soft competition arena.
- Mobile-first with a 320 px minimum viewport.
- User-requested rounded language: 16 px controls, 24–32 px primary surfaces, full pills for metadata.

## Palette

- Page background: a restrained blend of `#DDBED0` and `#7B506B`
- All primary text: black (`#111`)
- Primary buttons and progress: `#79215D`
- Every card and content container: white (`#FCFCFC`)
- Card borders and quiet separators: `#CCC` or `#7B506B`

The five user-provided colors are mandatory for backgrounds, cards, controls, particles, and decorative states. Semantic success and danger colors may appear only with an icon or label and never replace the locked surface palette.

## Typography

- Display: Fredoka Variable, weights 500–650.
- Body and controls: Nunito Variable, weights 400–700.
- Timer and scores use tabular numerals when useful.

## Components

- Question and answers are always separate surfaces.
- Active game uses one centered white question card and a separate white answer card.
- Primary button uses the primary fill; secondary button uses a white surface and border.
- A fixed bottom HUD keeps the brand on the left and the countdown on the right.
- The countdown background moves through green, yellow, and red at the remaining-time thirds.
- Setup includes a persisted 2–5 minute stepper with 3 minutes as the default.
- Correct and incorrect selections trigger a brief vector-face reaction.
- Surrender always requires an explicit yes/no confirmation.
- The page uses one smooth `#DDBED0` to `#7B506B` background gradient with no particles, grid, or dotted overlay.
- Code is separated from the prompt, manually indented, and never wrapped at arbitrary characters.
- Section separation uses spacing and surface contrast, not mixed divider treatments.

## Motion

- 150–300 ms UI transitions.
- Question changes use a short vertical fade.
- No looping content animation.
- Respect `prefers-reduced-motion` globally.
