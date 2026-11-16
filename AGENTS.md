# AGENTS.md

## Project

Single-page Vite + React 19 app in this directory (`controle-gastos/` is the git repo root; the parent folder is only a container). No backend, router, state library, TypeScript, or CSS framework — plain JSX + CSS.

`src/App.jsx` is still the untouched Vite counter template. "Controle de Gastos" work means replacing that demo; `src/main.jsx` is the only entrypoint and should stay a thin mount (`#root`).

Assignment scope, from the section headings in `RELATORIO.md`: add expense, show total, remove expense, filter, and optional `localStorage` persistence. Keep changes inside that scope.

## Commands (run inside `controle-gastos/`)

- `npm run dev` — Vite dev server with HMR
- `npm run lint` — oxlint using `.oxlintrc.json`
- `npm run build` → `dist/`; `npm run preview` to serve the build
- No test runner, no typecheck script, no CI. Verify with `npm run lint` then `npm run build`.
- `npm test` does not exist — don't invent one unless asked.

## Conventions and gotchas

- UI copy is pt-BR. Money input must accept comma decimals (`12,50`), not just dots — see `RELATORIO.md` M1.1.
- Totals are checked against `0,10 + 0,20` (M2.1/M2.2). Sum integer cents (or round) so the total renders `0,30` instead of `0.30000000000000004`.
- oxlint's `react/only-export-components` rule warns when a component file exports anything other than components, so put helpers in their own module instead of exporting them alongside `App`.
- `src/index.css` is global, `src/App.css` is component styling. Files in `public/` are served from `/` (e.g. `/icons.svg`); imported images live in `src/assets/`.
- `RELATORIO.md` is the student's graded worksheet with blank `Resposta:` fields — do not fill it in unless explicitly asked.
- Repo path contains spaces and a `+`; quote paths in shell commands. Git: branch `master`, one commit `projeto base`, no remote.
