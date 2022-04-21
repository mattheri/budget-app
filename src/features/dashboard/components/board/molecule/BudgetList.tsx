import useBudgets from "features/dashboard/hooks/UseBudgets";
import { FC } from "react";
import BoardItem from "./BoardItem";

const BudgetList: FC = () => {
  const budgets = useBudgets();

  return (
    <>
      {budgets.map((budget) => (
        <BoardItem key={budget._id} budget={budget} />
      ))}
    </>
  );
};

export default BudgetList;
