---
name: tca-brand-ui
description: Preserve and extend the TCA La Paz visual identity when designing or changing its web interfaces.
---

# TCA brand UI

Use the supplied TCA La Paz identity to guide color, type, copy and visual motion. Keep new work recognizable without copying a generic link-page template.

## Evidence before invention

Treat `src/assets/tca-la-paz-logo.png` as the primary brand evidence. Burgundy, white, restrained gray and the three-diamond motif are exact identity cues.

Do not infer claims, partnerships, dates or audience statistics from the logo. Label unverified marketing content as a proposal or leave it out.

## Build the visual system

- Use burgundy for primary emphasis and focus, not as a full-page text background.
- Use pale rose and blue-gray light fields to support the burgundy without competing with it.
- Pair an editorial serif headline with a neutral, highly readable interface sans serif.
- Use generous corners for major containers and tighter corners for link rows.
- Keep one memorable effect. For this project it is the touch-responsive ambient gradient.
- Use the diamond motif sparingly as a signature, divider or favicon.

## Protect usability

- Keep body text at 16 pixels or larger on phones.
- Keep normal text contrast at 4.5:1 and focus indicators at 3:1 or higher.
- Preserve 48-pixel touch targets and eight pixels between independent controls.
- Give motion a static reduced-motion equivalent.
- Keep decorative layers outside the accessibility tree.

## Hand-off

Use `$build-social-hub` for link data, sharing behavior and social-card interaction. Use the repository accessibility skills for a full WCAG review.

## Before you finish

| Detection pattern | Correction |
| --- | --- |
| Purple or cyan replaces the TCA burgundy | Return the primary role to the logo-derived burgundy |
| Every element uses the same radius | Restore distinct major-container and link-row radii |
| Gradient crosses text with unstable contrast | Move the gradient behind a stable surface or vignette |
| Copy claims outcomes not present in project data | Remove the claim or request verified wording |
| Motion runs under reduced-motion preferences | Replace movement with an immediate state change |

## Reporting

Report the identity source used, tokens changed and any contrast checks performed. State when a visual choice is inferred rather than present in the source asset.
