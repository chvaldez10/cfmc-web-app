## Frontend 🖥️

Frontend using Next.js with App Router.

## Folder Structure

```
/app
│
├── src
│   ├── page.tsx        # Maps to the / route
│   ├── layout.tsx
│   ├── Provider.tsx    # For theming
│   ├── error.tsx       # To handle server-side errors
│   ├── not-found.tsx   # Page not found
│   ├── globals.css     # Global styling
│   └── about           # Sub-routes
│       └── page.tsx
├── components
│   ├── Header.tsx
│   └── Footer.tsx
├── public              # Static files
│   └── icons
│   └── branding
│   └── featured        # Featured images
│   └── background
├── styles
│   └── *.css
├── lib
│   └── *.tsx
├── hooks
│   └── *.tsx
├── utils
│   └── *auth*.tsx
└── next.config.tsx
```
