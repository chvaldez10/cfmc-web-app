import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      {children}
    </Flex>
  );
}
