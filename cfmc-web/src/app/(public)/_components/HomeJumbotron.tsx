import { Flex, Button, Heading, Text, VStack, Divider } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const HomeJumbotron = () => {
  return (
    <Flex
      position="relative"
      overflow="hidden"
      justifyContent="center"
      p={8}
      minH="100vh"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex flex="1" alignItems="center" justifyContent="center" p={4}>
        {/* Left side */}
        <VStack
          spacing={2}
          align="start"
          maxW="lg"
          mx="auto"
          borderLeft="4px"
          borderColor="purple.600"
          pl={4}
          py={4}
        >
          {/* Super script */}
          <Flex alignItems="center">
            <Divider
              orientation="horizontal"
              borderColor="purple.500"
              borderWidth="2px"
              width="24px"
            />
            <Text fontSize="sm" fontWeight="bold" color="gray.900" pl={4}>
              Calgary Filipino Methodist Church
            </Text>
          </Flex>
          <Heading as="h1" size="2xl" color="purple.400">
            Our Mission
          </Heading>
          <Text>
            A God-glorifying, Christ-shepherding and Holy Spirit-filled Church
            in fulfilling God&apos;s Mission in the City.
          </Text>
          <Button
            colorScheme="purple"
            rightIcon={<FaArrowRight />}
            variant="solid"
          >
            VIEW IMAGES
          </Button>
        </VStack>
      </Flex>

      {/* Right side */}
      <Flex
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Text>Hello</Text>
      </Flex>
    </Flex>
  );
};

export default HomeJumbotron;
