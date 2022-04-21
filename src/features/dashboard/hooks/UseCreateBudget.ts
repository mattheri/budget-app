import CashflowService from "features/cashflow/service/cashflow";
import { useAsyncFn } from "react-use";
import { Budget, BudgetDTO } from "../dashboard";
import DashboardService from "../service/dashboard";

const dashboardService = new DashboardService();
const cashflowService = new CashflowService();

const useCreateBudget = () => {
  const createNewBudget = async (
    budgetDto: BudgetDTO
  ): Promise<Budget | undefined> => {
    const cashflow = await cashflowService.createCashflow({
      expenses: [],
      incomes: [],
    });
    const budget = await dashboardService.createBuget({
      ...budgetDto,
      cashflow,
    });

    return budget;
  };

  const [state, mutation] = useAsyncFn(createNewBudget, []);

  return {
    state,
    mutation,
  };
};

export default useCreateBudget;
