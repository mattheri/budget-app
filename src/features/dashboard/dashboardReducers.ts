import { PayloadAction } from "@reduxjs/toolkit";
import { Budget, DashboardState } from "./dashboard";

const dashboardReducers = {
  addBudget: (state: DashboardState, { payload }: PayloadAction<Budget>) => {
    state.budgets.push(payload);
  },
  removeBudget: (state: DashboardState, { payload }: PayloadAction<Budget>) => {
    state.budgets = state.budgets.filter(
      (budget) => budget._id !== payload._id
    );
  },
  replaceAllBudgets: (
    state: DashboardState,
    { payload }: PayloadAction<Budget[]>
  ) => {
    state.budgets = payload;
  },
};

export default dashboardReducers;
