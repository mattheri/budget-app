import { gql } from "@apollo/client";
import { CASHFLOW_FIELDS } from "./CashflowFragments";

const getCashflowQuery = gql`
  ${CASHFLOW_FIELDS}
  query GetCashflow($budgetId: ID!) {
    budget(_id: $budgetId) {
      cashflow {
        ...CashflowFields
      }
    }
  }
`;

export default getCashflowQuery;
