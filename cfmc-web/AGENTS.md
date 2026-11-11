<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CFMC web development guide

## Project setup

- This is a Next.js App Router app using React 19, TypeScript 7, Chakra UI 2, and Supabase.
- Use pnpm 11 and commit changes to `pnpm-lock.yaml` and `pnpm-workspace.yaml` whenever dependencies change. Run `ppnpm install --frozen-lockfile` to verify a clean install.
- Keep Chakra UI on major version 2. Do not introduce Chakra 3 APIs or migrate the theme or provider unless explicitly requested.
- `src/app` contains routes and layouts; `src/components` contains shared UI; `src/lib` contains integrations; `src/types` contains shared types. The `@/` import alias points to `src/`.

## Making changes

- Follow nearby components and naming conventions before adding a new pattern or dependency.
- Prefer Server Components for data access and static content. Add `"use client"` only when a component needs browser APIs, state, effects, or event handlers.
- Keep Supabase secrets and privileged operations on the server. Do not put service-role keys or other secrets in `NEXT_PUBLIC_` variables or client components.
- Use semantic HTML and keyboard-accessible controls. Check responsive layouts at narrow and wide widths when changing UI.
- Keep changes focused. Avoid unrelated formatting, generated-file edits, and broad dependency upgrades during feature work.

## Verification

- Run `pnpm typecheck`, `pnpm lint`, and `pnpm build` after code or dependency changes. Fix failures before considering the work complete.
- Use `pnpm dev` and check the affected route in a browser for visible UI changes; a successful build alone does not verify interaction or layout.
- `pnpm lint` uses Oxlint. The `.eslintrc.json` file is a legacy reference and is not the active lint setup.
- Do not edit files inside `.next/` or `node_modules/`; both are generated.
