import { Box } from "@chakra-ui/react";
import { FC } from "react";

const Container: FC = ({ children }) => {
  return <Box as="section">{children}</Box>;
};

export default Container;
