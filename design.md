# Rinse

## Mission
Create implementation-ready, token-driven UI guidance for Rinse that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Rinse
- URL: https://www.rinse.com/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=AvenirNext`, `font.family.stack=AvenirNext`, `font.size.base=20px`, `font.weight.base=400`, `font.lineHeight.base=30px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=15.56px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=22px`, `font.size.4xl=24px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#1e1f21`, `color.text.tertiary=#53585f`, `color.text.inverse=#3a3d40`, `color.surface.base=#000000`
- Spacing scale: `space.1=0.31px`, `space.2=0.32px`, `space.3=0.36px`, `space.4=1px`, `space.5=2px`, `space.6=4px`, `space.7=6px`, `space.8=9px`
- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=16px`, `radius.md=50px`, `radius.lg=56px` | `shadow.1=rgba(255, 255, 255, 0.3) 0px -1.0892px 0px 0px inset`, `shadow.2=rgba(255, 255, 255, 0.3) 0px -1.26px 0px 0px inset`, `shadow.3=rgba(0, 0, 0, 0.12) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` | `motion.duration.instant=100ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`, `motion.duration.slow=1000ms`, `motion.duration.slower=1200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (195), lists (43), buttons (42), cards (39), navigation (3).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
