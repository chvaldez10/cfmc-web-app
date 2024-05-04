import type { Metadata } from "next";
import CustomNavbar from "@/components/CustomNavbar/CustomNavbar";
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
      <body>
        <CustomNavbar />
        {children}
      </body>
    </html>
  );
}
