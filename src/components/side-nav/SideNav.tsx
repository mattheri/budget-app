import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Item {
  sectionTitle: string;
  element?: ReactNode;
  titleLink?: string;
}

interface Props {
  items: Item[];
}

const SideNav: FC<Props> = ({ items }) => {
  const allowMultiple = useBreakpointValue({
    base: false,
    xs: false,
    sm: false,
    md: false,
    lg: true,
  });

  const [isAllowingMultiple, setIsAllowingMultiple] = useState(
    () => allowMultiple
  );
  const [defaultOpened, setDefaultOpened] = useState<number[]>([]);

  useEffect(() => {
    setIsAllowingMultiple(allowMultiple);

    if (!allowMultiple) return;

    setDefaultOpened(items.map((_, i) => i));
  }, [allowMultiple, items]);

  return (
    <Accordion
      as="nav"
      index={defaultOpened}
      allowMultiple={isAllowingMultiple}
      allowToggle={!isAllowingMultiple}
    >
      {items.map(({ sectionTitle, element, titleLink }, index) => (
        <AccordionItem key={index}>
          <Box color="messenger.500">
            <AccordionButton
              as={titleLink ? Link : AccordionButton}
              to={titleLink}
            >
              <Box flex="1" textAlign="left">
                {sectionTitle}
              </Box>
              {!isAllowingMultiple && element && <AccordionIcon />}
            </AccordionButton>
          </Box>
          {element && (
            <AccordionPanel pb={element ? 5 : 0}>{element}</AccordionPanel>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SideNav;
