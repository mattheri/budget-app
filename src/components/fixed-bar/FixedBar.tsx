import { Box, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  position: "top" | "bottom";
}

const FixedBar: FC<Props> = ({ position, children }) => {
  const background = useColorModeValue("white", "gray.800");

  return (
    <Box
      display="block"
      padding="1"
      position="fixed"
      top={position === "top" ? 0 : "auto"}
      bottom={position === "bottom" ? 0 : "auto"}
      w="calc(100% - 3rem)"
      background={background}
      transition="all 0.2s"
    >
      {children}
    </Box>
  );
};

export default FixedBar;
