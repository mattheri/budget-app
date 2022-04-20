import { useParams } from "react-router-dom";
import useAppSelector from "store/hooks/UseAppSelector";

const useIncomes = () => {
  const params = useParams();
  const budgetId = Number(params.id);

  return useAppSelector(({ cashflow: { income } }) => {
    return income.filter((income) => income.budgetId === budgetId);
  });
};

export default useIncomes;
