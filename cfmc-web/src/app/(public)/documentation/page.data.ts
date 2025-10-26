// Documentation page content - Combined from both README files
import {
  DocumentationSection,
  DocumentationMetadata,
} from "@/types/ui/documentation";
import { Branding, DocumentationLabels } from "@/constants/shared/enums";

export const documentationContent: DocumentationSection[] = [
  {
    title: "Calgary Filipino Methodist Church Web Project",
    id: "overview",
    blocks: [
      {
        type: "heading",
        level: 1,
        content: "Calgary Filipino Methodist Church Web Project 🖥️",
        id: "overview",
      },
      {
        type: "paragraph",
        content: [
          "This is the web project for the ",
          {
            type: "inline-code",
            content: `${Branding.CHURCH_NAME} (${Branding.CHURCH_NAME_ABBREVIATION})`,
          },
          " landing page, built with ",
          { type: "inline-code", content: "Next.js 15" },
          ".",
        ],
      },
    ],
  },
  {
    title: "Repository Setup",
    id: "repository-setup",
    blocks: [
      {
        type: "heading",
        level: 2,
        content: "🚀 Getting Started",
        id: "repository-setup",
      },
      {
        type: "paragraph",
        content:
          "To use the frontend project, clone the repository and navigate to the project directory:",
      },
      {
        type: "code",
        content: `git clone ${Branding.CHURCH_GITHUB_URL}.git\ncd cfmc-web`,
        language: "bash",
      },
    ],
  },
  {
    title: "Contributing",
    id: "contributing",
    blocks: [
      {
        type: "heading",
        level: 2,
        content: "💻 Contributing",
        id: "contributing",
      },
      {
        type: "paragraph",
        content:
          "If you'd like to contribute, please create a new branch from the main branch using a clear naming convention. For example:",
      },
      {
        type: "code",
        content: "feat-add-footer\nfix-update-navbar\nchore-update-readme",
        language: "bash",
      },
    ],
  },
  {
    title: "divider-1",
    id: "divider-1",
    blocks: [
      {
        type: "divider",
      },
    ],
  },
  {
    title: "Project Setup",
    id: "project-setup",
    blocks: [
      {
        type: "heading",
        level: 1,
        content: "CFMC Web",
        id: "cfmc-web",
      },
      {
        type: "paragraph",
        content: [
          "This is a ",
          { type: "link", text: "Next.js", url: "https://nextjs.org" },
          " project bootstrapped with ",
          {
            type: "link",
            text: "create-next-app",
            url: "https://nextjs.org/docs/app/api-reference/cli/create-next-app",
          },
          ".",
        ],
      },
      {
        type: "divider",
      },
      {
        type: "heading",
        level: 2,
        content: "🚀 Getting Started",
        id: "getting-started",
      },
      {
        type: "heading",
        level: 3,
        content: "1. Install dependencies",
        id: "install-dependencies",
      },
      {
        type: "paragraph",
        content: "Run the following command to install all required packages:",
      },
      {
        type: "code",
        content: "npm install",
        language: "bash",
      },
      {
        type: "heading",
        level: 3,
        content: "2. Set up environment variables",
        id: "env-variables",
      },
      {
        type: "paragraph",
        content: [
          "Ask for the ",
          { type: "inline-code", content: "Supabase key" },
          " and add it to your ",
          { type: "inline-code", content: ".env.local" },
          " file:",
        ],
      },
      {
        type: "code",
        content: "NEXT_PUBLIC_SUPABASE_URL=\n\nNEXT_PUBLIC_SUPABASE_ANON_KEY=",
        language: "bash",
      },
      {
        type: "heading",
        level: 3,
        content: "3. Start the development server",
        id: "dev-server",
      },
      {
        type: "paragraph",
        content: "Run the development server:",
      },
      {
        type: "code",
        content: "npm run dev",
        language: "bash",
      },
      {
        type: "paragraph",
        content: [
          "Then open ",
          {
            type: "link",
            text: "http://localhost:3000",
            url: "http://localhost:3000",
          },
          " in your browser to view the app.",
        ],
      },
    ],
  },
  {
    title: "Notes",
    id: "notes",
    blocks: [
      {
        type: "divider",
      },
      {
        type: "heading",
        level: 2,
        content: "⚙️ Notes",
        id: "notes",
      },
      {
        type: "list",
        ordered: false,
        items: [
          [
            "There are ",
            { type: "inline-code", content: "no pre-commit hooks" },
            " or ",
            { type: "inline-code", content: "GitHub build pipelines" },
            ", so please make sure everything is working properly ",
            {
              type: "inline-code",
              content: "before pushing to the remote repository",
            },
            ".",
          ],
          [
            "Ensure that all environment variables and configurations are set up locally before deployment.",
          ],
        ],
      },
    ],
  },
  {
    title: "Deployment",
    id: "deployment",
    blocks: [
      {
        type: "divider",
      },
      {
        type: "heading",
        level: 2,
        content: "☁️ Deploy on Vercel",
        id: "deployment",
      },
      {
        type: "paragraph",
        content: [
          "To deploy, request access to the ",
          { type: "inline-code", content: "Vercel project" },
          ". Currently, the project is being built and deployed from a local environment.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "Live deployment: 🔗 ",
          {
            type: "link",
            text: Branding.CHURCH_DOMAIN_URL,
            url: Branding.CHURCH_DOMAIN_URL,
          },
        ],
      },
    ],
  },
];

// Metadata for the documentation page
export const documentationMetadata: DocumentationMetadata = {
  title: DocumentationLabels.PAGE_TITLE,
  description: DocumentationLabels.PAGE_DESCRIPTION,
  lastUpdated: "2025-10-26",
};
