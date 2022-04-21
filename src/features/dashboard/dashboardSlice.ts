import { createSlice } from "@reduxjs/toolkit";
import { DashboardState } from "./dashboard";
import dashboardReducers from "./dashboardReducers";

const initialState: DashboardState = {
  budgets: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: dashboardReducers,
});

export const { addBudget, removeBudget, replaceAllBudgets } = authSlice.actions;

export default authSlice.reducer;
