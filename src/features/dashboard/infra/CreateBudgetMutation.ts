import { gql } from "@apollo/client";

const createBudgetMutation = gql`
  mutation ($token: String!, $name: String!, $archived: Boolean!) {
    createBudget(input: { archived: $archived, name: $name, user: $token }) {
      _id
      createdAt
      updatedAt
      archived
      name
      user
    }
  }
`;

export default createBudgetMutation;
