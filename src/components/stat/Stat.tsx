import { FC, useEffect, useState, useRef } from "react";
import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { animate } from "framer-motion";

interface HelperText {
  text: string;
  type?: "increase" | "decrease";
}

interface Props {
  title: string;
  amount: number;
  helperText?: HelperText;
  animateAmount?: boolean;
}

const ANIMATION_DURATION = 1.5;
const ANIMATION_EASING = "easeInOut";

const Stat: FC<Props> = ({
  title,
  amount,
  helperText,
  animateAmount = true,
}) => {
  const [previousValue, setPreviousValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(amount);

  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPreviousValue(currentValue);
    setCurrentValue(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node || !animateAmount) return;

    const controls = animate(previousValue, currentValue, {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASING,
      onUpdate: (value) => {
        node.innerHTML = `$${value.toFixed(2)}`;
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousValue, currentValue]);

  return (
    <ChakraStat>
      <StatLabel>{title}</StatLabel>
      <StatNumber ref={nodeRef}>${amount}</StatNumber>
      {helperText && (
        <StatHelpText>
          {helperText.type && <StatArrow type={helperText.type} />}
          {helperText.text}
        </StatHelpText>
      )}
    </ChakraStat>
  );
};

export default Stat;
