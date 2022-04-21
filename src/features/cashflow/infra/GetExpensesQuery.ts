import { gql } from "@apollo/client";
import { EXPENSE_FIELDS } from "./CashflowFragments";

const getExpensesQuery = gql`
  ${EXPENSE_FIELDS}
  query GetExpenses($cashflowId: ID!) {
    cashflow(_id: $cashflowId) {
      expenses {
        ...ExpenseFields
      }
    }
  }
`;

export default getExpensesQuery;
