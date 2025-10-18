# SEO Architecture Overview

## 🎯 Design Principles

✅ **Centralized Configuration** - One file controls everything  
✅ **Reuses Existing Constants** - No duplication of church info  
✅ **Modular Design** - Each feature can be removed independently  
✅ **Reusable Functions** - DRY principle throughout  
✅ **Type-Safe** - Full TypeScript support  
✅ **Well-Documented** - Comments and examples everywhere

---

## 📁 File Structure

```
src/
├── constants/
│   └── shared/
│       ├── enums.ts               ← Existing church branding (reused)
│       └── seo.ts                 ← NEW: SEO-specific constants
│
├── config/
│   └── seo.config.ts              ← Imports from constants
│
├── utils/
│   └── seo.ts                     ← Reusable SEO functions
│
├── components/
│   └── seo/
│       ├── JsonLd.tsx             ← Structured data component
│       └── index.ts               ← Clean exports
│
└── app/
    ├── layout.tsx                 ← Root metadata (uses config)
    ├── robots.ts                  ← Robots.txt (uses config)
    ├── sitemap.ts                 ← Sitemap.xml (uses config)
    │
    └── (public)/
        ├── layout.tsx             ← Adds JSON-LD to all public pages
        └── [pages]/
            └── page.tsx           ← Each page has own metadata
```

---

## 🔄 Data Flow

### Configuration Flow

```
constants/shared/enums.ts (Branding - existing)
constants/shared/seo.ts (SEO constants - new)
    ↓
config/seo.config.ts (Combines both)
    ↓
    ├─→ layout.tsx (Root metadata)
    ├─→ robots.ts (Crawl rules)
    ├─→ sitemap.ts (Page list)
    └─→ utils/seo.ts (Utility functions)
            ↓
            └─→ All page files
```

### Reusing Existing Constants

```
constants/shared/enums.ts:
  - CHURCH_NAME ────────────┐
  - CHURCH_NAME_ABBREVIATION│
  - CHURCH_ADDRESS ─────────┤
  - CHURCH_EMAIL ───────────┤
  - CHURCH_FACEBOOK_URL ────┤
                            ↓
constants/shared/seo.ts     (Uses Branding)
                            ↓
config/seo.config.ts        (Imports both)
                            ↓
All SEO files               (One source of truth)
```

### When You Update Constants

**Option 1**: Update church branding

```
constants/shared/enums.ts → Change CHURCH_NAME
    ↓
Automatically updates:
    ├─ All SEO metadata
    ├─ All page titles
    ├─ Structured data
    └─ Site name everywhere
```

**Option 2**: Update SEO-specific values

```
constants/shared/seo.ts → Change SEO_BASE_URL
    ↓
Automatically updates:
    ├─ Root layout metadata
    ├─ All canonical URLs
    ├─ Sitemap URLs
    ├─ Robots.txt sitemap reference
    └─ All structured data URLs
```

---

## 🎨 Clean Code Patterns

### 1. Constants Layer

**Files**:

- `src/constants/shared/enums.ts` (Existing church branding)
- `src/constants/shared/seo.ts` (New SEO-specific constants)

```typescript
// enums.ts - Already existed
export enum Branding {
  CHURCH_NAME = "Calgary Filipino Methodist Church",
  CHURCH_NAME_ABBREVIATION = "CFMC",
  CHURCH_ADDRESS = "419 Northmount Dr NW, Calgary, AB",
  // ... more branding constants
}

// seo.ts - New file, reuses Branding
export const SEO_BASE_URL = "https://www.calgaryfilipinomethodistchurch.ca";
export const SEO_DESCRIPTIONS = { ... };
export const SEO_DEFAULT_KEYWORDS = [
  Branding.CHURCH_NAME,  // ← Reusing existing constant
  Branding.CHURCH_NAME_ABBREVIATION,
  // ...
];
```

**Benefits**:

- Reuses existing church information (no duplication)
- All constants in appropriate location (@constants/shared/)
- Clear separation: Branding vs SEO-specific

---

### 2. Configuration Layer

