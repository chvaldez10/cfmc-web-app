import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./Providers";
import CustomNavbar from "@/components/Navbar/CustomNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
          <CustomNavbar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            pauseOnHover={false}
            draggable={false}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
