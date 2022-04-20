import { FC } from "react";
import { Outlet } from "react-router-dom";
import useIsAuthenticated from "../hooks/UseIsAuthenticated";

const ProtectedTemplate: FC = () => {
  useIsAuthenticated();

  return <Outlet />;
};

export default ProtectedTemplate;
