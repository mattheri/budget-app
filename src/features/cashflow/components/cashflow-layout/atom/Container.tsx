import { Grid } from "@chakra-ui/react";
import { FC } from "react";

const Container: FC = ({ children }) => {
  return (
    <Grid
      w="100%"
      gridTemplateColumns={["1fr", "auto 1fr auto"]}
      position="relative"
    >
      {children}
    </Grid>
  );
};

export default Container;
