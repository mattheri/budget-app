import { gql } from "@apollo/client";

const updateBudgetMutation = gql`
  mutation UpdateBudget($id: ID!, $budget: BudgetInput!) {
    updateBudget(_id: $id, input: $budget) {
      _id
      createdAt
      updatedAt
      archived
      name
      user
    }
  }
`;

export default updateBudgetMutation;
