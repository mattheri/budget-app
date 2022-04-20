import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routes from "router/routes";
import AuthService from "../service/auth";
import useAddUser from "./UseAddUser";

const authService = new AuthService();

const useIsAuthenticated = () => {
  const navigate = useNavigate();
  const addUser = useAddUser();

  const authenticateUser = useCallback(async () => {
    const user = await authService.authenticate();

    if (!user) return navigate(routes.login);

    addUser(user);
  }, [navigate, addUser]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);
};

export default useIsAuthenticated;
