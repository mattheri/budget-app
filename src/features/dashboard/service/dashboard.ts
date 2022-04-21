import Client from "infra/client";
import {
  Budget,
  BudgetDTO,
  Budgets,
  CreateBudgetMutationResponse,
  UpdateBudgetMutationResponse,
} from "../dashboard";
import createBudgetMutation from "../infra/CreateBudgetMutation";
import getBudgetsQuery from "../infra/GetBudgetsQuery";
import updateBudgetMutation from "../infra/UpdateBudgetMutation";

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

  async updateBudget(budget: Budget) {
    const budgetId = budget._id;
    const budgetWithoutId: BudgetDTO = {
      name: budget.name,
      archived: budget.archived,
      cashflow: budget.cashflow,
      user: budget.user,
    };

    const { data } = await this.client.mutate<UpdateBudgetMutationResponse>({
      mutation: updateBudgetMutation,
      variables: {
        id: budgetId,
        budget: budgetWithoutId,
      },
    });

    return data?.updateBudget;
  }
}

export default DashboardService;
