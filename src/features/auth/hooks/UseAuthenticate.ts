import { useNavigate } from "react-router-dom";

import AuthService from "../service/auth";

import routes from "router/routes";
import useAddUser from "./UseAddUser";

const authService = new AuthService();

const useAuthenticate = () => {
  const navigate = useNavigate();
  const addUser = useAddUser();

  return async () => {
    const user = await authService.login();

    if (!user?._id) return;

    addUser(user);
    navigate(routes.index);
  };
};

export default useAuthenticate;
