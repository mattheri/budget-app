import { Box, Button, ChakraProps } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  style?: ChakraProps;
}

const BackToDashboardWidget: FC<Props> = ({ style }) => {
  return (
    <Box w="100%" {...style}>
      <Button as={Link} to="/" w="100%" colorScheme="messenger">
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default BackToDashboardWidget;
