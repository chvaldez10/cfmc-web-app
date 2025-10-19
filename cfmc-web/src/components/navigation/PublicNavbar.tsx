"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Icon,
  Collapsible,
  Popover,
  Link,
} from "@chakra-ui/react";
import {
  IoMenu,
  IoClose,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";
import { useState } from "react";

// Types
import { NavItem } from "@/types/ui/navbar";

// Data
import { NAV_ITEMS } from "@/constants/publicNavbar";

// Constants
import { COMMON_X_PADDING, COMMON_MAX_WIDTH } from "@/constants/theme/ui";

// Components
import { TithesAndOfferingsModal } from "@/components/ui/modals";
import { TithesButton } from "@/components/ui/button";
import Logo from "@/components/ui/logo/logo";

// Styles

const BUTTON_HEIGHT = "40px";
const NAVBAR_PADDING = 2;
const NAVBAR_BORDER = 1;
export const NAVBAR_HEIGHT = `${
  parseInt(BUTTON_HEIGHT) + NAVBAR_PADDING * 8 + NAVBAR_BORDER
}px`;

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);
  const onOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  return (
    <Box
      position={"fixed"}
      w={"100%"}
      top={0}
      zIndex={1000}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"gray.200"}
      transition={"all 0.3s ease-in-out"}
      bg={"var(--color-light-100)"}
    >
      <Flex
        color={"gray.600"}
        maxW={COMMON_MAX_WIDTH}
        mx={"auto"}
        py={{ base: 2 }}
        px={COMMON_X_PADDING}
        align={"center"}
        id="public-navbar"
      >
        {/* Logo - Always on the left */}
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <Logo />

          <Flex
            display={{ base: "none", md: "flex" }}
            justify={"center"}
            alignItems={"center"}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Mobile Hamburger - Now on the right */}
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          >
            {isOpen ? <IoClose size={16} /> : <IoMenu size={20} />}
          </IconButton>
        </Flex>

        {/* Tithes Button */}
        <TithesButton onClick={onOpen} buttonHeight={BUTTON_HEIGHT} />

        <TithesAndOfferingsModal isOpen={isModalOpen} onClose={onClose} />
      </Flex>

      {/* Mobile Navigation */}
      <Collapsible.Root open={isOpen}>
        <Collapsible.Content>
          <MobileNav />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          height={BUTTON_HEIGHT}
          display={"flex"}
          alignItems={"center"}
        >
          <Popover.Root positioning={{ placement: "bottom-start" }}>
            <Popover.Trigger asChild>
              <Link
                href={navItem.href}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={"gray.600"}
                _hover={{
                  textDecoration: "none",
                  color: "gray.800",
                }}
                height={BUTTON_HEIGHT}
                display={"flex"}
                alignItems={"center"}
                data-testid={`${navItem.label}-desktop-nav-item`}
              >
                {navItem.label}
              </Link>
            </Popover.Trigger>

            {navItem.children && (
              <Popover.Positioner>
                <Popover.Content
                  border={0}
                  boxShadow={"xl"}
                  bg={"white"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack gap={0}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </Popover.Content>
              </Popover.Positioner>
            )}
          </Popover.Root>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "purple.50", textDecoration: "none" }}
    >
      <Stack direction={"row"} align={"center"} gap={0}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "brand.500" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"brand.500"} w={5} h={5} as={IoChevronForward} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"var(--color-light-100)"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Stack gap={4} onClick={children ? onToggle : undefined}>
      <Link
        href={href}
        py={2}
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
        data-testid={`${label}-mobile-nav-item`}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={IoChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Link>

      {children && (
        <Collapsible.Root open={isOpen}>
          <Collapsible.Content>
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={"solid"}
              borderColor={"gray.200"}
              align={"start"}
              gap={0}
            >
              {children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
            </Stack>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Stack>
  );
};
