"use client";

import {
  Box,
  Text,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AboutContent() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const sectionBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box
      as="section"
      aria-labelledby="about-content-heading"
      py={{ base: 8, md: 12 }}
    >
      <VStack
        spacing={{ base: 8, md: 12 }}
        maxW="4xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        {/* Vision Statement */}
        <Box
          bg={sectionBg}
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          w="full"
          borderLeft="4px solid"
          borderLeftColor={accentColor}
        >
          <Heading
            as="h2"
            size="lg"
            color={accentColor}
            mb={4}
            fontWeight="bold"
          >
            Vision Statement
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color={textColor}
            fontWeight="medium"
          >
            To be a Christ-centered, Spirit-empowered Filipino Methodist Church
            in Calgary—nurturing faith, building strong families, and reaching
            the community with the love and hope of Jesus Christ.
          </Text>
        </Box>

        {/* Mission Statement */}
        <Box
          bg={sectionBg}
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          w="full"
          borderLeft="4px solid"
          borderLeftColor={accentColor}
        >
          <Heading
            as="h2"
            size="lg"
            color={accentColor}
            mb={4}
            fontWeight="bold"
          >
            Mission Statement
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color={textColor}
            fontWeight="medium"
          >
            To glorify God by making disciples of Jesus Christ, nurturing a
            loving and prayerful Filipino faith community, equipping believers
            for service, and sharing the Gospel in Calgary and beyond.
          </Text>
        </Box>

        {/* Our Community */}
        <Box
          bg={sectionBg}
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          w="full"
          borderLeft="4px solid"
          borderLeftColor={accentColor}
        >
          <Heading
            as="h2"
            size="lg"
            color={accentColor}
            mb={4}
            fontWeight="bold"
          >
            Our Community
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color={textColor}
          >
            The community of Calgary Filipino Methodist Church is a warm,
            Christ-centered family of believers rooted in Filipino faith and
            culture. United in love and service, we gather to worship, grow in
            God's Word, and support one another through life's journeys. Our
            fellowship is marked by hospitality, prayer, and joyful worship, as
            we seek to reflect Christ's light in our homes, church, and the
            wider Calgary community. Together, we are building a legacy of faith
            for future generations.
          </Text>
        </Box>

        {/* Our Ministry */}
        <Box
          bg={sectionBg}
          p={{ base: 6, md: 8 }}
          borderRadius="xl"
          w="full"
          borderLeft="4px solid"
          borderLeftColor={accentColor}
        >
          <Heading
            as="h2"
            size="lg"
            color={accentColor}
            mb={4}
            fontWeight="bold"
          >
            Our Ministry
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color={textColor}
          >
            The ministry of Calgary Filipino Methodist Church flows from our
            deep love for God and commitment to serve others. Rooted in
            Scripture and empowered by the Holy Spirit, we serve through vibrant
            worship, discipleship, fellowship, and outreach. Our ministries
            nurture faith across all ages—from children to seniors—through Bible
            studies, prayer gatherings, care groups, and special events. We are
            passionate about building strong families, mentoring the next
            generation, and reaching our community with the compassion and truth
            of Jesus Christ. Every act of service is an opportunity to glorify
            God and extend His grace to others.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
