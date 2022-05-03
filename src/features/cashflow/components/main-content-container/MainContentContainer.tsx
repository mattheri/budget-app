// Types
import { FC } from "react";

// Library components
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainContentContainer: FC = () => {
  return (
    <Container as="main">
      <Outlet />
    </Container>
  );
};

export default MainContentContainer;
