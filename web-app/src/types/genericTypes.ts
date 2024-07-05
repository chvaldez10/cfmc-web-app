export interface liturgyTableData {
  title: string;
  content: string;
  link: string;
}

export interface heroContent {
  header: string;
  longParagraph: string;
}

export interface nextImage {
  src: string;
  alt: string;
  containerClassName?: string | undefined;
}

export interface heroSection {
  header: string;
  userSubHeader?: string;
  longParagraph: string;
  reverse?: boolean;
  containerClassName?: string | null;
}
