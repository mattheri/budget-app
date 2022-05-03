import { gql } from "@apollo/client";
import { CASHFLOW_FIELDS } from "./CashflowFragments";

const UpdateCashflowExpensesMutation = gql`
  ${CASHFLOW_FIELDS}
  mutation UpdateExpenses($cashflowId: ID!, $expenses: [ID]) {
    updateCashflowExpenses(_id: $cashflowId, input: { expenses: $expenses }) {
      ...CashflowFields
    }
  }
`;

export default UpdateCashflowExpensesMutation;
