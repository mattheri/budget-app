import { BudgetCashflow, Income, Expense } from "features/cashflow/cashflow";

export interface Budget {
  _id: string;
  name: string;
  archived: boolean;
  user: string;
  cashflow?: BudgetCashflow;
}

export interface BudgetCashflowDTO {
  _id: string;
  incomes: Income[];
  expenses: Expense[];
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface BudgetDTO extends Omit<Budget, "_id" | "cashflow"> {
  cashflow?: PartialBy<BudgetCashflowDTO, "incomes" | "expenses">;
}

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
