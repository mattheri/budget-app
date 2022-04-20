import Client from "infra/client";
import { BudgetDTO, Budgets, CreateBudgetMutationResponse } from "../dashboard";
import createBudgetMutation from "../infra/CreateBudgetMutation";
import getBudgetsQuery from "../infra/GetBudgetsQuery";

class DashboardService {
  private readonly client = Client;

  async getBudgets(token: string) {
    const {
      data: { budgetByUserId },
    } = await this.client.query<Budgets>({
      query: getBudgetsQuery,
      variables: { token },
    });

    return budgetByUserId || [];
  }

  async createBuget({ name, archived, user, cashflow }: BudgetDTO) {
    const { data } = await this.client.mutate<CreateBudgetMutationResponse>({
      mutation: createBudgetMutation,
      variables: { name, archived, token: user, cashflow },
    });

    return data?.createBudget;
  }
}

export default DashboardService;
