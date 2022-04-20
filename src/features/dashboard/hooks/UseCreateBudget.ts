import { AsyncState, MutationHook } from "infra/infra";
import { useState } from "react";
import { Budget, BudgetDTO } from "../dashboard";
import DashboardService from "../service/dashboard";

const dashboardService = new DashboardService();

const useCreateBudget = (): MutationHook<Budget, BudgetDTO> => {
  const [state, setState] = useState<AsyncState<Budget>>({
    loading: false,
  });

  const createNewBudget = async (budgetDto: BudgetDTO) => {
    try {
      setState({ loading: true });

      const budget = await dashboardService.createBuget(budgetDto);
      setState({ loading: false, data: budget });

      return budget;
    } catch (e) {
      const error = e as Error;
      setState({ loading: false, error });
    }
  };

  return {
    state,
    mutation: createNewBudget,
  };
};

export default useCreateBudget;
