import { useEffect, useState, DependencyList } from "react";

const useUserToken = (deps?: DependencyList) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken) return;

    setUserToken(userToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), setUserToken]);

  return userToken;
};

export default useUserToken;
