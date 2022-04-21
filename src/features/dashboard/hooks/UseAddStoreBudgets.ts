import useAppDispatch from "store/hooks/UseAppDispatch";
import { Budget } from "../dashboard";
import { replaceAllBudgets } from "../dashboardSlice";

const useAddStoreBudgets = () => {
  const dispatch = useAppDispatch();

  return (budgets: Budget[]) => {
    dispatch(replaceAllBudgets(budgets));
  };
};

export default useAddStoreBudgets;
