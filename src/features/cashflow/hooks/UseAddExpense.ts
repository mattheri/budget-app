import useAppDispatch from "store/hooks/UseAppDispatch";
import { Expense } from "../cashflow";
import { addExpense } from "features/cashflow/cashflowSlice";

const useAddExpense = () => {
  const dispatch = useAppDispatch();

  return (expense: Expense[]) => dispatch(addExpense(expense));
};

export default useAddExpense;
