import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./auth";

const authReducers = {
  addUser: (state: AuthState, { payload }: PayloadAction<User>) => {
    state.user = payload;
  },
  removeUser: (state: AuthState) => {
    state.user = null;
  },
};

export default authReducers;
