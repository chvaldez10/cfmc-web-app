# 🧭 Reusable Prompt: Guide to Building Scalable Features with Next.js & Supabase

## **Role**

You are an **expert software architect and developer advocate**. Your task is to create a **production-ready, best-practices guide** for engineers building scalable features with our tech stack. Assume your audience is a team of mid-to-senior engineers who will follow this document as the **blueprint for all future development.**

### **Goal**

Generate a **comprehensive and opinionated guide** that explains:

1. The **"why"** behind each principle (trade-offs, performance, security).
2. The **"how"** in practice (concise code snippets, examples, folder structure).
3. The **"what not to do"** (common pitfalls, anti-patterns).

This guide must emphasize **scalability, maintainability, type safety, and security**.

### **Our Established Tech Stack**

- **Framework:** Next.js (App Router, using Server Components + SSR + Edge Middleware)
- **Backend & Database:** Supabase (Postgres, Auth, Storage, Realtime)
- **UI Library:** Chakra UI (for a consistent design system)
- **Language:** TypeScript (strict mode, no `any`)

---

### **Core Principles to Cover**

#### **1. Architectural Philosophy: Server-Centric & Type-Safe**

- Explain the **synergy between Next.js Server Components and Supabase**.
- Show how server-side data fetching:

  - Reduces bundle size & client hydration cost.
  - Prevents secrets from leaking to the browser.
  - Makes data access faster and more secure.

- Diagram or explain the **request lifecycle**:

  - Request → Middleware/Auth check → Server Component → Supabase query (server) → Rendered HTML/stream to client.

---

#### **2. Database Development & Schema Management**

- **Schema First Approach**: Every feature starts with a schema migration.
- Provide a **template `CREATE TABLE` statement** with best practices:

  - UUID primary keys.
  - `created_at`, `updated_at` with `DEFAULT now()`.
  - RLS enabled by default.

- **RLS Policies**:

  - Explain why RLS is **non-negotiable** (data security at the database level).
  - Provide a sample `SELECT` policy for authenticated users.

- **Seeding Data**:

  - Example `INSERT` script for dev/test environments.
  - Encourage version-controlled seeds (predictable local setup).

- **Type Generation**:

  - Supabase CLI command: `supabase gen types typescript --project-id your-project-id > types/database.types.ts`.
  - Explain that type generation must run **after every schema migration**.
  - Enforce "type trust": no query should return `any`.

---

#### **3. The Data Access Layer: A Single Source of Truth**

- Define principle: **Separate data fetching from UI logic.**
- Folder convention: `lib/data/featureName.ts`.
- Show how a `"use server"` module:

  - Uses generated DB types.
  - Queries Supabase with full type safety.
  - Transforms DB rows into **UI-friendly DTOs** (Data Transfer Objects).

- Example: `getUserProfile(userId)` function returning a type-safe object for UI.
- Explain why this abstraction improves **testability, maintainability, and scaling**.

---

#### **4. UI & Component Implementation**

- **Server Components**:

  - Example showing how a server component imports and calls a data access function.
  - Demonstrate passing data to Chakra UI components.

- **Chakra UI Integration**:

  - How to build reusable, type-safe UI primitives (e.g., `Card`, `Table`) that consume Supabase data.

- **Suspense & Error Boundaries**:

  - Show modern handling of loading/error states at the **layout level**.
  - Best practices for large-scale apps (avoid per-component spinners).

---

#### **5. Authentication & Authorization**

- **Server-Side Auth First**: Never rely on client-only auth checks.
- **Integration Pattern**:

  - Use `@supabase/ssr` and `middleware.ts` for SSR auth.
  - Make user sessions available in Server Components and Server Actions.

- **Authorization Checks**:

  - Example: check session + enforce RLS at query layer.
  - Pattern: `if (!session) redirect("/login")`.

- **Chakra UI + Auth**:

  - Example auth modal, conditional UI rendering (login/logout states).

- Clarify difference between **authN (who you are)** vs **authZ (what you can do)**.

---

#### **6. Real-Time Features**

- How to integrate **Supabase Realtime** safely:

  - Only subscribe on the **client side** (React hooks).
  - Use it to hydrate or refresh already secure server-fetched data.

- Example: Live chat or notifications with a `useRealtime` hook.
- Pitfall: never rely on client-only realtime data without server validation.

---

#### **7. Project Structure & Conventions**

- Recommended folder layout:

  ├───src
  │ ├───app
  │ │ ├───(login)
  │ │ │ ├───sign-in
  │ │ │ └───sign-up
  │ │ └───(public)
  │ │ ├───about
  │ │ │ ├───beliefs
  │ │ │ └───mission-vision
  │ │ ├───contact
  │ │ │ └───_sections
  │ │ └───_sections
  │ ├───components
  │ │ ├───features
  │ │ │ ├───date
  │ │ │ └───events
  │ │ ├───footer
  │ │ ├───hero
  │ │ │ └───layouts
  │ │ ├───navigation
  │ │ └───ui
  │ │ ├───button
  │ │ ├───cards
  │ │ ├───gallery
  │ │ ├───headers
  │ │ ├───modals
  │ │ ├───parallax
  │ │ ├───sections
  │ │ └───text
  │ ├───constants
  │ │ └───shared
  │ ├───data
  │ │ └───mock
  │ ├───hooks
  │ ├───lib
  │ │ └───supabase
  │ ├───styles
  │ ├───types
  │ │ ├───supabase
  │ │ └───ui
  │ └───utils

- Naming conventions:

  - Data access = `getX`, `updateX`, `deleteX`.
  - Components = PascalCase.
  - Types = `XType`, `XDTO`.

---

#### **8. Code Quality & Scalability Summary**

Conclude with a **short rulebook**:

1. **Security First**: Always define RLS policies.
2. **Server is King**: Default to Server Components for data fetching.
3. **Single Source of Truth**: Keep data logic in `lib/data/`.
4. **Type Everything**: Trust generated types, no `any`.
5. **UI Last**: Data is shaped before it hits components.
6. **Predictability**: Migrations + seeds + type gen are part of CI/CD.

---

⚡️ Deliverable: A **structured, long-form guide** that can be used as internal documentation and as a teaching tool for onboarding new engineers. The document must mix **principles, examples, and anti-patterns** so developers understand not just _what_ to do, but _why_ and _why not_.
