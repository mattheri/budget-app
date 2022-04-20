import { Box, Grid, Spinner } from "@chakra-ui/react";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <Grid placeItems="center" w="100vw" h="100vh" pos="fixed" top="0" left="0">
      <Box
        height="100vh"
        w="100vw"
        pos="fixed"
        top="0"
        left="0"
        backgroundColor="blackAlpha.600"
        zIndex="-1"
      />
      <Spinner size="xl" zIndex="1" color="white" />
    </Grid>
  );
};

export default Loading;
