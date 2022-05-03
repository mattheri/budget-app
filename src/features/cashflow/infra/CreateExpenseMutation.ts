import { gql } from "@apollo/client";

const CreateExpenseMutation = gql`
  mutation CreateExpense($input: ExpenseInput!) {
    createExpense(input: $input) {
      _id
    }
  }
`;

export default CreateExpenseMutation;
