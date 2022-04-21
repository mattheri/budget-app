import { Budget } from "features/dashboard/dashboard";
import { FC } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import useArchiveBudget from "features/dashboard/hooks/UseArchiveBudget";

interface Props {
  budget: Budget;
}

const BoardItemMenu: FC<Props> = ({ budget }) => {
  const color = useColorModeValue("gray.100", "gray.800");
  const archiveBudget = useArchiveBudget(budget);

  const onClickDelete = () => {
    archiveBudget();
  };

  return (
    <Menu>
      <MenuButton
        backgroundColor="transparent"
        as={IconButton}
        icon={<BsThreeDotsVertical color={color} />}
      />
      <MenuList>
        <MenuItem onClick={onClickDelete} icon={<MdDelete />}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BoardItemMenu;
