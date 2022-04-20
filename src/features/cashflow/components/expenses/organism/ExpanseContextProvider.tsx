import { Expense } from "features/cashflow/cashflow";
import useAddExpense from "features/cashflow/hooks/UseAddExpense";
import useExpenses from "features/cashflow/hooks/UseExpenses";
import { FC } from "react";
import InMemoryDatabase, {
  MemoryDatabaseKey,
} from "services/in-memory-database";
import ExpanseContext from "../context/ExpenseContext";

const inMemoryDatabase = new InMemoryDatabase<Expense>(
  MemoryDatabaseKey.EXPENSES,
  true
);

const ExpenseContextProvider: FC = ({ children }) => {
  const expenses = useExpenses();
  const addExpense = useAddExpense();
  inMemoryDatabase.subscribe(addExpense);

  const deleteExpense = (expense?: Expense) => {
    if (!expense) return;

    inMemoryDatabase.removeOne(expense);
  };

  return (
    <ExpanseContext.Provider
      value={{ expenses: expenses, deleteExpense: deleteExpense }}
    >
      {children}
    </ExpanseContext.Provider>
  );
};

export default ExpenseContextProvider;
