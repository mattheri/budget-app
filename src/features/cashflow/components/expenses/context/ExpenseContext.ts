import { Expense } from "features/cashflow/cashflow";
import { createContext } from "react";

interface ExpenseContextProps {
  expenses: Expense[];
  deleteExpense: (expense?: Expense) => void;
}

const ExpanseContext = createContext<ExpenseContextProps>({
  expenses: [],
  deleteExpense: () => {},
});

export default ExpanseContext;
