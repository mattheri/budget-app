import { Wrap, WrapItem } from "@chakra-ui/react";
import { FC } from "react";
import { Budget } from "../../../dashboard";
import BudgetCard from "../../budget-card/organism/BudgetCard";

interface Props {
  budgets: Budget[];
}

const BudgetList: FC<Props> = ({ budgets }) => {
  return (
    <Wrap>
      {budgets.map((budget) => (
        <WrapItem width={["100%", "20rem"]} height="20rem">
          <BudgetCard key={budget._id} {...budget} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default BudgetList;
