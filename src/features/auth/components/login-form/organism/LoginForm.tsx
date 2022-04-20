import { Box, Container, IconButton } from "@chakra-ui/react";
import useAuthenticate from "features/auth/hooks/UseAuthenticate";
import { FC } from "react";
import { FaGoogle } from "react-icons/fa";

const LoginForm: FC = () => {
  const authenticate = useAuthenticate();

  return (
    <Container>
      <Box>
        <IconButton
          icon={<FaGoogle />}
          aria-label="button"
          onClick={authenticate}
        >
          Login
        </IconButton>
      </Box>
    </Container>
  );
};

export default LoginForm;
