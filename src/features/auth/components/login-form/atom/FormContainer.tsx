import { Box } from "@chakra-ui/react";
import { FC } from "react";

const FormContainer: FC = ({ children }) => {
  return <Box paddingBlock="3rem">{children}</Box>;
};

export default FormContainer;
