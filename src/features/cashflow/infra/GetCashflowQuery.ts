import { gql } from "@apollo/client";
import { CASHFLOW_FIELDS } from "./CashflowFragments";

const GetCashflowQuery = gql`
  ${CASHFLOW_FIELDS}
  query GetCashflow($budgetId: ID!) {
    budget(_id: $budgetId) {
      cashflow {
        ...CashflowFields
      }
    }
  }
`;

export default GetCashflowQuery;
