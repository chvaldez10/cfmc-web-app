import type { Metadata } from "next";
import { Providers } from "./provider";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "CFMC",
  description: "Calgary Filipino Methodist Church official website.",
  openGraph: {
    title: "CFMC - Calgary Filipino Methodist Church",
    description: "Calgary Filipino Methodist Church official website.",
    url: "https://cfmc-web.vercel.app/",
    siteName: "CFMC",
    images: [
      {
        url: "https://cfmc-web.vercel.app/gallery/IMG_4523.JPG",
        width: 1200,
        height: 630,
        alt: "CFMC Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
