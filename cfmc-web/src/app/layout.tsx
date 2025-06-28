import type { Metadata } from "next";
import { Providers } from "./provider";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "CFMC",
  description: "Calgary Filipino Methodist Church",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts.roboto.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
