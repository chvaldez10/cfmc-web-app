import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import PublicNavbar from "@/components/navigation/PublicNavbar";
import Footer from "@/components/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateChurchSchema } from "@/utils/seo";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const churchSchema = generateChurchSchema();

  return (
    <Box>
      <JsonLd data={churchSchema} />
      <PublicNavbar />
      {children}
      <Footer />
    </Box>
  );
}
