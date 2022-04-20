import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmDialog: FC<Props> = ({ isOpen, onClose, children }) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogCloseButton ref={cancelRef} />
          {children}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Object.assign(ConfirmDialog, {
  Header: AlertDialogHeader,
  Content: AlertDialogBody,
  Footer: AlertDialogFooter,
});
