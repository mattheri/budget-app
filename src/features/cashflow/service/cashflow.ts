import AuthService from "features/auth/service/auth";
import Client from "infra/client";
import {
  CashflowDTO,
  CashFlowQueryResponse,
  CreateCashflowMutationResponse,
  UniqueCashflowQueryResponse,
} from "../cashflow";
import createCashflowMutation from "../infra/CreateCashflowMutation";
import getCashflowQuery from "../infra/GetCashflowQuery";
import getExpensesQuery from "../infra/GetExpensesQuery";

class CashflowService {
  private readonly client = Client;
  private readonly authService = new AuthService();

  async getCurrentCashflow(cashflowId: string) {
    const {
      data: { cashflow },
    } = await this.client.query<UniqueCashflowQueryResponse>({
      query: getExpensesQuery,
      variables: {
        cashflowId,
      },
    });

    return cashflow;
  }

  async getCashflow(budgetId: string) {
    const {
      data: {
        budget: { cashflow },
      },
    } = await this.client.query<CashFlowQueryResponse>({
      query: getCashflowQuery,
      variables: {
        budgetId,
      },
    });

    return cashflow;
  }

  async createCashflow(cashflow: CashflowDTO) {
    const { data } = await this.client.mutate<CreateCashflowMutationResponse>({
      mutation: createCashflowMutation,
      variables: {
        input: cashflow,
      },
    });

    return data?.createCashflow;
  }
}

export default CashflowService;
