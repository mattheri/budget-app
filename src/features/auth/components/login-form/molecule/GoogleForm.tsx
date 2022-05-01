import { IconButton, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { FaGoogle } from "react-icons/fa";
import FormContainer from "../atom/FormContainer";

interface Props {
  onClick: () => void;
}

const GoogleForm: FC<Props> = ({ onClick }) => {
  return (
    <FormContainer>
      <VStack>
        <IconButton
          colorScheme="red"
          w="100%"
          icon={<FaGoogle />}
          aria-label="button"
          onClick={onClick}
        >
          Login
        </IconButton>
      </VStack>
    </FormContainer>
  );
};

export default GoogleForm;
