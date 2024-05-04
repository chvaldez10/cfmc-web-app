import type { Metadata } from "next";
import ComplexNavbar from "@/components/Navbar/ComplexNavbar/ComplexNavbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CFMC",
  description: "Calgary Methodist Church Web Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ComplexNavbar />
      <body>{children}</body>
    </html>
  );
}
