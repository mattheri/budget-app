import { Box, Container, Divider } from "@chakra-ui/react";
import Loading from "components/loading/Loading";
import useAuthenticate from "features/auth/hooks/UseAuthenticate";
import { FC, useEffect, useState } from "react";
import EmailAndPasswordForm from "../molecule/EmailAndPasswordForm";
import GoogleForm from "../molecule/GoogleForm";

const LoginForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const authenticate = useAuthenticate();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const onButtonClick = () => {
    setLoading(true);
    authenticate();
  };

  return (
    <Box as="section" height="100vh" width="100vw" paddingBlock="10rem">
      <Container>
        <EmailAndPasswordForm />
        <Divider />
        <GoogleForm onClick={onButtonClick} />
      </Container>
      {loading && <Loading />}
    </Box>
  );
};

export default LoginForm;
