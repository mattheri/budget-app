import { gql } from "@apollo/client";
import { CASHFLOW_FIELDS } from "./CashflowFragments";

const getCashflowQuery = gql`
  ${CASHFLOW_FIELDS}
  query GetCashflow($budgetId: ID!) {
    cashflow(budget: $budgetId) {
      ...CashflowFields
    }
  }
`;

export default getCashflowQuery;
