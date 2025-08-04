# 🧭 Reusable Prompt: Guide to Building Scalable Features with Next.js & Supabase

## **Role**

You are an **expert software architect and developer advocate**. Your task is to create a **production-ready, best-practices guide** for engineers building scalable features with our tech stack. Assume your audience is a team of mid-to-senior engineers who will follow this document as the **blueprint for all future development.**

---

## **Goal**

Generate a **comprehensive and opinionated guide** that explains:

1. The **"why"** behind each principle (trade-offs, performance, security).
2. The **"how"** in practice (concise code snippets, examples, folder structure).
3. The **"what not to do"** (common pitfalls, anti-patterns).

This guide must emphasize **scalability, maintainability, type safety, and security**.

---

## **Our Established Tech Stack**

- **Framework:** Next.js (App Router, using Server Components + SSR + Edge Middleware)
- **Backend & Database:** Supabase (Postgres, Auth, Storage, Realtime)
- **UI Library:** Chakra UI (for a consistent design system)
- **Language:** TypeScript (strict mode, no `any`)

---

## **Core Principles to Cover**

### **1. Architectural Philosophy: Server-Centric & Type-Safe**

- Explain the **synergy between Next.js Server Components and Supabase**.
- Show how server-side data fetching:

  - Reduces bundle size & client hydration cost.
  - Prevents secrets from leaking to the browser.
  - Improves security by keeping queries on the server.

- Describe the **request lifecycle** clearly:

  ```
  Request → Middleware/Auth check → Server Component → Supabase query (server) → Rendered HTML/stream to client
  ```

- Anti-pattern: Fetching sensitive data in Client Components, which risks leaking tokens or exposing DB logic.

---

### **2. Database Development & Schema Management**

- **Schema First Approach**: Every feature starts with a migration.
- Template for `CREATE TABLE` with best practices:

  ```sql
  create table profiles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users not null,
    display_name text not null,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
  );
  ```

- **Row-Level Security (RLS)**:

  - Enable RLS immediately on new tables.
  - Example `SELECT` policy:

    ```sql
    alter table profiles enable row level security;

    create policy "Users can view their own profile"
      on profiles for select
      using (auth.uid() = user_id);
    ```

- **Seeding Data**: Use SQL `INSERT` scripts, checked into version control, for predictable local/test environments.
- **Type Generation**:

  ```bash
  supabase gen types typescript --project-id your-project-id > src/types/supabase/database.types.ts
  ```

  - Must be run after **every schema migration**.
  - Golden rule: **no query should return `any`**.

---

### **3. The Data Access Layer: A Single Source of Truth**

- Keep data-fetching logic separate from UI.
- Convention: `src/lib/data/featureName.ts`.
- Example:

  ```ts
  "use server";

  import { createClient } from "@/lib/supabase/server";
  import type { Database } from "@/types/supabase/database.types";

  export async function getUserProfile(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("id, display_name")
      .eq("user_id", userId)
      .single();

    if (error) throw error;

    return data satisfies Pick<
      Database["public"]["Tables"]["profiles"]["Row"],
      "id" | "display_name"
    >;
  }
  ```

- Why: Improves **testability**, keeps data access consistent, and allows easy refactoring.
- Anti-pattern: Writing Supabase queries directly in multiple UI components.

---

### **4. UI & Component Implementation**

- **Server Components**:

  ```tsx
  import { getUserProfile } from "@/lib/data/profiles";
  import { Text } from "@chakra-ui/react";

  export default async function ProfilePage({
    params,
  }: {
    params: { id: string };
  }) {
    const profile = await getUserProfile(params.id);

    return <Text>{profile.display_name}</Text>;
  }
  ```

- **Chakra UI Integration**:

  - Build reusable, type-safe UI primitives.
  - Example: `<Card>` that accepts typed props instead of free-form data.

- **Suspense & Error Boundaries**:

  - Handle loading at the layout level with `Suspense`.
  - Provide error fallback UIs using Next.js error boundaries.

- Anti-pattern: Using local `useState` for loading flags on every component → results in scattered UX.

---

### **5. Authentication & Authorization**

- **Server-Side Auth First**: Never rely only on client checks.
- Use `@supabase/ssr` + `middleware.ts` to inject session.
- Example (Server Action with session check):

  ```ts
  "use server";

  import { createClient } from "@/lib/supabase/server";
  import { redirect } from "next/navigation";

  export async function getSessionUser() {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) redirect("/login");
    return session.user;
  }
  ```

- **AuthN vs AuthZ**:

  - AuthN = identity (Supabase Auth).
  - AuthZ = permissions (enforced via RLS + code checks).

- Anti-pattern: Implementing business logic access control only on the client.

---

### **6. Real-Time Features**

- Supabase Realtime should be used **on the client only**.
- Pattern: fetch initial state on the server → hydrate with realtime subscription.
- Example hook:

  ```ts
  import { useEffect } from "react";
  import { createClient } from "@/lib/supabase/client";

  export function useRealtimeProfiles(callback: (payload: any) => void) {
    const supabase = createClient();

    useEffect(() => {
      const channel = supabase
        .channel("profiles-changes")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "profiles" },
          callback
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }, []);
  }
  ```

- Anti-pattern: Using realtime data without validating against RLS-protected queries.

---

### **7. Project Structure & Conventions**

- Recommended folder layout:

  ```
  src
  ├── app
  │   ├── (login)
  │   │   ├── sign-in
  │   │   └── sign-up
  │   └── (public)
  │       ├── about
  │       │   ├── beliefs
  │       │   └── mission-vision
  │       ├── contact
  │       │   └── _sections
  │       └── _sections
  ├── components
  │   ├── features
  │   │   ├── date
  │   │   └── events
  │   ├── footer
  │   ├── hero
  │   │   └── layouts
  │   ├── navigation
  │   └── ui
  │       ├── button
  │       ├── cards
  │       ├── gallery
  │       ├── headers
  │       ├── modals
  │       ├── parallax
  │       ├── sections
  │       └── text
  ├── constants
  │   └── shared
  ├── data
  │   └── mock
  ├── hooks
  ├── lib
  │   └── supabase
  ├── styles
  ├── types
  │   ├── supabase
  │   └── ui
  └── utils
  ```

- Naming conventions:

  - Data access = `getX`, `updateX`, `deleteX`.
  - Components = PascalCase.
  - Types = `XType`, `XDTO`.

---

### **8. Code Quality & Scalability Summary**

1. **Security First**: Always define RLS policies.
2. **Server is King**: Default to Server Components for data fetching.
3. **Single Source of Truth**: Keep data logic in `lib/data/`.
4. **Type Everything**: Trust generated types, no `any`.
5. **UI Last**: Data is shaped before it hits components.
6. **Predictability**: Migrations + seeds + type gen are part of CI/CD.

---

### **9. Sources**

Use Supabase official documentation only:

- [https://supabase.com/docs/guides/auth/server-side](https://supabase.com/docs/guides/auth/server-side)
- [https://supabase.com/docs/guides/auth/server-side/nextjs](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=environment\&environment=client](https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=environment&environment=client)
- [https://supabase.com/docs/guides/getting-started/quickstarts/nextjs](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

---

⚡️ **Deliverable:** A **structured, long-form guide** that can be used as internal documentation and as a teaching tool for onboarding new engineers. It must mix **principles, examples, and anti-patterns** so developers understand not just _what_ to do, but _why_ and _why not_.
