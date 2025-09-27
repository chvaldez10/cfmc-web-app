"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Alert,
  AlertIcon,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { login, logout } from "./action";
import { createClient } from "@/lib/supabase/client";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const toast = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      }
    };

    checkAuth();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("password", formData.password);

      await login(formDataToSubmit);
    } catch (error) {
      // Only show error toast if it's not a redirect
      if (error instanceof Error && !error.message.includes("NEXT_REDIRECT")) {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await logout();
    } catch (error) {
      // Only show error toast if it's not a redirect
      if (error instanceof Error && !error.message.includes("NEXT_REDIRECT")) {
        toast({
          title: "Logout failed",
          description: "There was an error signing you out. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Show logout interface if user is authenticated
  if (isAuthenticated) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg="gray.50" px={4}>
        <Box maxW="md" w="full" bg="white" rounded="xl" shadow="xl" p={8}>
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" color="brand.600" mb={2}>
                You're Already Signed In
              </Heading>
              <Text color="gray.600">
                Welcome back, {user?.email || "User"}!
              </Text>
            </Box>

            <VStack spacing={4} align="stretch">
              <Box
                p={4}
                bg="gray.50"
                rounded="md"
                border="1px"
                borderColor="gray.200"
              >
                <Text fontSize="sm" color="gray.600" mb={2}>
                  <strong>Signed in as:</strong>
                </Text>
                <Text fontSize="sm" color="gray.800">
                  {user?.email}
                </Text>
              </Box>

              <Button
                onClick={handleLogout}
                colorScheme="red"
                size="lg"
                isLoading={isLoading}
                loadingText="Signing out..."
                spinner={<Spinner size="sm" />}
                _hover={{
                  bg: "red.600",
                }}
                _active={{
                  bg: "red.700",
                }}
              >
                Sign Out
              </Button>
            </VStack>

            <Box textAlign="center">
              <Text color="gray.600" fontSize="sm">
                Want to continue browsing?{" "}
                <Text
                  as="span"
                  color="brand.500"
                  cursor="pointer"
                  _hover={{
                    color: "brand.600",
                    textDecoration: "underline",
                  }}
                >
                  Go to homepage
                </Text>
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    );
  }

  // Show login form if user is not authenticated
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" px={4}>
      <Box maxW="md" w="full" bg="white" rounded="xl" shadow="xl" p={8}>
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" color="brand.600" mb={2}>
              Welcome Back
            </Heading>
            <Text color="gray.600">Sign in to your CFMC account</Text>
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl isInvalid={!!errors.email}>
                <FormLabel color="gray.700">Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  size="lg"
                  borderColor="gray.300"
                  _hover={{
                    borderColor: "brand.300",
                  }}
                  _focus={{
                    borderColor: "brand.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                  }}
                />
                {errors.email && (
                  <Alert status="error" mt={2} borderRadius="md">
                    <AlertIcon />
                    {errors.email}
                  </Alert>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <FormLabel color="gray.700">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    size="lg"
                    borderColor="gray.300"
                    _hover={{
                      borderColor: "brand.300",
                    }}
                    _focus={{
                      borderColor: "brand.500",
                      boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                    }}
                  />
                  <InputRightElement h="full">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <Alert status="error" mt={2} borderRadius="md">
                    <AlertIcon />
                    {errors.password}
                  </Alert>
                )}
              </FormControl>

              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                isLoading={isLoading}
                loadingText="Signing in..."
                spinner={<Spinner size="sm" />}
                _hover={{
                  bg: "brand.600",
                }}
                _active={{
                  bg: "brand.700",
                }}
              >
                Sign In
              </Button>
            </VStack>
          </form>

          <Box textAlign="center">
            <Text color="gray.600" fontSize="sm">
              Don't have an account?{" "}
              <Text
                as="span"
                color="brand.500"
                cursor="pointer"
                _hover={{
                  color: "brand.600",
                  textDecoration: "underline",
                }}
              >
                Sign up here
              </Text>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}
