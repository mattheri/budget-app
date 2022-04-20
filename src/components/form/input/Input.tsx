import { FC, InputHTMLAttributes } from "react";
import { Input as ChakraInput, FormControl, As } from "@chakra-ui/react";
import { useField } from "formik";
import FormMessage from "../form-message/FormMessage";
import NumberInput from "../number/Number";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  helperText?: string;
  as?: As;
}

const Input: FC<Props> = ({ name, helperText, type, ...rest }) => {
  const [
    { name: inputName, onBlur, onChange, value },
    { touched, error, initialError, initialValue, initialTouched },
  ] = useField(name);
  const isTouched = touched || initialTouched;
  const isInvalid = isTouched && (!!error || !!initialError);

  const element = () => {
    switch (type) {
      case "number":
        return NumberInput;
      default:
        return ChakraInput;
    }
  };

  const Element = element();

  return (
    <FormControl isInvalid={isInvalid}>
      <Element
        value={value || initialValue}
        name={inputName}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        {...rest}
      />
      <FormMessage
        isInvalid={isInvalid}
        error={error || initialError}
        helperText={helperText}
      />
    </FormControl>
  );
};

export default Input;
