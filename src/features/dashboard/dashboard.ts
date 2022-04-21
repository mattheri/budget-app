import { BudgetCashflow, Income, Expense } from "features/cashflow/cashflow";

export interface Budget {
  _id: string;
  name: string;
  archived: boolean;
  user: string;
  cashflow?: Omit<BudgetCashflow, "_id" | "updatedAt" | "createdAt">;
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

export class Cashflow implements BudgetCashflow {
  _id: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  incomes: Income[] = [];
  expenses: Expense[] = [];
}
