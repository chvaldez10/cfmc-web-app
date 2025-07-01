export interface CardDataProps {
  bg: string;
  icon: React.ComponentType;
  title: string;
  subtitle?: string;
  description?: string;
  footerLink?: { label: string; href: string };
}
