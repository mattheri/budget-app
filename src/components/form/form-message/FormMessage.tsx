import { FC } from "react";
import { FormErrorMessage, FormHelperText } from "@chakra-ui/react";

interface Props {
  isInvalid: boolean;
  error?: string;
  helperText?: string;
}

const FormMessage: FC<Props> = ({ isInvalid, error, helperText }) => {
  return isInvalid ? (
    <FormErrorMessage>{error}</FormErrorMessage>
  ) : helperText ? (
    <FormHelperText>{helperText}</FormHelperText>
  ) : null;
};

export default FormMessage;
