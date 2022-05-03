import useAppDispatch from "store/hooks/UseAppDispatch";
import { Income } from "../cashflow";
import { addIncome } from "../cashflowSlice";

const useAddIncome = () => {
  const dispatch = useAppDispatch();

  return (income: Income) => dispatch(addIncome(income));
};

export default useAddIncome;
