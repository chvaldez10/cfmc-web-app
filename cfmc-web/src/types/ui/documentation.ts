// Documentation page types

export interface CodeBlock {
  type: "code";
  content: string;
  language: string;
}

export interface Paragraph {
  type: "paragraph";
  content: string | (string | InlineCode | Link)[];
}

export interface InlineCode {
  type: "inline-code";
  content: string;
}

export interface Link {
  type: "link";
  text: string;
  url: string;
}

export interface List {
  type: "list";
  ordered: boolean;
  items: (string | InlineCode | Link)[][];
}

export interface Heading {
  type: "heading";
  level: 1 | 2 | 3 | 4;
  content: string;
  id?: string;
}

export interface Divider {
  type: "divider";
}

export type ContentBlock = Heading | Paragraph | CodeBlock | List | Divider;

export interface DocumentationSection {
  title: string;
  id: string;
  blocks: ContentBlock[];
}

export interface DocumentationMetadata {
  title: string;
  description: string;
  lastUpdated: string;
}
