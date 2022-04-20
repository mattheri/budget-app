import { gql } from "@apollo/client";
import { CASHFLOW_FIELDS } from "features/cashflow/infra/CashflowFragments";

const getBudgetsQuery = gql`
  ${CASHFLOW_FIELDS}
  query budgetByUserId($token: String!) {
    budgetByUserId(user: $token) {
      _id
      createdAt
      updatedAt
      name
      archived
      user
      cashflow {
        ...CashflowFields
      }
    }
  }
`;

export default getBudgetsQuery;
