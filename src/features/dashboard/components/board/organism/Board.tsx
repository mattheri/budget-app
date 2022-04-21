import { FC } from "react";
import BoardContainer from "../molecule/BoardContainer";
import BudgetList from "../molecule/BudgetList";

const Board: FC = () => {
  return (
    <BoardContainer>
      <BudgetList />
    </BoardContainer>
  );
};

export default Board;
