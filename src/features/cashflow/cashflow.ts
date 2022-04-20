export interface CashFlow {
  _id: string;
  name: string;
  amount: number;
  frequency: "weekly" | "biweekly" | "monthly" | "yearly";
  category: string;
  budgetId: number;
}

export type Income = CashFlow & {
  date?: string;
  oneTime?: boolean;
};

export type Expense = CashFlow & {
  date?: string;
  skipabble?: boolean;
};

export type IncomeDTO = Omit<Income, "_id" | "budgetId">;

export type ExpenseDTO = Omit<Expense, "_id" | "budgetId">;

export interface BudgetCashflow {
  _id: string;
  createdAt: string;
  updatedAt: string;
  incomes: Income[];
  expenses: Expense[];
}

export interface CashFlowState {
  income: Income[];
  expense: Expense[];
}
