import { gql } from "@apollo/client";

const getExpensesQuery = gql`
  query GetExpenses($cashflowId: ID!) {
    cashflow(_id: $cashflowId) {
      expenses {
        name
        amount
        date
        skippable
        category {
          label
          value
        }
        frequency {
          _id
          createdAt
          updatedAt
          value {
            label
            value
          }
        }
      }
    }
  }
`;

export default getExpensesQuery;
