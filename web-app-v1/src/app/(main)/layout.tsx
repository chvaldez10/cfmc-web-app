import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "../Providers";
import Loading from "./loading";
import "../globals.css";

import NavbarClient from "@/components/Navbar/NavbarClient";

import BackButton from "@/components/core/ui/buttons/BackButton";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={roboto.className}>
        <Providers>
          <NavbarClient />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
          <BackButton />
        </Providers>
      </body>
    </html>
  );
}
