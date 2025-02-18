"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

// Types
import { NavItem } from "@/types/ui/navbar";

// Data
import {
  NAV_ITEMS,
  TITHERS_AND_OFFERINGS_MODAL,
} from "@/constants/shared/publicNavbar";

// Constants
import { Branding } from "@/constants/shared/enums";

// Styles
import styles from "./PublicNavbar.module.css";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();

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
        minH={"60px"}
        maxW={"5xl"}
        mx={"auto"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        {/* Mobile Navigation */}
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* Desktop Navigation */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link
            href={"/"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"gray.800"}
            _hover={{
              textDecoration: "none",
            }}
            className={styles.SMN_effect_59}
          >
            {Branding.CHURCH_NAME_ABBREVIATION}
          </Link>

          <Flex
            display={{ base: "none", md: "flex" }}
            justify={"center"}
            alignItems={"center"}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Tithers & Offering Button */}
        <Box>
          <Button
            onClick={onOpen}
            display={"inline-flex"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.500"}
            _hover={{
              bg: "brand.400",
            }}
            borderRadius={"full"}
          >
            Tithers & Offering
          </Button>

          <TithesAndOfferingsModal isOpen={isModalOpen} onClose={onClose} />
        </Box>
      </Flex>

      {/* Mobile Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const TithesAndOfferingsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{TITHERS_AND_OFFERINGS_MODAL.label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{TITHERS_AND_OFFERINGS_MODAL.message}</Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={2} _hover={{ bg: "brand.50" }}>
            {TITHERS_AND_OFFERINGS_MODAL.buttonLabel}
          </Button>
          <Button
            bg={"brand.500"}
            mr={2}
            onClick={onClose}
            _hover={{ bg: "brand.400" }}
            color={"white"}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={"gray.600"}
                _hover={{
                  textDecoration: "none",
                  color: "gray.800",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"white"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "purple.50" }}
    >
      <Stack direction={"row"} align={"center"}>
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
          <Icon color={"brand.500"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
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
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
