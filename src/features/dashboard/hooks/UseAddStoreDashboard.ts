import useAppDispatch from "store/hooks/UseAppDispatch";
import { Budget } from "../dashboard";
import { addBudget } from "../dashboardSlice";

const useAddStoreDashboard = () => {
  const dispatch = useAppDispatch();

  return (budget: Budget) => {
    dispatch(addBudget(budget));
  };
};

export default useAddStoreDashboard;
