import { gql } from "@apollo/client";

const createBudgetMutation = gql`
  mutation (
    $token: String!
    $name: String!
    $archived: Boolean!
    $cashflow: ID
  ) {
    createBudget(
      input: {
        archived: $archived
        name: $name
        user: $token
        cashflow: $cashflow
      }
    ) {
      _id
      createdAt
      updatedAt
      archived
      name
      user
      cashflow {
        _id
      }
    }
  }
`;

export default createBudgetMutation;
