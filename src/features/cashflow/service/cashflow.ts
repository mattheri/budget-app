import Client from "infra/client";
import {
  CashflowDTO,
  CashFlowQueryResponse,
  CreateCashflowMutationResponse,
  CreateExpenseMutationResponse,
  ExpenseDTO,
  UniqueCashflowQueryResponse,
  UpdateCashflowMutationResponse,
  UpdateExpenseMutationResponse,
} from "../cashflow";
import CreateCashflowMutation from "../infra/CreateCashflowMutation";
import CreateExpenseMutation from "../infra/CreateExpenseMutation";
import GetCashflowQuery from "../infra/GetCashflowQuery";
import getExpensesQuery from "../infra/GetExpensesQuery";
import UpdateCashflowExpensesMutation from "../infra/UpdateCashflowExpensesMutation";
import UpdateExpenseMutation from "../infra/UpdateExpenseMutation";
import CashflowAdapter from "./cashflowAdapter";
import CashflowPresenter from "./cashflowPresenter";

class CashflowService {
  private readonly client = Client;
  private readonly cashflowAdapter = new CashflowAdapter();
  private readonly cashflowPresenter = new CashflowPresenter();

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
      query: GetCashflowQuery,
      variables: {
        budgetId,
      },
    });

    return cashflow;
  }

  async createCashflow(cashflow: CashflowDTO) {
    const { data } = await this.client.mutate<CreateCashflowMutationResponse>({
      mutation: CreateCashflowMutation,
      variables: {
        input: cashflow,
      },
    });

    return data?.createCashflow;
  }

  async createExpense(cashflowId: string, expense: ExpenseDTO) {
    const { data } = await this.client.mutate<CreateExpenseMutationResponse>({
      mutation: CreateExpenseMutation,
      variables: {
        input: expense,
      },
    });

    if (!data) return null;

    const {
      createExpense: { _id },
    } = data;

    const { data: cashflowData } =
      await this.client.mutate<UpdateCashflowMutationResponse>({
        mutation: UpdateCashflowExpensesMutation,
        variables: {
          cashflowId,
          expenses: [_id],
        },
      });

    return cashflowData?.updateCashflow;
  }

  async updateExpense(id: string, newExpense: ExpenseDTO) {
    const { data } = await this.client.mutate<UpdateExpenseMutationResponse>({
      mutation: UpdateExpenseMutation,
      variables: {
        id,
        input:
          this.cashflowAdapter.clientFrequencyToDatabaseFrequency(newExpense),
      },
    });

    if (!data) return null;

    return this.cashflowPresenter.databaseFrequencyToClientFrequency(
      data.updateExpense
    );
  }
}

export default CashflowService;