**File**: `src/config/seo.config.ts`

```typescript
// ✅ Imports from constants - no hardcoded values
import { Branding } from "@/constants/shared/enums";
import * as SEO from "@/constants/shared/seo";

export const SEO_CONFIG = {
  BASE_URL: SEO.SEO_BASE_URL,
  SITE_NAME: Branding.CHURCH_NAME, // ← From existing constants
  // ... combines both sources
} as const;
```

**Benefits**:

- No hardcoded values
- Single import point for all SEO needs
- Automatically syncs with existing branding

---

### 3. Utility Layer

**File**: `src/utils/seo.ts`

```typescript
// ✅ Reusable, composable functions
export function generatePageMetadata({ ... }) { ... }
export function generateChurchSchema() { ... }
export function generateEventSchema({ ... }) { ... }
```

**Benefits**:

- Consistent metadata across all pages
- Easy to update SEO logic in one place
- Reduces code duplication

---

### 4. Component Layer

**File**: `src/components/seo/JsonLd.tsx`

```typescript
// ✅ Simple, focused component
export function JsonLd({ data }: JsonLdProps) {
  // Just renders JSON-LD script tags
}
```

**Benefits**:

- Single responsibility
- Easy to remove if not needed
- Reusable across layouts

---

### 5. Page Layer

**File**: Any page (e.g., `src/app/(public)/about/history/page.tsx`)

```typescript
// ✅ Declarative metadata per page
export const metadata = generatePageMetadata({
  title: "...",
  description: "...",
  path: "...",
});
```

**Benefits**:

- Each page controls its own SEO
- Easy to add/remove per page
- Consistent format across site

---

## 🔌 Modularity Matrix

| Feature                | Independent? | Can Remove?             | Affects Others?                   |
| ---------------------- | ------------ | ----------------------- | --------------------------------- |
| **Constants (shared)** | ❌ Core      | ⚠️ Used everywhere      | Yes - branding, SEO use it        |
| **SEO Constants**      | ❌ Core      | ⚠️ Only if removing SEO | Yes - config uses it              |
| **Config File**        | ❌ Core      | ⚠️ Only if removing all | Yes - everything uses it          |
| **Utility Functions**  | ❌ Core      | ⚠️ Only if removing all | Yes - pages use them              |
| **JSON-LD Component**  | ✅ Yes       | ✅ Yes                  | No - just removes structured data |
| **Robots.txt**         | ✅ Yes       | ✅ Yes                  | No - optional for SEO             |
| **Sitemap.xml**        | ✅ Yes       | ✅ Yes                  | No - optional for SEO             |
| **Page Metadata**      | ✅ Yes       | ✅ Per page             | No - each page independent        |

---

## 🛠️ Maintenance Scenarios

### Scenario 1: Update Church Name (affects everything)

```typescript
// constants/shared/enums.ts
CHURCH_NAME = "New Church Name"; // ← Change ONE line
```

**Impact**: Automatically updates everywhere - SEO, branding, pages ✅

---

### Scenario 2: Update Domain

```typescript
// constants/shared/seo.ts
export const SEO_BASE_URL = "https://www.new-domain.com"; // ← Change ONE line
```

**Impact**: All SEO files automatically updated ✅

---

### Scenario 3: Remove Structured Data

```typescript
// (public)/layout.tsx
// Comment out 3 lines
// import { JsonLd } from "@/components/seo/JsonLd";
// const churchSchema = generateChurchSchema();
// <JsonLd data={churchSchema} />
```

**Impact**: No structured data, everything else works ✅

---

### Scenario 4: Change Page SEO

```typescript
// any/page/page.tsx
export const metadata = generatePageMetadata({
  title: "New Title", // ← Change
  description: "New desc", // ← Change
});
```

**Impact**: Only that page changes ✅

---

### Scenario 5: Add New Page to Sitemap

```typescript
// sitemap.ts
{
  url: `${BASE_URL}/new-page`,  // ← Add new entry
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: MEDIUM_PRIORITY,
},
```

**Impact**: New page appears in sitemap ✅

---

