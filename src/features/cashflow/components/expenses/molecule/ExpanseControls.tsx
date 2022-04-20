import {
  Button,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import ConfirmDialog from "components/confirm-dialog/ConfirmDialog";

interface Props {
  onDelete: () => void;
}

const ExpenseControls: FC<Props> = ({ onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ButtonGroup>
        <IconButton icon={<MdDelete />} aria-label="" onClick={onOpen} />
      </ButtonGroup>
      <ConfirmDialog isOpen={isOpen} onClose={onClose}>
        <ConfirmDialog.Header>Delete Expense</ConfirmDialog.Header>
        <ConfirmDialog.Content>
          Are you sure you want to delete this expense?
        </ConfirmDialog.Content>
        <ConfirmDialog.Footer>
          <Button onClick={onClose}>Cancel</Button>
          <Button colorScheme="red" ml={3} onClick={onDelete}>
            Delete
          </Button>
        </ConfirmDialog.Footer>
      </ConfirmDialog>
    </>
  );
};

export default ExpenseControls;
