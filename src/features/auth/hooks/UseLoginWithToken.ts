import { useCallback } from "react";
import AuthService from "../service/auth";
import useAddUser from "./UseAddUser";

const authService = new AuthService();

const useLoginWithToken = (token: string | null) => {
  const addUser = useAddUser();

  return useCallback(async () => {
    if (!token) return;

    const user = await authService.login(token);

    addUser(user);
  }, [token, addUser]);
};

export default useLoginWithToken;
