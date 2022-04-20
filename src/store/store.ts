import { configureStore } from "@reduxjs/toolkit";
import cashflowReducers from "../features/cashflow/cashflowSlice";
import authReducers from "features/auth/authSlice";

const store = configureStore({
  reducer: {
    cashflow: cashflowReducers,
    auth: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
