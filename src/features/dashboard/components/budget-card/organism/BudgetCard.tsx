import Container from "../atom/Container";
import { FC } from "react";
import Title from "../atom/Title";

interface Props {
  _id: string;
  name: string;
}

const BudgetCard: FC<Props> = ({ name, _id }) => {
  const to = `/budget/${_id}`;

  return (
    <Container>
      <Title to={to} name={name} />
    </Container>
  );
};

export default BudgetCard;
