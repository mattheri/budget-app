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
  _id: string;
  income: Income[];
  expense: Expense[];
}

export interface CashFlowQueryResponse {
  budget: {
    cashflow: BudgetCashflow;
  };
}

export interface UniqueCashflowQueryResponse {
  cashflow: BudgetCashflow;
}

export type CashflowDTO = Omit<
  BudgetCashflow,
  "_id" | "createdAt" | "updatedAt"
>;

export interface CreateCashflowMutationResponse {
  createCashflow: {
    _id: string;
  };
}
