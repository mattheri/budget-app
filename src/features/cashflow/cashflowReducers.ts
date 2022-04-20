import { PayloadAction } from "@reduxjs/toolkit";
import { CashFlowState, Expense, Income } from "./cashflow";

export const cashflowReducers = {
  addIncome: (state: CashFlowState, { payload }: PayloadAction<Income[]>) => {
    state.income = payload;
  },
  addExpense: (state: CashFlowState, { payload }: PayloadAction<Expense[]>) => {
    state.expense = payload;
  },
  removeIncome: (state: CashFlowState, { payload }: PayloadAction<Income>) => {
    const incomeToRemove = state.income.find(
      (income) => income._id === payload._id
    );
    if (incomeToRemove) {
      const index = state.income.indexOf(incomeToRemove);
      state.income.splice(index, 1);

      return;
    }

    return;
  },
  removeExpense: (
    state: CashFlowState,
    { payload }: PayloadAction<Expense>
  ) => {
    const expenseToRemove = state.expense.find(
      (expense) => expense._id === payload._id
    );
    if (expenseToRemove) {
      const index = state.expense.indexOf(expenseToRemove);
      state.expense.splice(index, 1);

      return;
    }

    return;
  },
};

export type CashFlowReducers = typeof cashflowReducers;
