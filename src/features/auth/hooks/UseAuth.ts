import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import routes from "router/routes";
import useLoginWithToken from "./UseLoginWithToken";
import useToken from "./UseToken";
import useUserToken from "./UseUserToken";

const useAuth = () => {
  const navigate = useNavigate();

  const navigateBackToLogin = () => navigate(routes.login);

  const token = useToken();
  const userToken = useUserToken({
    onThresholdExceeded: navigateBackToLogin,
    maxThreshold: 5000,
  });

  const loginWithToken = useLoginWithToken(token);

  useEffect(() => {
    loginWithToken();
  }, [token, loginWithToken]);

  useEffect(() => {
    if (!userToken) return;

    navigate(routes.index);
  }, [userToken, navigate]);
};

export default useAuth;
