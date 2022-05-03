import { FC, SelectHTMLAttributes } from "react";
import { Select as ChakraSelect, FormControl, As } from "@chakra-ui/react";
import { useField } from "formik";
import FormMessage from "../form-message/FormMessage";

interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  name: string;
  options: SelectOption[];
  helperText?: string;
  as?: As;
}

const Select: FC<SelectProps> = ({ name, options, helperText, ...rest }) => {
  const [
    { value, name: inputName, onChange, onBlur },
    { initialTouched, touched, error, initialError, initialValue },
  ] = useField(name);
  const isTouched = touched || initialTouched;
  const isInvalid = isTouched && (!!error || !!initialError);

  return (
    <FormControl isInvalid={isInvalid}>
      <ChakraSelect
        value={value || initialValue}
        name={inputName}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </ChakraSelect>
      <FormMessage
        isInvalid={isInvalid}
        error={error || initialError}
        helperText={helperText}
      />
    </FormControl>
  );
};

export default Select;
