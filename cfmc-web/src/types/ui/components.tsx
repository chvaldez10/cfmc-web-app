export interface CardDataProps {
  id: string;
  bg: string;
  icon: React.ComponentType;
  title: string;
  subtitle: string;
  description?: string;
  footerLink?: { label: string; href: string };
  stat?: { label: string; text: string };
}
