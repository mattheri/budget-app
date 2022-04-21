import { gql } from "@apollo/client";

const getIncomesQuery = gql`
  query GetExpenses($cashflowId: ID!) {
    cashflow(_id: $cashflowId) {
      incomes {
        name
        amount
        date
        oneTime
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

export default getIncomesQuery;