## 📊 Code Reusability

### Before (Scattered)

```typescript
// ❌ Hardcoded in multiple files
// page1.tsx
export const metadata = {
  title: "...",
  openGraph: { ... },  // Duplicate logic
  twitter: { ... },    // Duplicate logic
}

// page2.tsx
export const metadata = {
  title: "...",
  openGraph: { ... },  // Duplicate logic
  twitter: { ... },    // Duplicate logic
}
```

### After (Reusable)

```typescript
// ✅ One function, used everywhere
// page1.tsx
export const metadata = generatePageMetadata({ ... });

// page2.tsx
export const metadata = generatePageMetadata({ ... });

// utils/seo.ts - Single source of logic
export function generatePageMetadata({ ... }) {
  // All logic in ONE place
}
```

---

## 🧹 Clean Removal Guide

### To Remove Entire SEO System

1. Delete 6 files:

   - `src/constants/shared/seo.ts` (SEO constants)
   - `src/config/seo.config.ts`
   - `src/utils/seo.ts`
   - `src/components/seo/` (folder)
   - `src/app/robots.ts`
   - `src/app/sitemap.ts`

2. Update 2 files:

   - `src/app/layout.tsx` - Simplify metadata
   - `src/app/(public)/layout.tsx` - Remove JsonLd

3. Clean all pages:
   - Remove metadata exports

**No breaking changes** - Site works immediately ✅

**Note**: `src/constants/shared/enums.ts` stays - it contains general branding used elsewhere!

---

## 📝 Documentation Quality

Every file includes:

- **Purpose comments** - What it does
- **Usage examples** - How to use it
- **Parameter docs** - What each param means
- **Update instructions** - Where to make changes

Example:

```typescript
/**
 * Generates consistent metadata for pages
 *
 * @param title - Page title
 * @param description - Meta description
 * @param path - URL path
 *
 * @example
 * export const metadata = generatePageMetadata({
 *   title: "About",
 *   description: "Learn about us",
 * });
 */
```

---

## ✨ Key Achievements

1. **Reuses Existing Constants** - No duplication of church info (uses Branding enum)
2. **Single Source of Truth** - All SEO in `constants/shared/seo.ts`
3. **Zero Duplication** - Church name, email, phone already existed
4. **High Modularity** - Each piece can be removed independently
5. **Type Safety** - Full TypeScript support
6. **Clear Documentation** - Easy to understand and modify
7. **Easy Updates** - Change constants, everything updates
8. **Easy Removal** - Delete files, no side effects
9. **Proper Organization** - Constants in `@constants/`, config in `@config/`

---

## 🎓 Best Practices Applied

✅ **DRY** - Don't Repeat Yourself  
✅ **SOLID** - Single Responsibility Principle  
✅ **Separation of Concerns** - Config → Utils → Components → Pages  
✅ **Composition over Inheritance** - Reusable functions  
✅ **Convention over Configuration** - Sensible defaults

---

## 🚀 Ready for the Future

This architecture makes it easy to:

- Add new pages (just use `generatePageMetadata()`)
- Change configuration (edit one file)
- Add new features (extend utilities)
- Remove features (delete files independently)
- Scale the application (patterns are consistent)

---

## 📋 Quick Reference: Where to Update What

| What to Update              | File to Edit                                     |
| --------------------------- | ------------------------------------------------ |
| Church name, address, phone | `constants/shared/enums.ts` (Branding)           |
| Domain URL                  | `constants/shared/seo.ts` (SEO_BASE_URL)         |
| SEO description             | `constants/shared/seo.ts` (SEO_DESCRIPTIONS)     |
| Default keywords            | `constants/shared/seo.ts` (SEO_DEFAULT_KEYWORDS) |
| Social media links          | `constants/shared/seo.ts` (SEO_SOCIAL_MEDIA)     |
| Page-specific SEO           | Individual page files (metadata export)          |
| Sitemap pages               | `app/sitemap.ts` (routes array)                  |
| Blocked routes              | `constants/shared/seo.ts` (SEO_ROBOTS_DISALLOW)  |
