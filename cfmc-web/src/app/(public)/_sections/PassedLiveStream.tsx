"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PassedLiveStream() {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Watch our Latest Service
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "lg", md: "xl" }}>
          We hold our worship services every Sunday at 2:00 PM.
        </Text>

        {/* Facebook Video Embed */}
        <Box display="flex" justifyContent="center" alignItems="center" my={8}>
          <Box
            as="iframe"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcalgaryfilipino.methodistchurch%2Fvideos%2F735868682324021%2F&show_text=false&width=560&t=0"
            width={{ base: "100%", sm: "560px" }}
            height={{ base: "auto", sm: "314px" }}
            minH={{ base: "200px", sm: "314px" }}
            style={{
              border: "none",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </Box>

        <Stack
          direction={"column"}
          spacing={4}
          align={"center"}
          alignSelf={"center"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={8}
            py={6}
            fontSize="lg"
            _hover={{
              bg: "green.500",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            transition="all 0.2s"
          >
            Join Us Live This Sunday
          </Button>

          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.600", "gray.400")}
            fontStyle="italic"
          >
            Can't make it in person? Watch our live stream on Facebook
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
