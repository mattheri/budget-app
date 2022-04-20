import { useParams } from "react-router-dom";
import useAppSelector from "store/hooks/UseAppSelector";
import { getTotalExpense } from "../cashflowSlice";

const useTotalExpenses = () => {
  const params = useParams();
  const currentBudgetId = Number(params.id);

  return useAppSelector(({ cashflow }) => {
    return getTotalExpense(cashflow, currentBudgetId);
  });
};

export default useTotalExpenses;
