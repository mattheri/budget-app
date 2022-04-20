import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth";
import authReducers from "./authReducers";

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: authReducers,
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
