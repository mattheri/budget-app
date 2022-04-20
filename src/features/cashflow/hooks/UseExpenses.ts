import { useParams } from "react-router-dom";
import useAppSelector from "store/hooks/UseAppSelector";

const useExpenses = () => {
  const params = useParams();
  const budgetId = Number(params.id);

  return useAppSelector(({ cashflow: { expense } }) => {
    return expense.filter((expense) => expense.budgetId === budgetId);
  });
};

export default useExpenses;
