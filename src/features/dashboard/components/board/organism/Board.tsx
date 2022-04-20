import { FC } from "react";
import { Budget } from "../../../dashboard";
import Container from "../atom/Container";
import BudgetList from "../molecule/BudgetList";

interface Props {
  budgets: Budget[];
}

const Board: FC<Props> = ({ budgets }) => {
  return (
    <>
      <Container>
        <BudgetList budgets={budgets} />
      </Container>
    </>
  );
};

export default Board;
