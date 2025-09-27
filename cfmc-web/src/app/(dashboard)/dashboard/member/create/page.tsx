"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Select,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
  VStack,
  useToast,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Flex,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  createChurchMember,
  uploadMemberImage,
} from "@/lib/supabase/actions/members";
import { ChurchMembers } from "@/types/supabase/members";

interface FormData extends Omit<ChurchMembers, "image_profile"> {
  image_profile?: File | string;
}

interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function CreateMemberPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "Member",
    isActive: true,
    isBoardMember: false,
    isMinisterialTeam: false,
    isLeader: false,
    username: "",
    bio: "",
    tags: [],
    suffix: "",
    headline: "",
    image_banner: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [cropArea, setCropArea] = useState<CropArea>({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });
  const [tagInput, setTagInput] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cropModalRef = useRef(null);

  const {
    isOpen: isCropModalOpen,
    onOpen: onCropModalOpen,
    onClose: onCropModalClose,
  } = useDisclosure();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const toast = useToast();

  // Consistent color scheme following design system
  const textColor = "gray.800";
  const labelColor = "gray.700";
  const mutedTextColor = "gray.500";
  const sectionHeaderColor = "gray.600";
  const bgColor = "white";
  const borderColor = "gray.200";
  const focusBorderColor = "purple.500";
  const errorColor = "red.500";

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phoneNumber &&
      !/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle tag management
  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      handleInputChange("tags", [...(formData.tags || []), tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    handleInputChange(
      "tags",
      formData.tags?.filter((tag) => tag !== tagToRemove) || []
    );
  };

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit - appropriate for headshots
        toast({
          title: "File too large",
          description: "Please select an image smaller than 2MB",
          status: "error",
          duration: 3000,
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        onCropModalOpen();
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image cropping
  const handleCrop = useCallback(() => {
    if (!imageRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = imageRef.current;

    if (!ctx) return;

    // Set canvas size to crop area
    canvas.width = cropArea.width;
    canvas.height = cropArea.height;

    // Draw cropped image
    ctx.drawImage(
      image,
      cropArea.x,
      cropArea.y,
      cropArea.width,
      cropArea.height,
      0,
      0,
      cropArea.width,
      cropArea.height
    );

    // Convert to blob
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const croppedFile = new File([blob], "cropped-headshot.jpg", {
            type: "image/jpeg",
          });
          setFormData((prev) => ({ ...prev, image_profile: croppedFile }));
          setCroppedImage(canvas.toDataURL());
          onCropModalClose();

          toast({
            title: "Image cropped successfully",
            description: "Your headshot has been prepared for upload",
            status: "success",
            duration: 2000,
          });
        }
      },
      "image/jpeg",
      0.9
    );
  }, [cropArea, onCropModalClose, toast]);

  // Handle drag for cropping
  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      setCropArea({
        x: Math.min(startX, currentX),
        y: Math.min(startY, currentY),
        width: Math.abs(currentX - startX),
        height: Math.abs(currentY - startY),
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        status: "error",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = "";

      // Upload image if provided
      if (formData.image_profile instanceof File) {
        const { publicUrl } = await uploadMemberImage(formData.image_profile);
        imageUrl = publicUrl;
      }

      // Create member
      const memberData: ChurchMembers = {
        ...formData,
        image_profile: imageUrl,
        birthDate: formData.birthDate || undefined,
      };

      await createChurchMember(memberData);

      toast({
        title: "Success!",
        description: "Church member created successfully",
        status: "success",
        duration: 3000,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        role: "Member",
        isActive: true,
        isBoardMember: false,
        isMinisterialTeam: false,
        isLeader: false,
        username: "",
        bio: "",
        tags: [],
        suffix: "",
        headline: "",
        image_banner: "",
      });
      setCroppedImage(null);
      setSelectedImage(null);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to create member",
        status: "error",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeImage = () => {
    setCroppedImage(null);
    setSelectedImage(null);
    setFormData((prev) => ({ ...prev, image_profile: undefined }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onAlertClose();
  };

  return (
    <Box
      bg={bgColor}
      p={{ base: 6, md: 8, lg: 10 }}
      borderRadius="2xl"
      w="full"
      maxW="4xl"
      mx="auto"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="lg"
      _hover={{ boxShadow: "xl" }}
      transition="all 0.3s ease"
    >
      <VStack spacing={{ base: 6, md: 8 }} as="form" onSubmit={handleSubmit}>
        <VStack spacing={6} w="full">
          <VStack spacing={4} w="full">
            <Heading size="lg" color="purple.600" textAlign="center">
              Create New Church Member
            </Heading>
            <Text color={mutedTextColor} textAlign="center" fontSize="md">
              Add a new member to the church directory
            </Text>
          </VStack>
          {/* Image Upload Section */}
          <Box>
            <Text
              alignSelf="flex-start"
              fontSize="sm"
              fontWeight="bold"
              color={sectionHeaderColor}
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Profile Picture
            </Text>
            <Box
              border="1px solid"
              borderColor={borderColor}
              borderRadius="xl"
              p={6}
              bg="gray.50"
            >
              <VStack spacing={4}>
                {croppedImage ? (
                  <Flex align="center" gap={4}>
                    <Image
                      src={croppedImage}
                      alt="Profile preview"
                      boxSize="120px"
                      objectFit="cover"
                      borderRadius="full"
                      border="2px solid"
                      borderColor="purple.200"
                    />
                    <VStack align="start">
                      <Text fontWeight="medium" color={textColor}>
                        Headshot ready for upload
                      </Text>
                      <HStack>
                        <Button
                          size="sm"
                          onClick={onCropModalOpen}
                          colorScheme="purple"
                          variant="outline"
                        >
                          Re-crop
                        </Button>
                        <IconButton
                          size="sm"
                          colorScheme="red"
                          variant="outline"
                          aria-label="Remove image"
                          icon={<DeleteIcon />}
                          onClick={onAlertOpen}
                        />
                      </HStack>
                    </VStack>
                  </Flex>
                ) : (
                  <VStack spacing={3}>
                    <Text color={mutedTextColor}>
                      Upload a headshot for the member profile
                    </Text>
                    <Button
                      leftIcon={<AddIcon />}
                      onClick={() => fileInputRef.current?.click()}
                      colorScheme="purple"
                      variant="outline"
                      size="lg"
                    >
                      Choose Image
                    </Button>
                    <Text fontSize="sm" color={mutedTextColor}>
                      Recommended: Square image, 400x400px or larger. Max 2MB.
                    </Text>
                  </VStack>
                )}
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  display="none"
                />
              </VStack>
            </Box>
          </Box>

          {/* Personal Information */}
          <Box>
            <Text
              alignSelf="flex-start"
              fontSize="sm"
              fontWeight="bold"
              color={sectionHeaderColor}
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Personal Information
            </Text>
            <VStack spacing={5} w="full">
              <Grid
                templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                gap={4}
                w="full"
              >
                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.firstName}>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      First Name
                    </FormLabel>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Enter first name"
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                    <FormErrorMessage
                      fontSize="xs"
                      color={errorColor}
                      mt={1}
                      fontWeight="medium"
                    >
                      {errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.lastName}>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Last Name
                    </FormLabel>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Enter last name"
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                    <FormErrorMessage
                      fontSize="xs"
                      color={errorColor}
                      mt={1}
                      fontWeight="medium"
                    >
                      {errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Suffix
                    </FormLabel>
                    <Input
                      value={formData.suffix || ""}
                      onChange={(e) =>
                        handleInputChange("suffix", e.target.value)
                      }
                      placeholder="Jr., Sr., III, etc."
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Username
                    </FormLabel>
                    <Input
                      value={formData.username || ""}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      placeholder="Enter username"
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Birth Date
                    </FormLabel>
                    <Input
                      type="date"
                      value={
                        formData.birthDate
                          ? formData.birthDate.toISOString().split("T")[0]
                          : ""
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "birthDate",
                          e.target.value ? new Date(e.target.value) : undefined
                        )
                      }
                      size="lg"
                      focusBorderColor={focusBorderColor}
                    />
                  </FormControl>
                </GridItem>
              </Grid>
            </VStack>
          </Box>

          {/* Contact Information */}
          <Box>
            <Text
              alignSelf="flex-start"
              fontSize="sm"
              fontWeight="bold"
              color={sectionHeaderColor}
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Contact Information
            </Text>
            <VStack spacing={5} w="full">
              <Grid
                templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                gap={4}
                w="full"
              >
                <GridItem>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      type="email"
                      value={formData.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter email address"
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                    <FormErrorMessage
                      fontSize="xs"
                      color={errorColor}
                      mt={1}
                      fontWeight="medium"
                    >
                      {errors.email}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isInvalid={!!errors.phoneNumber}>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Phone Number
                    </FormLabel>
                    <Input
                      type="tel"
                      value={formData.phoneNumber || ""}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      placeholder="Enter phone number"
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                    <FormErrorMessage
                      fontSize="xs"
                      color={errorColor}
                      mt={1}
                      fontWeight="medium"
                    >
                      {errors.phoneNumber}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
            </VStack>
          </Box>

          {/* Role and Status */}
          <Box>
            <Text
              alignSelf="flex-start"
              fontSize="sm"
              fontWeight="bold"
              color={sectionHeaderColor}
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Role and Status
            </Text>
            <VStack spacing={5} w="full">
              <Grid
                templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                gap={4}
                w="full"
              >
                <GridItem>
                  <FormControl>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Role
                    </FormLabel>
                    <Select
                      value={formData.role}
                      onChange={(e) =>
                        handleInputChange("role", e.target.value)
                      }
                      size="lg"
                      focusBorderColor={focusBorderColor}
                    >
                      <option value="Member">Member</option>
                      <option value="Elder">Elder</option>
                      <option value="Deacon">Deacon</option>
                      <option value="Pastor">Pastor</option>
                      <option value="Youth Leader">Youth Leader</option>
                      <option value="Music Minister">Music Minister</option>
                      <option value="Administrative Staff">
                        Administrative Staff
                      </option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl>
                    <FormLabel
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                      mb={2}
                    >
                      Headline
                    </FormLabel>
                    <Input
                      value={formData.headline || ""}
                      onChange={(e) =>
                        handleInputChange("headline", e.target.value)
                      }
                      placeholder="Professional title or ministry role"
                      size="lg"
                      focusBorderColor={focusBorderColor}
                      _placeholder={{ color: mutedTextColor }}
                    />
                  </FormControl>
                </GridItem>
              </Grid>

              <Grid
                templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                gap={6}
                w="full"
              >
                <GridItem>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      mb={0}
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Active Member
                    </FormLabel>
                    <Switch
                      isChecked={formData.isActive}
                      onChange={(e) =>
                        handleInputChange("isActive", e.target.checked)
                      }
                      colorScheme="green"
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      mb={0}
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Leadership Role
                    </FormLabel>
                    <Switch
                      isChecked={formData.isLeader}
                      onChange={(e) =>
                        handleInputChange("isLeader", e.target.checked)
                      }
                      colorScheme="purple"
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      mb={0}
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Board Member
                    </FormLabel>
                    <Switch
                      isChecked={formData.isBoardMember}
                      onChange={(e) =>
                        handleInputChange("isBoardMember", e.target.checked)
                      }
                      colorScheme="purple"
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      mb={0}
                      color={labelColor}
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      Ministerial Team
                    </FormLabel>
                    <Switch
                      isChecked={formData.isMinisterialTeam}
                      onChange={(e) =>
                        handleInputChange("isMinisterialTeam", e.target.checked)
                      }
                      colorScheme="purple"
                    />
                  </FormControl>
                </GridItem>
              </Grid>
            </VStack>
          </Box>

          {/* Bio and Tags */}
          <Box>
            <Text
              alignSelf="flex-start"
              fontSize="sm"
              fontWeight="bold"
              color={sectionHeaderColor}
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Additional Information
            </Text>
            <VStack spacing={5} w="full">
              <FormControl>
                <FormLabel
                  color={labelColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  mb={2}
                >
                  Biography
                </FormLabel>
                <Textarea
                  value={formData.bio || ""}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="Enter a brief biography or description..."
                  rows={4}
                  size="lg"
                  focusBorderColor={focusBorderColor}
                  _placeholder={{ color: mutedTextColor }}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  color={labelColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  mb={2}
                >
                  Tags
                </FormLabel>
                <HStack spacing={2} mb={2}>
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add a tag (e.g., Music, Youth, Outreach)"
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                    size="lg"
                    focusBorderColor={focusBorderColor}
                    _placeholder={{ color: mutedTextColor }}
                  />
                  <Button onClick={addTag} colorScheme="purple" size="lg">
                    Add
                  </Button>
                </HStack>
                <HStack spacing={2} wrap="wrap">
                  {formData.tags?.map((tag, index) => (
                    <Tag key={index} colorScheme="purple" variant="solid">
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => removeTag(tag)} />
                    </Tag>
                  ))}
                </HStack>
              </FormControl>
            </VStack>
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="purple"
            size="lg"
            w="full"
            h="56px"
            isLoading={isSubmitting}
            loadingText="Creating Member..."
            borderRadius="xl"
            fontSize="md"
            fontWeight="bold"
            letterSpacing="wide"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "xl",
              bg: "purple.600",
            }}
            _active={{
              transform: "translateY(0)",
              bg: "purple.700",
            }}
            _focus={{
              boxShadow: `0 0 0 3px ${focusBorderColor}40`,
            }}
            transition="all 0.2s ease"
            mt={4}
          >
            Create Member
          </Button>
        </VStack>
      </VStack>

      {/* Image Cropping Modal */}
      <Modal isOpen={isCropModalOpen} onClose={onCropModalClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crop Profile Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text color="gray.600">
                Click and drag to select the area for the profile picture. Aim
                for a square crop that focuses on the person's face and upper
                shoulders.
              </Text>
              <Box position="relative" display="inline-block">
                {selectedImage && (
                  <>
                    <Image
                      ref={imageRef}
                      src={selectedImage}
                      alt="Image to crop"
                      maxW="500px"
                      maxH="400px"
                      onMouseDown={handleMouseDown}
                      cursor="crosshair"
                      userSelect="none"
                    />
                    <Box
                      position="absolute"
                      left={`${cropArea.x}px`}
                      top={`${cropArea.y}px`}
                      width={`${cropArea.width}px`}
                      height={`${cropArea.height}px`}
                      border="2px dashed"
                      borderColor="blue.500"
                      bg="rgba(59, 130, 246, 0.1)"
                      pointerEvents="none"
                    />
                  </>
                )}
              </Box>
              <Text fontSize="sm" color="gray.500">
                Selected area: {cropArea.width} x {cropArea.height} pixels
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onCropModalClose}>
              Cancel
            </Button>
            <Button colorScheme="purple" onClick={handleCrop}>
              Crop Image
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Remove Image Confirmation */}
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cropModalRef}
        onClose={onAlertClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove Profile Picture
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to remove this profile picture? This action
              cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cropModalRef} onClick={onAlertClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={removeImage} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Box>
  );
}
