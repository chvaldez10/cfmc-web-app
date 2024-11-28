# Calgary Filipino Methodist Church Web Project 🖥️

This is the web project for the Calgary Filipino Methodist Church (CFMC) Landing Page, utilizing Next.js 14, Supabase, TypeScript, and Tailwind CSS for the frontend, and Django, PostgreSQL, and Docker to create web tools for the church.

## Deploy on Vercel 🌐

A beta version of the landing page is deployed on Vercel at [CFMC Landing Page](https://cfmc-web-app.vercel.app/). You can access the release notes [here](https://cfmc-web-app.vercel.app/resources/release-notes).

## Getting Started 🚀

To use the frontend project, clone the repo and change the directory to the project folder:

```bash
git clone https://github.com/chvaldez10/cfmc-web-app.git
cd web-app
```

Install all Node modules:

```bash
npm install
```

Create an `.env.local` file under the frontend project directory with the following content:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Run the development server:

```bash
npm run dev
```

Build for the production environment:

```bash
npm run build
npm run start
```

To use the backend project, refer to the [backend README](cfmc-tools/README.md).

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

## Learn More 📚

Visit our Facebook page: [CFMC Facebook](https://www.facebook.com/calgaryfilipino.methodistchurch).

## Contribute 💻

If you would like to contribute, please branch off the main branch using a common naming convention. For example, use "feat/add-footer" for feature additions.
