import type { Metadata } from "next";
import { Providers } from "./provider";
import "./globals.css";
import { fonts } from "./font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
