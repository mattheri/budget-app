import { gql } from "@apollo/client";
import { EXPENSE_FIELDS } from "./CashflowFragments";

const UpdateExpenseMutation = gql`
  ${EXPENSE_FIELDS}
  mutation UpdateExpense($id: ID!, $input: ExpenseInput!) {
    updateExpense(_id: $id, input: $input) {
      ...ExpenseFields
    }
  }
`;

export default UpdateExpenseMutation;
