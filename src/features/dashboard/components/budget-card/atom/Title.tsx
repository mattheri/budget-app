import { Heading, LinkOverlay } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  to: string;
}

const Title: FC<Props> = ({ name, to }) => {
  return (
    <Heading>
      <LinkOverlay as={Link} to={to}>
        {name}
      </LinkOverlay>
    </Heading>
  );
};

export default Title;
