import { useParams } from "react-router-dom";
import useAppSelector from "store/hooks/UseAppSelector";
import { getTotalIncome } from "../cashflowSlice";

const useTotalIncomes = () => {
  const params = useParams();
  const currentBudgetId = Number(params.id);

  return useAppSelector(({ cashflow }) => {
    return getTotalIncome(cashflow, currentBudgetId);
  });
};

export default useTotalIncomes;
