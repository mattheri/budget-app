import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "react-use";
import CashflowService from "../service/cashflow";
import useAddExpense from "./UseAddExpense";
import useAddIncome from "./UseAddIncome";

const cashflowService = new CashflowService();

const useInitCashflowState = () => {
  const addIncome = useAddIncome();
  const addExpense = useAddExpense();
  const params = useParams();
  const currentBudgetId = params.id;

  const { value: cashflow, error } = useAsync(async () => {
    if (!currentBudgetId) return;

    return await cashflowService.getCashflow(currentBudgetId);
  }, [currentBudgetId]);

  useEffect(() => {
    if (!cashflow || error) return;

    addIncome(cashflow.incomes);
    addExpense(cashflow.expenses);
  }, [addExpense, addIncome, error, cashflow]);
};

export default useInitCashflowState;
