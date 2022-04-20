import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export default useExpenseContext;
