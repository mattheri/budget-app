import { createSlice } from "@reduxjs/toolkit";
import { CashFlowState } from "./cashflow";
import { cashflowReducers } from "./cashflowReducers";

const initialState: CashFlowState = {
  _id: "",
  income: [],
  expense: [],
};

export const cashflowSlice = createSlice({
  name: "cashflow",
  initialState,
  reducers: cashflowReducers,
});

export const { addIncome, addExpense, removeIncome, removeExpense } =
  cashflowSlice.actions;

export const getTotalIncome = (
  state: CashFlowState,
  currentBudgetId: number
) => {
  return state.income
    .filter((income) => income.budgetId === currentBudgetId)
    .reduce((acc, income) => {
      return acc + income.amount;
    }, 0);
};

export const getTotalExpense = (
  state: CashFlowState,
  currentBudgetId: number
) => {
  return state.expense
    .filter((expense) => expense.budgetId === currentBudgetId)
    .reduce((acc, expense) => {
      return acc + expense.amount;
    }, 0);
};

export default cashflowSlice.reducer;
