import { useEffect } from "react";
import InMemoryDatabase, {
  MemoryDatabaseKey,
} from "services/in-memory-database";
import { Expense, Income } from "../cashflow";
import useAddExpense from "./UseAddExpense";
import useAddIncome from "./UseAddIncome";

const incomeMemoryDatabase = new InMemoryDatabase<Income>(
  MemoryDatabaseKey.INCOMES,
  true
);
const expenseMemoryDatabase = new InMemoryDatabase<Expense>(
  MemoryDatabaseKey.EXPENSES,
  true
);

const useInitCashflowState = () => {
  const addIncome = useAddIncome();
  const addExpense = useAddExpense();

  useEffect(() => {
    addIncome(incomeMemoryDatabase.get());
    addExpense(expenseMemoryDatabase.get());
  }, [addExpense, addIncome]);
};

export default useInitCashflowState;
