import { Button, VStack } from "@chakra-ui/react";
import Form from "components/form/Form";
import { FC } from "react";
import FormContainer from "../atom/FormContainer";

const initialValues = {
  email: "",
  password: "",
};

const EmailAndPasswordForm: FC = () => {
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        <VStack>
          <Form.Input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="username"
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <Button type="submit" w="100%" colorScheme="green">
            Login
          </Button>
        </VStack>
      </Form>
    </FormContainer>
  );
};

export default EmailAndPasswordForm;
