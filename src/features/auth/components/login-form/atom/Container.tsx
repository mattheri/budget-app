import { Grid } from "@chakra-ui/react";
import { FC } from "react";

const Container: FC = ({ children }) => {
  return (
    <Grid placeItems="center" width="100%" height="100%">
      {children}
    </Grid>
  );
};

export default Container;
