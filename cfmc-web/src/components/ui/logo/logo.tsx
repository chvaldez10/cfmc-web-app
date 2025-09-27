import { Link } from "@chakra-ui/react";
import { Branding } from "@/constants/shared/enums";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import styles from "@/components/navigation/PublicNavbar.module.css";

const BUTTON_HEIGHT = "40px";

function Logo() {
  return (
    <Link
      href={"/"}
      _hover={{
        textDecoration: "none",
        transform: "scale(1.05)",
      }}
      transition={"all 0.2s ease-in-out"}
      className={styles.SMN_effect_59}
      height={BUTTON_HEIGHT}
      paddingX={"10px"}
      display={"flex"}
      alignItems={"center"}
      borderRadius={"md"}
    >
      <Image
        src="/branding/logo.svg"
        alt={`${Branding.CHURCH_NAME_ABBREVIATION} Logo`}
        height={{ base: "32px", md: "36px" }}
        width="auto"
        objectFit="contain"
        loading="eager"
        fallback={
          <Text
            fontFamily={"heading"}
            color={"gray.800"}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
          >
            {Branding.CHURCH_NAME_ABBREVIATION}
          </Text>
        }
      />
    </Link>
  );
}

export default Logo;
