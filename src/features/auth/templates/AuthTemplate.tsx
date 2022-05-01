import { Box } from "@chakra-ui/react";
import { FC } from "react";

import Loading from "components/loading/Loading";
import useAuth from "../hooks/UseAuth";

const AuthTemplate: FC = () => {
  useAuth();

  return (
    <Box height="100vh" width="100vw">
      <Loading />
    </Box>
  );
};

export default AuthTemplate;
