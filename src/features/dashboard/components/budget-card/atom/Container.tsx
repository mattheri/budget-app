import { LinkBox, ChakraProps, Center } from "@chakra-ui/react";
import { FC } from "react";

const boxStyles: ChakraProps = {
  maxW: "sm",
  borderWidth: "1px",
  overflow: "hidden",
  borderRadius: "md",
  boxShadow: "sm",
  width: "100%",
  height: "100%",
};

const Container: FC = ({ children }) => {
  return (
    <LinkBox {...boxStyles}>
      <Center marginBlock="auto" height="100%">
        {children}
      </Center>
    </LinkBox>
  );
};

export default Container;
