import { FC } from "react";
import ExpansesList from "../molecule/ExpensesList";
import ExpenseContextProvider from "./ExpanseContextProvider";

const Expanses: FC = () => {
  return (
    <ExpenseContextProvider>
      <ExpansesList />
    </ExpenseContextProvider>
  );
};

export default Expanses;
