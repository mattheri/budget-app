import { configureStore } from "@reduxjs/toolkit";
import cashflowReducers from "../features/cashflow/cashflowSlice";
import authReducers from "features/auth/authSlice";
import dashboardReducers from "features/dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    cashflow: cashflowReducers,
    auth: authReducers,
    dashboard: dashboardReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
