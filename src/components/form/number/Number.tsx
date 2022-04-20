import {
  As,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FC, InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  as?: As;
}

const NumberInput: FC<Props> = ({ name, min, max, value, ...rest }) => {
  const inputMin = Number(min) || 0;
  const inputMax = Number(max) || Number.MAX_SAFE_INTEGER;

  return (
    <ChakraNumberInput
      min={inputMin}
      max={inputMax}
      defaultValue={Number(value)}
    >
      <NumberInputField name={name} value={value} {...rest} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};

export default NumberInput;
