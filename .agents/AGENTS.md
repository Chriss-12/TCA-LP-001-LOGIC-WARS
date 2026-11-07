# TCA La Paz interface guidance

This directory holds project-specific guidance for the TCA La Paz social hub. Apply it together with the repository root instructions.

## Product goal

Build a fast, mobile-first link hub for The Consulting Academy La Paz. The first screen should identify TCA and make every official channel easy to open.

## Brand source

- Treat `src/assets/tca-la-paz-logo.png` as the identity source.
- Preserve the burgundy, white and neutral-gray character of the supplied logo.
- Keep TCA formal, welcoming and community-oriented.
- Do not invent achievements, dates, partners, testimonials or metrics.
- Use the official URLs already defined in `src/App.tsx`.

## Interface rules

- Use `react-icons` for social networks and utility icons.
- Keep one clear column on phones and a maximum content width on larger screens.
- Make links at least 48 pixels tall with visible focus and pressed states.
- Let decorative gradients respond to pointer and touch input without blocking navigation.
- Respect `prefers-reduced-motion` and keep text readable without animation.
- Keep the logo dimensions explicit to prevent layout shift.
- Preserve Spanish metadata and accessible names.

## Local skills

- Use `$tca-brand-ui` when changing identity, color, typography, copy or decorative motion.
- Use `$build-social-hub` when adding, removing or revising social links and link-page interactions.
- Use both when creating a new TCA landing or link page.

## Verification

Run `pnpm build` and `pnpm lint` after code changes. Check the page at 375 pixels, desktop width and short landscape height.

Verify keyboard navigation, external URLs, sharing feedback and reduced motion. Confirm that pointer effects stay decorative and never reduce text contrast.
