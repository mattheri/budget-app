import { BudgetCashflow } from "features/cashflow/cashflow";

export interface Budget {
  _id: string;
  name: string;
  archived: boolean;
  user: string;
  cashflow?: BudgetCashflow;
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type BudgetDTO = PartialBy<Omit<Budget, "_id">, "cashflow">;

export interface Budgets {
  budgetByUserId: Budget[];
}

export interface CreateBudgetMutationResponse {
  createBudget: PartialBy<Budget, "cashflow">;
}

export interface DashboardState {
  budgets: Budget[];
}

export interface UpdateBudgetMutationResponse {
  updateBudget: PartialBy<Budget, "cashflow">;
}
