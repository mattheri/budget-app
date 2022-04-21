import { gql } from "@apollo/client";
import { EXPENSE_FIELDS } from "./CashflowFragments";

const updateCashflowExpensesMutation = gql`
  ${EXPENSE_FIELDS}
  mutation UpdateExpenses($cashflowId: ID!, $expenses: [CashflowExpenseInput!]!) {
    updateCashflowExpenses(_id: $cashflowId, input { expenses: $expenses }) {
      ...ExpenseFields
    }
  }
`;

export default updateCashflowExpensesMutation;
