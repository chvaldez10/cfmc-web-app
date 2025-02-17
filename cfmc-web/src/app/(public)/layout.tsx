import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import PublicNavbar from "@/components/navigation/PublicNavbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <PublicNavbar />
      {children}
    </Box>
  );
}
