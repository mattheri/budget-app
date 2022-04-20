import { FC } from "react";
import useExpenseContext from "../hook/UseExpenseContext";
import Expense from "./Expense";

const ExpansesList: FC = () => {
  const { expenses } = useExpenseContext();

  return (
    <>
      {expenses.map((expense) => (
        <Expense expense={expense} />
      ))}
    </>
  );
};

export default ExpansesList;
