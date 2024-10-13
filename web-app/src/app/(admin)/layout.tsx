import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "../Providers";
import { DashboardSidebar } from "@/components/Sidebar";
import "../globals.css";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CFMC Admin",
  description: "Calgary Methodist Church Admin Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Providers>
          <div className="flex h-screen overflow-hidden">
            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
