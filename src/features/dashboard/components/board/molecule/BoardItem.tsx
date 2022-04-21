import { Budget } from "features/dashboard/dashboard";
import { FC } from "react";
import { Td, Tr, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routes from "router/routes";
import BoardItemMenu from "./BoardItemMenu";

interface Props {
  budget: Budget;
}

const BoardItem: FC<Props> = ({ budget }) => {
  return (
    <Tr>
      <Td display="flex">
        <LinkBox flex="1">
          <LinkOverlay as={Link} to={routes.buildBudgetRoute(budget._id)}>
            {budget.name}
          </LinkOverlay>
        </LinkBox>
        <BoardItemMenu budget={budget} />
      </Td>
    </Tr>
  );
};

export default BoardItem;
