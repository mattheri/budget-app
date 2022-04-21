import { gql } from "@apollo/client";

const createCashflowMutation = gql`
  mutation CreateCashflow($input: CashflowInput!) {
    createCashflow(input: $input) {
      _id
    }
  }
`;

export default createCashflowMutation;
