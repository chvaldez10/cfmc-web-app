import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import PublicNavbar from "@/components/navigation/PublicNavbar";
import Footer from "@/components/footer/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <PublicNavbar />
      {children}
      <Footer />
    </Box>
  );
}
