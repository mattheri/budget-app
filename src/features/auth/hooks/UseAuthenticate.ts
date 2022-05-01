import AuthService from "../service/auth";

const authService = new AuthService();

const useAuthenticate = () => {
  return async () => {
    const loginUrl = await authService.getLoginUrl();

    if (!loginUrl) return;

    window.location.href = loginUrl;
  };
};

export default useAuthenticate;
