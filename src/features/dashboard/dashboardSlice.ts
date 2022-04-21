import { createSlice } from "@reduxjs/toolkit";
import { DashboardState } from "./dashboard";
import dashboardReducers from "./dashboardReducers";

const initialState: DashboardState = {
  budgets: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: dashboardReducers,
});

export const { addBudget, removeBudget, replaceAllBudgets } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
