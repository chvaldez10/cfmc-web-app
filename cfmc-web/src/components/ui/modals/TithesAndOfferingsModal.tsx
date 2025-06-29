import { Modal, ModalContent } from "@chakra-ui/react";
import {
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

// Constants
import { ModalButtonLabels } from "@/constants/shared/enums";

// Data
import { TITHERS_AND_OFFERINGS_MODAL } from "@/constants/publicNavbar";

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
            {ModalButtonLabels.LEARN_MORE}
          </Button>
          <Button
            bg={"brand.500"}
            mr={2}
            onClick={onClose}
            _hover={{ bg: "brand.400" }}
            color={"white"}
          >
            {ModalButtonLabels.CLOSE}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TithesAndOfferingsModal;
