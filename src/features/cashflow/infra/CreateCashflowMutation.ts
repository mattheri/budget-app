import { gql } from "@apollo/client";

const CreateCashflowMutation = gql`
  mutation CreateCashflow($input: CashflowInput!) {
    createCashflow(input: $input) {
      _id
    }
  }
`;

export default CreateCashflowMutation;
