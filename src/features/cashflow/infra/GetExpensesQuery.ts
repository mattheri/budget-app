import { gql } from "@apollo/client";

const getExpensesQuery = gql`
  query GetExpenses($cashflowId: ID!) {
    getExpenses(cashflowId: $cashflowId) {
      
    }
  }
`;

export default getExpensesQuery;
