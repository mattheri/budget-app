import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "react-use";
import CashflowService from "../service/cashflow";

const cashflowService = new CashflowService();

const useInitCashflowState = () => {
  const params = useParams();
  const currentBudgetId = params.id;

  const { value: cashflow, error } = useAsync(async () => {
    if (!currentBudgetId) return;

    return await cashflowService.getCashflow(currentBudgetId);
  }, [currentBudgetId]);

  useEffect(() => {
    if (!cashflow || error) return;
  }, [error, cashflow]);
};

export default useInitCashflowState;
