import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  const getCode = () => {
    const code = new URLSearchParams(window.location.search).get("code");

    setToken(code);
  };

  useEffect(() => {
    getCode();
  }, []);

  return token;
};

export default useToken;
