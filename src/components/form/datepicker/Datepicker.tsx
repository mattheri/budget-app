import { As, FormControl, Input } from "@chakra-ui/react";
import { useField } from "formik";
import { FC, InputHTMLAttributes } from "react";
import FormMessage from "../form-message/FormMessage";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  name: string;
  maxDate?: Date;
  minDate?: Date;
  helperText?: string;
  as?: As;
}

const Datepicker: FC<Props> = ({
  name,
  minDate,
  maxDate,
  helperText,
  ...rest
}) => {
  const [
    { value, onBlur, onChange, name: inputName },
    { touched, error, initialError, initialValue, initialTouched },
  ] = useField(name);
  const isTouched = touched || initialTouched;
  const isInvalid = isTouched && (!!error || !!initialError);

  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        type="date"
        value={value || initialValue}
        onChange={onChange}
        onBlur={onBlur}
        name={inputName}
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

export default Datepicker;
